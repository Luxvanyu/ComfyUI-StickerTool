# ==============================================
# ComfyUI 轻量图片贴纸工具 & 动图文件剪贴板服务 (含自动缓存清理)
# ==============================================

import os
import sys
import time
import ctypes
import subprocess
from ctypes import wintypes
from server import PromptServer
from aiohttp import web

WEB_DIRECTORY = "web"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']

# ----------------- 自动缓存清理：只保留最新的 5 个临时文件 -----------------
def clean_temp_dir(temp_dir, max_files=5):
    try:
        if not os.path.exists(temp_dir):
            return
        files = []
        for f in os.listdir(temp_dir):
            fp = os.path.join(temp_dir, f)
            if os.path.isfile(fp):
                files.append((fp, os.path.getmtime(fp)))
        files.sort(key=lambda x: x[1], reverse=True)
        for fp, _ in files[max_files:]:
            try:
                os.remove(fp)
            except Exception:
                pass
    except Exception as e:
        print(f"[StickerTool] 清理缓存异常: {e}")

# ----------------- 64位 Windows 物理文件剪贴板写入 -----------------
class DROPFILES(ctypes.Structure):
    _fields_ = [
        ("pFiles", wintypes.DWORD),
        ("pt", wintypes.POINT),
        ("fNC", wintypes.BOOL),
        ("fWide", wintypes.BOOL),
    ]

def copy_file_to_windows_clipboard(file_path):
    if sys.platform != "win32":
        return False, "当前系统非 Windows"

    kernel32 = ctypes.windll.kernel32
    user32 = ctypes.windll.user32

    kernel32.GlobalAlloc.argtypes = [wintypes.UINT, ctypes.c_size_t]
    kernel32.GlobalAlloc.restype = wintypes.HGLOBAL
    kernel32.GlobalLock.argtypes = [wintypes.HGLOBAL]
    kernel32.GlobalLock.restype = wintypes.LPVOID
    kernel32.GlobalUnlock.argtypes = [wintypes.HGLOBAL]
    kernel32.GlobalUnlock.restype = wintypes.BOOL
    kernel32.GlobalFree.argtypes = [wintypes.HGLOBAL]
    kernel32.GlobalFree.restype = wintypes.HGLOBAL

    user32.OpenClipboard.argtypes = [wintypes.HWND]
    user32.OpenClipboard.restype = wintypes.BOOL
    user32.EmptyClipboard.argtypes = []
    user32.EmptyClipboard.restype = wintypes.BOOL
    user32.SetClipboardData.argtypes = [wintypes.UINT, wintypes.HANDLE]
    user32.SetClipboardData.restype = wintypes.HANDLE
    user32.CloseClipboard.argtypes = []
    user32.CloseClipboard.restype = wintypes.BOOL

    try:
        file_path = os.path.abspath(file_path)
        if not os.path.exists(file_path):
            return False, "文件不存在"

        encoded_path = (file_path + '\0\0').encode('utf-16le')

        dropfiles = DROPFILES()
        dropfiles.pFiles = ctypes.sizeof(DROPFILES)
        dropfiles.pt.x = 0
        dropfiles.pt.y = 0
        dropfiles.fNC = False
        dropfiles.fWide = True

        total_data = bytes(dropfiles) + encoded_path

        h_global = kernel32.GlobalAlloc(0x0042, len(total_data))
        if not h_global:
            return False, "系统内存分配失败"

        ptr = kernel32.GlobalLock(h_global)
        if not ptr:
            kernel32.GlobalFree(h_global)
            return False, "内存锁定失败"

        ctypes.memmove(ptr, total_data, len(total_data))
        kernel32.GlobalUnlock(h_global)

        opened = False
        for _ in range(10):
            if user32.OpenClipboard(0):
                opened = True
                break
            time.sleep(0.05)

        if not opened:
            kernel32.GlobalFree(h_global)
            return False, "剪贴板正被其他软件占用"

        user32.EmptyClipboard()
        res = user32.SetClipboardData(15, h_global)
        user32.CloseClipboard()

        return (True, "成功") if res else (False, "写入文件句柄失败")
    except Exception as e:
        return False, f"底层调用异常: {e}"

# ----------------- API 路由 -----------------
@PromptServer.instance.routes.post('/stickertool/copy_tank_file')
async def copy_tank_file_route(request):
    try:
        data = await request.post()
        file_field = data.get('file')
        filename = data.get('filename', 'image.png')

        if not file_field:
            return web.json_response({"success": False, "error": "未接收到图片数据"})

        plugin_dir = os.path.dirname(os.path.abspath(__file__))
        temp_dir = os.path.join(plugin_dir, "temp")
        os.makedirs(temp_dir, exist_ok=True)

        # 写入前先清理旧缓存，保持磁盘整洁
        clean_temp_dir(temp_dir, max_files=5)

        file_path = os.path.join(temp_dir, filename)
        with open(file_path, "wb") as f:
            f.write(file_field.file.read())

        ok, msg = copy_file_to_windows_clipboard(file_path)
        return web.json_response({"success": ok, "path": file_path, "error": msg if not ok else None})
    except Exception as e:
        return web.json_response({"success": False, "error": str(e)})

@PromptServer.instance.routes.post('/stickertool/open_file_dir')
async def open_file_dir_route(request):
    try:
        data = await request.post()
        filename = data.get('filename', 'image.png')
        plugin_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.abspath(os.path.join(plugin_dir, "temp", filename))
        
        if os.path.exists(file_path) and sys.platform == "win32":
            subprocess.Popen(f'explorer /select,"{file_path}"')
            return web.json_response({"success": True})
        return web.json_response({"success": False, "error": "文件不存在"})
    except Exception as e:
        return web.json_response({"success": False, "error": str(e)})