// ==============================================
// ComfyUI 轻量图片贴纸工具 & 幻影坦克 (全量无错优化版)
// ==============================================

import { app } from "../../../scripts/app.js";

// ================= 多语言字典配置 (i18n) =================
const I18N = {
    zh: {
        mainTitle: "轻量图片贴纸工具",
        tankTitle: "🎭 APNG 幻影坦克生成器",
        drawerTitle: "⭐ 我的贴纸收藏",
        btnLoadBase: "📂 导入背景",
        btnLoadSticker: "🖼️ 导入贴纸/GIF",
        btnDrawer: "⭐ 贴纸库",
        btnFav: "💖 收藏选中",
        btnFlip: "↔️ 水平翻转",
        btnRotate: "🔄 重置旋转",
        btnLayerUp: "⬆️ 上移",
        btnLayerDown: "⬇️ 下移",
        btnSpeed: "⏩ 变速",
        btnTank: "🎭 幻影坦克",
        btnPaste: "📋 粘贴",
        btnMosaic: "🖌️ 马赛克",
        btnDelWhite: "🗑️ 去白底",
        btnPickBg: "🎨 取色去底",
        btnClear: "🧹 清空",
        btnUndo: "↩️ 撤销",
        btnRedo: "↪️ 重做",
        presetLabel: "📦 动图规格:",
        p640: "⚡ 640px · 15FPS (轻量秒发·约1~2MB)",
        p720: "🌟 720px · 18FPS (清晰均衡·约2~4MB)",
        p1024: "💎 1024px · 20FPS (强烈推荐·约4~7MB)",
        p1440: "👑 1440px · 24FPS (2K极致·约8~15MB)",
        pOrig: "⚠️ 原画不缩放",
        btnSave: "💾 保存",
        btnCopy: "✅ 复制 (直接发)",
        btnNightOn: "🌙 夜间模式",
        btnNightOff: "🌞 日间模式",
        statusReady: "就绪 | 快捷键: Ctrl+Shift+S | 拖拽顶部手柄自由旋转(按Shift吸附15°) | 拖角按Shift等比缩放",
        tankSlotA: "⚪ 表图 (聊天框常态伪装 · 100%原色)",
        tankSlotB: "⚫ 里图 (点开全屏大图真相 · 100%原色)",
        tankEmptySlot: "未导入 (可直接 Ctrl+V)",
        tankBtnUpload: "📁 本地上传",
        tankBtnPaste: "📋 粘贴",
        tankBtnUseBase: "🎨 当前画布",
        tankFitMode: "里图适配:",
        tankFitContain: "等比居中黑边 (推荐)",
        tankFitCover: "等比裁剪铺满",
        tankFitStretch: "直接拉伸",
        tankAuditLevel: "🛡️ 防审等级:",
        auditStrong: "🔴 极高强度 (高反差扫描 · 严苛风控)",
        auditSoft: "🟠 高强度 (柔和点阵 · 护眼微动)",
        auditStatic: "🟡 中高强度 (静态网纹 · 绝对0闪烁 · 护眼首选)",
        auditChroma: "🟢 中等强度 (等光色差 · 视觉静止)",
        auditLight: "🔵 低强度 (微弱噪点 · 原图画质)",
        auditNone: "⚪ 关闭 (原图输出 · 无处理)",
        tankNameStyle: "命名伪装:",
        nameClick: "点击查看原图.png (诱导点开)",
        nameCamera: "IMG_实拍照片格式 (避开敏感词风控)",
        tankBtnGenerate: "✨ 开始生成",
        tankPrevCover: "📱 聊天气泡常态展示 (表图)",
        tankPrevInner: "🔍 点开全屏展示 (里图)",
        tankPrevWait: "生成后在此查看",
        tankTip: "📢 提示：点击「定位文件」可直接拖拽发送，彻底防剧透！",
        tankBtnOpenDir: "📂 定位文件",
        tankBtnSave: "💾 保存 APNG",
        tankBtnCopy: "📋 复制文件",
        langToggle: "🌐 EN"
    },
    en: {
        mainTitle: "Lightweight Sticker Tool",
        tankTitle: "🎭 APNG Mirage Tank Generator",
        drawerTitle: "⭐ Sticker Favorites",
        btnLoadBase: "📂 Background",
        btnLoadSticker: "🖼️ Add Sticker/GIF",
        btnDrawer: "⭐ Library",
        btnFav: "💖 Favorite",
        btnFlip: "↔️ Flip H",
        btnRotate: "🔄 Reset Rotate",
        btnLayerUp: "⬆️ Move Up",
        btnLayerDown: "⬇️ Move Down",
        btnSpeed: "⏩ Speed",
        btnTank: "🎭 Mirage Tank",
        btnPaste: "📋 Paste",
        btnMosaic: "🖌️ Mosaic",
        btnDelWhite: "🗑️ Cut White",
        btnPickBg: "🎨 Color Pick",
        btnClear: "🧹 Clear",
        btnUndo: "↩️ Undo",
        btnRedo: "↪️ Redo",
        presetLabel: "📦 Spec:",
        p640: "⚡ 640px · 15FPS (Lightweight · 1~2MB)",
        p720: "🌟 720px · 18FPS (Balanced · 2~4MB)",
        p1024: "💎 1024px · 20FPS (Recommended · 4~7MB)",
        p1440: "👑 1440px · 24FPS (2K Ultra · 8~15MB)",
        pOrig: "⚠️ Original (Unscaled)",
        btnSave: "💾 Save",
        btnCopy: "✅ Copy (Instant)",
        btnNightOn: "🌙 Dark",
        btnNightOff: "🌞 Light",
        statusReady: "Ready | Shortcut: Ctrl+Shift+S | Drag top handle to rotate (Hold Shift to snap 15°)",
        tankSlotA: "⚪ Cover Image (Default Bubble · 100% Color)",
        tankSlotB: "⚫ Hidden Image (Full Screen Truth · 100% Color)",
        tankEmptySlot: "Empty (Ctrl+V supported)",
        tankBtnUpload: "📁 Upload",
        tankBtnPaste: "📋 Paste",
        tankBtnUseBase: "🎨 From Canvas",
        tankFitMode: "Fit Mode:",
        tankFitContain: "Contain Black Edge (Recommended)",
        tankFitCover: "Cover Crop",
        tankFitStretch: "Stretch",
        tankAuditLevel: "🛡️ Anti-Audit:",
        auditStrong: "🔴 Extreme (High Contrast · Strict Filter)",
        auditSoft: "🟠 High (Soft Dot Matrix · Smooth)",
        auditStatic: "🟡 Medium-High (Static Mask · 0 Flicker · Recommended)",
        auditChroma: "🟢 Medium (Chroma Shift · Still)",
        auditLight: "🔵 Low (Subtle Noise · Clean)",
        auditNone: "⚪ Off (Original Output)",
        tankNameStyle: "Filename Camouflage:",
        nameClick: "Click_To_View_Full.png",
        nameCamera: "IMG_Camera_Style.png (Anti-Keyword Filter)",
        tankBtnGenerate: "✨ Generate",
        tankPrevCover: "📱 Chat Bubble View (Cover)",
        tankPrevInner: "🔍 Full Screen View (Hidden)",
        tankPrevWait: "Generate to preview here",
        tankTip: "📢 Tip: Click 'Locate File' to drag and drop file directly!",
        tankBtnOpenDir: "📂 Locate File",
        tankBtnSave: "💾 Save APNG",
        tankBtnCopy: "📋 Copy File",
        langToggle: "🌐 中文"
    }
};

// ================= APNG 底层二进制工具 =================
const CRC_TABLE = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    CRC_TABLE[i] = c >>> 0;
}

function getCRC32(bytes, start, length) {
    let crc = 0xFFFFFFFF;
    const end = start + length;
    for (let i = start; i < end; i++) {
        crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

function buildChunk(type, data) {
    const dataLen = data ? data.length : 0;
    const chunk = new Uint8Array(4 + 4 + dataLen + 4);
    const view = new DataView(chunk.buffer);
    view.setUint32(0, dataLen);
    for (let i = 0; i < 4; i++) {
        chunk[4 + i] = type.charCodeAt(i);
    }
    if (dataLen > 0) chunk.set(data, 8);
    const crc = getCRC32(chunk, 4, 4 + dataLen);
    view.setUint32(8 + dataLen, crc);
    return chunk;
}

function parsePNGChunks(arrayBuffer) {
    const u8 = new Uint8Array(arrayBuffer);
    const view = new DataView(arrayBuffer);
    if (view.getUint32(0) !== 0x89504E47 || view.getUint32(4) !== 0x0D0A1A0A) {
        throw new Error("Invalid PNG Data");
    }
    let pos = 8;
    const chunks = [];
    while (pos < u8.length) {
        const len = view.getUint32(pos);
        const type = String.fromCharCode(u8[pos + 4], u8[pos + 5], u8[pos + 6], u8[pos + 7]);
        const data = u8.slice(pos + 8, pos + 8 + len);
        const rawChunk = u8.slice(pos, pos + 12 + len);
        chunks.push({ type, data, rawChunk });
        pos += 12 + len;
    }
    return chunks;
}

function createAcTL(numFrames, numPlays) {
    const data = new Uint8Array(8);
    const view = new DataView(data.buffer);
    view.setUint32(0, numFrames);
    view.setUint32(4, numPlays);
    return buildChunk('acTL', data);
}

function createFcTL(seq, w, h, x_offset = 0, y_offset = 0, delayNum = 10, delayDen = 100, dispose_op = 0, blend_op = 0) {
    const data = new Uint8Array(26);
    const view = new DataView(data.buffer);
    view.setUint32(0, seq);
    view.setUint32(4, w);
    view.setUint32(8, h);
    view.setUint32(12, x_offset);
    view.setUint32(16, y_offset);
    view.setUint16(20, delayNum);
    view.setUint16(22, delayDen);
    data[24] = dispose_op;
    data[25] = blend_op;
    return buildChunk('fcTL', data);
}

function createFdAT(seq, idatData) {
    const data = new Uint8Array(4 + idatData.length);
    const view = new DataView(data.buffer);
    view.setUint32(0, seq);
    data.set(idatData, 4);
    return buildChunk('fdAT', data);
}

async function encodeSubframeAPNG(frameItems, numPlays = 0) {
    const numFrames = frameItems.length;
    const pngBuffers = [];
    for (const item of frameItems) {
        const blob = await new Promise(r => item.canvas.toBlob(r, 'image/png'));
        pngBuffers.push(await blob.arrayBuffer());
    }

    const parsedFrames = pngBuffers.map(buf => parsePNGChunks(buf));
    const signature = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    const ihdrChunk = parsedFrames[0].find(c => c.type === 'IHDR').rawChunk;
    const actlChunk = createAcTL(numFrames, numPlays);

    let seq = 0;
    const frameChunks = [];

    const f0 = frameItems[0];
    frameChunks.push(createFcTL(seq++, f0.canvas.width, f0.canvas.height, 0, 0, f0.delayNum, f0.delayDen, 0, 0));
    const idats0 = parsedFrames[0].filter(c => c.type === 'IDAT');
    for (const c of idats0) frameChunks.push(c.rawChunk);

    for (let i = 1; i < numFrames; i++) {
        const fi = frameItems[i];
        frameChunks.push(createFcTL(seq++, fi.canvas.width, fi.canvas.height, fi.x, fi.y, fi.delayNum, fi.delayDen, 0, 0));
        const idats = parsedFrames[i].filter(c => c.type === 'IDAT');
        for (const c of idats) {
            frameChunks.push(createFdAT(seq++, c.data));
        }
    }

    const iendChunk = buildChunk('IEND', null);
    const totalLen = signature.length + ihdrChunk.length + actlChunk.length +
                     frameChunks.reduce((acc, c) => acc + c.length, 0) + iendChunk.length;

    const outBytes = new Uint8Array(totalLen);
    let offset = 0;
    const append = (u8) => {
        outBytes.set(u8, offset);
        offset += u8.length;
    };

    append(signature);
    append(ihdrChunk);
    append(actlChunk);
    for (const c of frameChunks) append(c);
    append(iendChunk);

    return new Blob([outBytes], { type: 'image/png' });
}

// ================= IndexedDB 本地贴纸库 =================
class StickerDB {
    constructor() {
        this.dbName = 'ComfyUI_StickerTool_DB';
        this.storeName = 'sticker_favorites';
        this.db = null;
    }

    async init() {
        if (this.db) return this.db;
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id' });
                }
            };
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };
            request.onerror = () => reject(request.error);
        });
    }

    async add(dataUrl, isAnimated = false) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const item = {
                id: 'sticker_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
                dataUrl: dataUrl,
                isAnimated: !!isAnimated,
                createdAt: Date.now()
            };
            const req = store.add(item);
            req.onsuccess = () => resolve(item);
            req.onerror = () => reject(req.error);
        });
    }

    async getAll() {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => reject(req.error);
        });
    }

    async delete(id) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const req = store.delete(id);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
}

class StickerTool {
    constructor() {
        this.baseImage = null;
        this.stickers = [];
        this.selectedSticker = -1;
        this.dragging = false;
        this.resizing = false;
        this.rotating = false;
        this.resizeCorner = null;
        this.lastX = 0;
        this.lastY = 0;
        this.scale = 1.0;
        this.pickingColor = false;
        
        // 马赛克
        this.mosaicMode = false;
        this.mosaicPainting = false;
        this.mosaicBrushSize = 25;
        this.mosaicBlockSize = 10;
        this.lastMosaicX = 0;
        this.lastMosaicY = 0;
        
        // 撤销/重做
        this.undoStack = [];
        this.redoStack = [];
        this._undoingOrRedoing = false;
        this.maxHistory = 20;
        
        // 浮动按钮拖拽防误触
        this.floatingBtnDragging = false;
        this.floatingBtnHasMoved = false;
        this.floatingBtnStartX = 0;
        this.floatingBtnStartY = 0;
        this.floatingBtnOffsetX = 0;
        this.floatingBtnOffsetY = 0;

        // 幻影坦克
        this.tankImageA = null;
        this.tankImageB = null;
        this.tankApngBlob = null;
        this.mirageActiveSlot = null;
        this.lastGeneratedFilename = '点击查看原图.png';
        this.tankPreviewBg = 'dark';
        this.lastTankObjectUrl = null;

        // 动图播放循环
        this.animLoopRunning = false;

        this.db = new StickerDB();
        this.showDrawer = false;
        this.nightMode = localStorage.getItem('stickerToolNightMode') === 'true' || false;
        this.lang = localStorage.getItem('stickerToolLang') || 'zh';
        
        this.createUI();
        this.createToastContainer();
        this.createLoadingOverlay();
        this.createMirageModal();
        this.createFloatingButton();
        this.bindEvents();
        this.bindGlobalShortcut();
        
        this.applyLanguage();
        this.applyNightModeStyles();
    }

    // ================= 优雅非阻塞 Toast 组件 =================
    createToastContainer() {
        this.toastBox = document.createElement('div');
        this.toastBox.style.cssText = `
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2000000;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            pointer-events: none;
        `;
        document.body.appendChild(this.toastBox);
    }

    showToast(message, type = 'info', duration = 2200) {
        const toast = document.createElement('div');
        const colors = {
            success: '#28a745',
            warn: '#ff9800',
            error: '#dc3545',
            info: '#0078d7'
        };
        const bg = colors[type] || colors.info;

        toast.style.cssText = `
            background: rgba(28, 28, 30, 0.94);
            color: #ffffff;
            padding: 9px 18px;
            border-radius: 8px;
            font-size: 13.5px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
            border-left: 4px solid ${bg};
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: auto;
            user-select: none;
            backdrop-filter: blur(8px);
        `;
        toast.textContent = message;
        this.toastBox.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0) scale(1)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-10px) scale(0.96)';
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 250);
        }, duration);
    }

    t(key) {
        return (I18N[this.lang] && I18N[this.lang][key]) ? I18N[this.lang][key] : key;
    }

    toggleLanguage() {
        this.lang = (this.lang === 'zh') ? 'en' : 'zh';
        localStorage.setItem('stickerToolLang', this.lang);
        this.applyLanguage();
    }

    applyLanguage() {
        this.titleBarText.textContent = this.t('mainTitle');
        document.getElementById('btnLoadBase').textContent = this.t('btnLoadBase');
        document.getElementById('btnLoadSticker').textContent = this.t('btnLoadSticker');
        document.getElementById('btnDrawer').textContent = this.t('btnDrawer');
        document.getElementById('btnFav').textContent = this.t('btnFav');
        document.getElementById('btnFlip').textContent = this.t('btnFlip');
        document.getElementById('btnRotate').textContent = this.t('btnRotate');
        document.getElementById('btnLayerUp').textContent = this.t('btnLayerUp');
        document.getElementById('btnLayerDown').textContent = this.t('btnLayerDown');
        document.getElementById('speedBtn').textContent = this.t('btnSpeed');
        document.getElementById('btnTank').textContent = this.t('btnTank');
        document.getElementById('btnPaste').textContent = this.t('btnPaste');
        document.getElementById('mosaicBtn').textContent = this.t('btnMosaic');
        document.getElementById('btnDelWhite').textContent = this.t('btnDelWhite');
        document.getElementById('btnPickBg').textContent = this.t('btnPickBg');
        document.getElementById('btnClear').textContent = this.t('btnClear');
        document.getElementById('undoBtn').textContent = this.t('btnUndo');
        document.getElementById('redoBtn').textContent = this.t('btnRedo');
        document.getElementById('btnSave').textContent = this.t('btnSave');
        document.getElementById('btnCopy').textContent = this.t('btnCopy');
        document.getElementById('langBtn').textContent = this.t('langToggle');
        document.getElementById('nightModeBtn').textContent = this.nightMode ? this.t('btnNightOff') : this.t('btnNightOn');

        document.getElementById('exportPresetLabel').textContent = this.t('presetLabel');
        const selPreset = document.getElementById('exportPresetSelect');
        const curPreset = selPreset.value;
        selPreset.options[0].textContent = this.t('p640');
        selPreset.options[1].textContent = this.t('p720');
        selPreset.options[2].textContent = this.t('p1024');
        selPreset.options[3].textContent = this.t('p1440');
        selPreset.options[4].textContent = this.t('pOrig');
        selPreset.value = curPreset;

        this.drawerTitleSpan.textContent = this.t('drawerTitle');
        this.statusBar.textContent = this.t('statusReady');

        this.mirageTitleSpan.textContent = this.t('tankTitle');
        document.getElementById('titleSlotA').textContent = this.t('tankSlotA');
        document.getElementById('titleSlotB').textContent = this.t('tankSlotB');
        document.getElementById('btnUploadA').textContent = this.t('tankBtnUpload');
        document.getElementById('btnPasteA').textContent = this.t('tankBtnPaste');
        document.getElementById('btnUseBaseA').textContent = this.t('tankBtnUseBase');
        document.getElementById('btnUploadB').textContent = this.t('tankBtnUpload');
        document.getElementById('btnPasteB').textContent = this.t('tankBtnPaste');

        document.getElementById('lblTankFit').textContent = this.t('tankFitMode');
        const selFit = document.getElementById('tankFitMode');
        const curFit = selFit.value;
        selFit.options[0].textContent = this.t('tankFitContain');
        selFit.options[1].textContent = this.t('tankFitCover');
        selFit.options[2].textContent = this.t('tankFitStretch');
        selFit.value = curFit;

        document.getElementById('lblTankAudit').textContent = this.t('tankAuditLevel');
        const selAudit = document.getElementById('tankAuditLevel');
        const curAudit = selAudit.value;
        selAudit.options[0].textContent = this.t('auditStrong');
        selAudit.options[1].textContent = this.t('auditSoft');
        selAudit.options[2].textContent = this.t('auditStatic');
        selAudit.options[3].textContent = this.t('auditChroma');
        selAudit.options[4].textContent = this.t('auditLight');
        selAudit.options[5].textContent = this.t('auditNone');
        selAudit.value = curAudit;

        document.getElementById('lblTankName').textContent = this.t('tankNameStyle');
        const selName = document.getElementById('tankNameStyle');
        const curName = selName.value;
        selName.options[0].textContent = this.t('nameClick');
        selName.options[1].textContent = this.t('nameCamera');
        selName.value = curName;

        document.getElementById('btnGenerateTank').textContent = this.t('tankBtnGenerate');
        document.getElementById('prevTitleCover').textContent = this.t('tankPrevCover');
        document.getElementById('prevTitleInner').textContent = this.t('tankPrevInner');
        document.getElementById('tankTipSpan').textContent = this.t('tankTip');
        document.getElementById('btnOpenTankDir').textContent = this.t('tankBtnOpenDir');
        document.getElementById('btnSaveTankPNG').textContent = this.t('tankBtnSave');
        document.getElementById('btnCopyTankFile').textContent = this.t('tankBtnCopy');
    }

    createLoadingOverlay() {
        this.loadingOverlay = document.createElement('div');
        this.loadingOverlay.style.cssText = `
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100000;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 14px;
            gap: 14px;
            backdrop-filter: blur(2px);
            user-select: none;
        `;

        if (!document.getElementById('sticker-tool-spinner-style')) {
            const style = document.createElement('style');
            style.id = 'sticker-tool-spinner-style';
            style.textContent = `
                @keyframes stickerSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .sticker-spinner {
                    width: 40px; height: 40px;
                    border: 4px solid rgba(255, 255, 255, 0.2);
                    border-top-color: #0078d7;
                    border-radius: 50%;
                    animation: stickerSpin 0.75s linear infinite;
                }
            `;
            document.head.appendChild(style);
        }

        const spinner = document.createElement('div');
        spinner.className = 'sticker-spinner';
        this.loadingText = document.createElement('div');
        this.loadingText.style.fontWeight = 'bold';
        this.loadingText.textContent = 'Processing...';

        this.loadingOverlay.appendChild(spinner);
        this.loadingOverlay.appendChild(this.loadingText);
        this.container.appendChild(this.loadingOverlay);
    }

    showLoading(text = 'Processing...') {
        this.loadingText.textContent = text;
        this.loadingOverlay.style.display = 'flex';
    }

    hideLoading() {
        this.loadingOverlay.style.display = 'none';
    }

    startAnimationLoop() {
        if (this.animLoopRunning) return;
        this.animLoopRunning = true;
        
        const loop = (now) => {
            if (!this.modal || this.modal.style.display !== 'flex') {
                this.animLoopRunning = false;
                return;
            }

            let hasAnim = false;
            for (const s of this.stickers) {
                if (s.isAnimated && s.frames && s.frames.length > 1) {
                    hasAnim = true;
                    if (!s.lastFrameTime) s.lastFrameTime = now;
                    const elapsed = now - s.lastFrameTime;
                    const spd = s.speed || 1.0;
                    const currentDur = ((s.frames[s.frameIndex].duration || 0.1) * 1000) / spd;
                    
                    if (elapsed >= currentDur) {
                        s.frameIndex = (s.frameIndex + 1) % s.frames.length;
                        s.image = s.frames[s.frameIndex].bitmap;
                        s.lastFrameTime = now;
                    }
                }
            }

            if (hasAnim) {
                this.updateCanvas();
                requestAnimationFrame(loop);
            } else {
                this.animLoopRunning = false;
            }
        };

        requestAnimationFrame(loop);
    }
    
    createUI() {
        this.modal = document.createElement('div');
        this.modal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999999;
            display: none;
            justify-content: center;
            align-items: center;
        `;
        
        this.container = document.createElement('div');
        this.container.style.cssText = `
            background: #f0f0f0;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            width: 92vw; height: 92vh;
            max-width: 1440px; max-height: 920px;
            display: flex; flex-direction: column;
            overflow: hidden; position: relative;
            transition: background 0.3s ease;
        `;
        
        this.titleBar = document.createElement('div');
        this.titleBar.style.cssText = `
            background: #0078d7; color: white !important;
            padding: 10px 15px; font-size: 16px; font-weight: bold;
            display: flex; justify-content: space-between; align-items: center;
        `;
        this.titleBarText = document.createElement('span');
        this.titleBarText.textContent = "轻量图片贴纸工具";
        this.titleBar.appendChild(this.titleBarText);
        
        this.closeButton = document.createElement('button');
        this.closeButton.textContent = '×';
        this.closeButton.style.cssText = `
            background: transparent !important; border: none !important;
            color: white !important; font-size: 24px !important;
            cursor: pointer; padding: 0 10px !important; line-height: 1 !important;
        `;
        this.closeButton.onclick = () => this.hide();
        this.titleBar.appendChild(this.closeButton);
        
        this.toolbar = document.createElement('div');
        this.toolbar.style.cssText = `
            background: #e0e0e0; padding: 8px 10px;
            display: flex; gap: 6px; flex-wrap: wrap; align-items: center;
        `;
        
        const buttons = [
            { id: 'btnLoadBase', action: () => this.loadBaseImage() },
            { id: 'btnLoadSticker', action: () => this.loadSticker() },
            { id: 'btnDrawer', action: () => this.toggleFavoritesDrawer() },
            { id: 'btnFav', action: () => this.favoriteCurrentSticker() },
            { id: 'btnFlip', action: () => this.flipCurrentSticker() },
            { id: 'btnRotate', action: () => this.resetRotationCurrentSticker() },
            { id: 'btnLayerUp', action: () => this.moveLayerUp() },
            { id: 'btnLayerDown', action: () => this.moveLayerDown() },
            { id: 'speedBtn', action: () => this.changeSpeedCurrentSticker() },
            { id: 'btnTank', action: () => this.openMirageModal() },
            { id: 'btnPaste', action: () => this.pasteFromClipboard() },
            { id: 'mosaicBtn', action: () => this.toggleMosaicMode() },
            { id: 'btnDelWhite', action: () => this.removeBackground('#FFFFFF', 30) },
            { id: 'btnPickBg', action: () => this.startColorPicking() },
            { id: 'btnClear', action: () => this.clearCanvas() },
            { id: 'undoBtn', action: () => this.undo() },
            { id: 'redoBtn', action: () => this.redo() },
        ];
        
        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.id = btn.id;
            button.style.cssText = `
                padding: 5px 10px !important; border: 1px solid #ccc !important;
                border-radius: 4px !important; background: white !important;
                color: black !important; cursor: pointer !important;
                font-size: 13px !important; height: 32px !important;
                line-height: 1 !important; display: inline-flex !important;
                align-items: center !important; justify-content: center !important;
                white-space: nowrap !important;
            `;
            button.onclick = btn.action;
            this.toolbar.appendChild(button);
        });

        const presetContainer = document.createElement('div');
        presetContainer.style.cssText = 'display: inline-flex; align-items: center; gap: 4px; font-size: 13px; margin: 0 4px;';
        presetContainer.innerHTML = `
            <span id="exportPresetLabel" style="font-size:12px; font-weight:bold;">📦 动图规格:</span>
            <select id="exportPresetSelect" style="
                height: 32px; border-radius: 4px; border: 1px solid #ccc !important;
                padding: 0 8px !important; font-size: 12px !important;
                cursor: pointer !important; background: #fff !important; color: #000 !important;
            ">
                <option value="640_15">⚡ 640px · 15FPS (轻量秒发·约1~2MB)</option>
                <option value="720_18">🌟 720px · 18FPS (清晰均衡·约2~4MB)</option>
                <option value="1024_20" selected>💎 1024px · 20FPS (强烈推荐·约4~7MB)</option>
                <option value="1440_24">👑 1440px · 24FPS (2K极致·约8~15MB)</option>
                <option value="orig">⚠️ 原画不缩放</option>
            </select>
        `;
        this.toolbar.appendChild(presetContainer);

        const actionButtons = [
            { id: 'btnSave', action: () => this.saveImage(), bg: '#28a745', color: '#fff' },
            { id: 'btnCopy', action: () => this.copyToClipboard(), bg: '#0078d7', color: '#fff' },
            { id: 'langBtn', action: () => this.toggleLanguage(), bg: '#4f5b66', color: '#fff' },
            { id: 'nightModeBtn', action: () => this.toggleNightMode(), bg: '#333', color: '#fff' },
        ];

        actionButtons.forEach(btn => {
            const button = document.createElement('button');
            button.id = btn.id;
            button.style.cssText = `
                padding: 5px 12px !important; border: 1px solid ${btn.bg} !important;
                border-radius: 4px !important; background: ${btn.bg} !important;
                color: ${btn.color} !important; cursor: pointer !important;
                font-size: 13px !important; font-weight: bold !important;
                height: 32px !important; line-height: 1 !important;
                display: inline-flex !important; align-items: center !important;
                justify-content: center !important; white-space: nowrap !important;
            `;
            button.onclick = btn.action;
            this.toolbar.appendChild(button);
        });
        
        this.mainContent = document.createElement('div');
        this.mainContent.style.cssText = `flex: 1; display: flex; position: relative; overflow: hidden;`;

        this.canvasContainer = document.createElement('div');
        this.canvasContainer.style.cssText = `flex: 1; overflow: hidden; position: relative; display: flex; justify-content: center; align-items: center;`;
        
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `background: #f0f0f0; cursor: default; transition: background 0.3s ease;`;
        this.canvasContainer.appendChild(this.canvas);
        this.mainContent.appendChild(this.canvasContainer);

        this.createFavoritesDrawer();
        this.mainContent.appendChild(this.drawer);

        this.statusBar = document.createElement('div');
        this.statusBar.style.cssText = `
            background: #e0e0e0; color: black !important;
            padding: 5px 10px; font-size: 12px; border-top: 1px solid #ccc;
        `;
        
        this.container.appendChild(this.titleBar);
        this.container.appendChild(this.toolbar);
        this.container.appendChild(this.mainContent);
        this.container.appendChild(this.statusBar);
        this.modal.appendChild(this.container);
        document.body.appendChild(this.modal);
        
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = 'image/*';
        this.fileInput.style.display = 'none';
        document.body.appendChild(this.fileInput);
        
        this.updateUndoRedoButtons();
    }

    createFavoritesDrawer() {
        this.drawer = document.createElement('div');
        this.drawer.style.cssText = `width: 260px; background: #fafafa; border-left: 1px solid #ccc; display: none; flex-direction: column; z-index: 10;`;

        const drawerHeader = document.createElement('div');
        drawerHeader.style.cssText = `padding: 10px; font-weight: bold; font-size: 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd;`;
        this.drawerTitleSpan = document.createElement('span');
        this.drawerTitleSpan.textContent = "⭐ 我的贴纸收藏";
        drawerHeader.appendChild(this.drawerTitleSpan);

        const closeDrawerBtn = document.createElement('button');
        closeDrawerBtn.textContent = '✕';
        closeDrawerBtn.style.cssText = `border: none; background: transparent; cursor: pointer; font-size: 14px;`;
        closeDrawerBtn.onclick = () => this.toggleFavoritesDrawer(false);
        drawerHeader.appendChild(closeDrawerBtn);
        this.drawer.appendChild(drawerHeader);

        this.drawerBody = document.createElement('div');
        this.drawerBody.style.cssText = `flex: 1; padding: 10px; overflow-y: auto; display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 100px; gap: 10px;`;
        this.drawer.appendChild(this.drawerBody);
    }

    async toggleFavoritesDrawer(forceState = null) {
        this.showDrawer = forceState !== null ? forceState : !this.showDrawer;
        this.drawer.style.display = this.showDrawer ? 'flex' : 'none';
        if (this.showDrawer) {
            await this.renderFavoritesList();
        }
        setTimeout(() => this.fitToWindow(), 50);
    }

    async favoriteCurrentSticker() {
        if (this.selectedSticker === -1) {
            this.showToast(this.lang === 'zh' ? "请先用鼠标选中需要收藏的贴纸！" : "Please select a sticker first!", 'warn');
            return;
        }

        const sticker = this.stickers[this.selectedSticker];
        let dataUrl = '';
        let isAnimated = false;

        if (sticker.isAnimated && sticker.rawBlob) {
            isAnimated = true;
            dataUrl = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(sticker.rawBlob);
            });
        } else {
            const canvas = document.createElement('canvas');
            canvas.width = sticker.image.width;
            canvas.height = sticker.image.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(sticker.image, 0, 0);
            dataUrl = canvas.toDataURL('image/png');
        }

        try {
            await this.db.add(dataUrl, isAnimated);
            this.showToast(this.lang === 'zh' ? "🎉 贴纸已保存到收藏夹！" : "🎉 Sticker saved to library!", 'success');
            if (this.showDrawer) {
                await this.renderFavoritesList();
            }
        } catch (e) {
            this.showToast("Error: " + e.message, 'error');
        }
    }

    async renderFavoritesList() {
        this.drawerBody.innerHTML = '';
        const list = await this.db.getAll();
        
        if (list.length === 0) {
            this.drawerBody.style.display = 'flex';
            this.drawerBody.style.alignItems = 'center';
            this.drawerBody.style.justifyContent = 'center';
            this.drawerBody.innerHTML = `<div style="color: #888; font-size: 12px; text-align: center;">${this.lang === 'zh' ? '暂无收藏' : 'No favorites'}</div>`;
            return;
        }

        this.drawerBody.style.display = 'grid';

        list.reverse().forEach(item => {
            const card = document.createElement('div');
            card.style.cssText = `
                position: relative; border: 1px solid ${this.nightMode ? '#555' : '#ddd'};
                border-radius: 6px; padding: 4px; cursor: pointer;
                background: ${this.nightMode ? '#333' : '#fff'};
                display: flex; align-items: center; justify-content: center; overflow: hidden;
            `;

            const img = document.createElement('img');
            img.src = item.dataUrl;
            img.style.cssText = `max-width: 100%; max-height: 100%; object-fit: contain; user-select: none;`;
            card.onclick = () => this.addStickerFromDataUrl(item);

            const delBtn = document.createElement('button');
            delBtn.textContent = '×';
            delBtn.style.cssText = `
                position: absolute; top: 2px; right: 2px;
                background: rgba(255, 60, 60, 0.85); color: white;
                border: none; border-radius: 50%; width: 18px; height: 18px;
                font-size: 12px; line-height: 1; cursor: pointer;
            `;
            delBtn.onclick = async (e) => {
                e.stopPropagation();
                if (confirm(this.lang === 'zh' ? "确定删除此贴纸？" : "Delete this sticker?")) {
                    await this.db.delete(item.id);
                    await this.renderFavoritesList();
                }
            };

            card.appendChild(img);
            card.appendChild(delBtn);
            this.drawerBody.appendChild(card);
        });
    }

    async addStickerFromDataUrl(item) {
        if (!this.baseImage) {
            this.showToast(this.lang === 'zh' ? "请先导入背景图片" : "Please load background image first", 'warn');
            return;
        }

        const dataUrl = typeof item === 'string' ? item : item.dataUrl;
        const isAnimated = typeof item === 'object' ? item.isAnimated : dataUrl.startsWith('data:image/gif');

        if (isAnimated) {
            try {
                this.showLoading(this.lang === 'zh' ? "正在解码动态贴纸..." : "Decoding animated sticker...");
                const res = await fetch(dataUrl);
                const blob = await res.blob();
                const file = new File([blob], "sticker.gif", { type: "image/gif" });
                await this.loadImageFromFile(file, false);
            } catch (e) {
                this.showToast("Error: " + e.message, 'error');
            } finally {
                this.hideLoading();
            }
        } else {
            const img = new Image();
            img.onload = () => {
                this.saveHistory();
                this.addSticker(img);
            };
            img.src = dataUrl;
        }
    }

    flipCurrentSticker() {
        if (this.selectedSticker === -1) {
            this.showToast(this.lang === 'zh' ? "请先选中需要翻转的贴纸！" : "Please select a sticker first!", 'warn');
            return;
        }
        this.saveHistory();
        const s = this.stickers[this.selectedSticker];
        s.flipped = !s.flipped;
        this.updateCanvas();
    }

    resetRotationCurrentSticker() {
        if (this.selectedSticker === -1) {
            this.showToast(this.lang === 'zh' ? "请先选中贴纸！" : "Please select a sticker first!", 'warn');
            return;
        }
        this.saveHistory();
        const s = this.stickers[this.selectedSticker];
        s.rotation = 0;
        this.updateCanvas();
        this.showToast(this.lang === 'zh' ? "已重置旋转角度为 0°" : "Rotation reset to 0°", 'info');
    }

    moveLayerUp() {
        if (this.selectedSticker === -1) return;
        if (this.selectedSticker < this.stickers.length - 1) {
            this.saveHistory();
            const temp = this.stickers[this.selectedSticker];
            this.stickers[this.selectedSticker] = this.stickers[this.selectedSticker + 1];
            this.stickers[this.selectedSticker + 1] = temp;
            this.selectedSticker++;
            this.updateCanvas();
        }
    }

    moveLayerDown() {
        if (this.selectedSticker === -1) return;
        if (this.selectedSticker > 0) {
            this.saveHistory();
            const temp = this.stickers[this.selectedSticker];
            this.stickers[this.selectedSticker] = this.stickers[this.selectedSticker - 1];
            this.stickers[this.selectedSticker - 1] = temp;
            this.selectedSticker--;
            this.updateCanvas();
        }
    }

    changeSpeedCurrentSticker() {
        if (this.selectedSticker === -1) return;
        const s = this.stickers[this.selectedSticker];
        if (!s.isAnimated) return;
        this.saveHistory();
        const speeds = [1.0, 1.5, 2.0, 0.5];
        const cur = s.speed || 1.0;
        const nextIdx = (speeds.indexOf(cur) + 1) % speeds.length;
        s.speed = speeds[nextIdx];
        this.showToast(`Speed: ${s.speed}x`, 'info');
    }

    // ================= 幻影坦克面板 =================
    createMirageModal() {
        this.mirageModal = document.createElement('div');
        this.mirageModal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 1000000;
            display: none;
            justify-content: center;
            align-items: center;
        `;

        this.mirageContainer = document.createElement('div');
        this.mirageContainer.style.cssText = `
            background: #252525; color: #fff;
            border-radius: 10px; width: 960px; max-width: 96vw; max-height: 94vh;
            display: flex; flex-direction: column; overflow: hidden; font-family: sans-serif;
        `;

        const mTitleBar = document.createElement('div');
        mTitleBar.style.cssText = `
            background: #1a1a1a; padding: 12px 18px;
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 1px solid #3d3d3d; font-weight: bold; font-size: 15px;
        `;
        this.mirageTitleSpan = document.createElement('span');
        this.mirageTitleSpan.textContent = "🎭 APNG 幻影坦克生成器";
        mTitleBar.appendChild(this.mirageTitleSpan);

        const mClose = document.createElement('button');
        mClose.textContent = '✕';
        mClose.style.cssText = 'background:none; border:none; color:#bbb; font-size:18px; cursor:pointer;';
        mClose.onclick = () => this.closeMirageModal();
        mTitleBar.appendChild(mClose);
        this.mirageContainer.appendChild(mTitleBar);

        const mBody = document.createElement('div');
        mBody.style.cssText = `padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px;`;

        const slotsRow = document.createElement('div');
        slotsRow.style.cssText = 'display: flex; gap: 16px;';

        this.slotA = document.createElement('div');
        this.slotA.id = 'slotTankA';
        this.slotA.style.cssText = `
            flex: 1; border: 2px dashed #4da6ff; border-radius: 8px; padding: 12px;
            background: rgba(77, 166, 255, 0.05); display: flex; flex-direction: column;
            align-items: center; gap: 8px; cursor: pointer;
        `;
        this.slotA.innerHTML = `
            <div id="titleSlotA" style="font-weight: bold; color: #4da6ff;">⚪ 表图 (聊天框常态伪装 · 100%原色)</div>
            <div id="tankThumbA" style="width: 150px; height: 150px; background: #333; border-radius: 6px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid #555;">
                <span style="color:#888; font-size:12px;">未导入 (可直接 Ctrl+V)</span>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;">
                <button id="btnUploadA" style="padding: 4px 8px; font-size: 12px; cursor: pointer; border-radius: 4px; border: 1px solid #555; background: #333; color: white;">📁 本地上传</button>
                <button id="btnPasteA" style="padding: 4px 8px; font-size: 12px; cursor: pointer; border-radius: 4px; border: 1px solid #0078d7; background: #0078d7; color: white;">📋 粘贴</button>
                <button id="btnUseBaseA" style="padding: 4px 8px; font-size: 12px; cursor: pointer; border-radius: 4px; border: 1px solid #555; background: #333; color: white;">🎨 当前画布</button>
            </div>
        `;

        this.slotB = document.createElement('div');
        this.slotB.id = 'slotTankB';
        this.slotB.style.cssText = `
            flex: 1; border: 2px dashed #ff4d4d; border-radius: 8px; padding: 12px;
            background: rgba(255, 77, 77, 0.05); display: flex; flex-direction: column;
            align-items: center; gap: 8px; cursor: pointer;
        `;
        this.slotB.innerHTML = `
            <div id="titleSlotB" style="font-weight: bold; color: #ff6666;">⚫ 里图 (点开全屏大图真相 · 100%原色)</div>
            <div id="tankThumbB" style="width: 150px; height: 150px; background: #333; border-radius: 6px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid #555;">
                <span style="color:#888; font-size:12px;">未导入 (可直接 Ctrl+V)</span>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;">
                <button id="btnUploadB" style="padding: 4px 8px; font-size: 12px; cursor: pointer; border-radius: 4px; border: 1px solid #555; background: #333; color: white;">📁 本地上传</button>
                <button id="btnPasteB" style="padding: 4px 8px; font-size: 12px; cursor: pointer; border-radius: 4px; border: 1px solid #e04444; background: #e04444; color: white;">📋 粘贴</button>
            </div>
        `;

        slotsRow.appendChild(this.slotA);
        slotsRow.appendChild(this.slotB);
        mBody.appendChild(slotsRow);

        const controlsRow = document.createElement('div');
        controlsRow.style.cssText = `
            background: #1c1c1c; padding: 12px 14px; border-radius: 8px;
            display: flex; flex-wrap: wrap; gap: 14px; align-items: center; font-size: 13px;
        `;
        controlsRow.innerHTML = `
            <div style="display:flex; align-items:center; gap:6px;">
                <span id="lblTankFit">里图适配:</span>
                <select id="tankFitMode" style="background:#333; color:#fff; border:1px solid #555; padding:4px 8px; border-radius:4px; cursor:pointer;">
                    <option value="contain">等比居中黑边 (推荐)</option>
                    <option value="cover">等比裁剪铺满</option>
                    <option value="stretch">直接拉伸</option>
                </select>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
                <span id="lblTankAudit">🛡️ 防审等级:</span>
                <select id="tankAuditLevel" style="background:#2a2a2a; color:#fff; border:1px solid #0078d7; padding:4px 8px; border-radius:4px; cursor:pointer; font-weight:bold;">
                    <option value="strong">🔴 极高强度 (高反差扫描 · 严苛风控)</option>
                    <option value="soft_interlace">🟠 高强度 (柔和点阵 · 护眼微动)</option>
                    <option value="static_mask" selected>🟡 中高强度 (静态网纹 · 绝对0闪烁 · 护眼首选)</option>
                    <option value="chroma_shift">🟢 中等强度 (等光色差 · 视觉静止)</option>
                    <option value="light">🔵 低强度 (微弱噪点 · 原图画质)</option>
                    <option value="none">⚪ 关闭 (原图输出 · 无处理)</option>
                </select>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
                <span id="lblTankName">命名伪装:</span>
                <select id="tankNameStyle" style="background:#333; color:#fff; border:1px solid #555; padding:4px 8px; border-radius:4px; cursor:pointer;">
                    <option value="click_view">点击查看原图.png (诱导点开)</option>
                    <option value="camera_img">IMG_实拍照片格式 (避开敏感词风控)</option>
                </select>
            </div>
            <button id="btnGenerateTank" style="margin-left:auto; padding:7px 18px; background:#0078d7; color:white; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">✨ 开始生成</button>
        `;
        mBody.appendChild(controlsRow);

        const previewRow = document.createElement('div');
        previewRow.style.cssText = 'display: flex; gap: 14px;';

        const prevCardCover = document.createElement('div');
        prevCardCover.style.cssText = 'flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px;';
        prevCardCover.innerHTML = `
            <div id="prevTitleCover" style="font-size:12px; color:#4da6ff; font-weight:bold;">📱 聊天气泡常态展示 (表图)</div>
            <div id="tankPreviewCoverBox" style="width:100%; height:180px; background:#181818; border-radius:6px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid #555;">
                <span style="color:#666; font-size:12px;">生成后在此查看</span>
            </div>
        `;

        const prevCardInner = document.createElement('div');
        prevCardInner.style.cssText = 'flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; position: relative;';
        prevCardInner.innerHTML = `
            <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                <span id="prevTitleInner" style="font-size:12px; color:#ff6666; font-weight:bold;">🔍 点开全屏展示 (里图)</span>
                <button id="btnToggleTankBg" style="padding:2px 8px; font-size:11px; background:#333; color:#aaa; border:1px solid #555; border-radius:3px; cursor:pointer;">🌙 黑底预览</button>
            </div>
            <div id="tankPreviewInnerBox" style="width:100%; height:180px; background:#000000; border-radius:6px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid #555;">
                <span style="color:#666; font-size:12px;">生成后在此查看</span>
            </div>
        `;

        previewRow.appendChild(prevCardCover);
        previewRow.appendChild(prevCardInner);
        mBody.appendChild(previewRow);
        this.mirageContainer.appendChild(mBody);

        const mFooter = document.createElement('div');
        mFooter.style.cssText = `
            background: #1a1a1a; padding: 12px 18px; display: flex; gap: 10px;
            justify-content: flex-end; align-items: center; border-top: 1px solid #3d3d3d;
        `;
        mFooter.innerHTML = `
            <span id="tankTipSpan" style="margin-right:auto; font-size:12px; color:#aaa;">📢 提示：点击「定位文件」可直接拖拽发送，彻底防剧透！</span>
            <button id="btnOpenTankDir" style="padding:7px 14px; background:#555; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer;" disabled>📂 定位文件</button>
            <button id="btnSaveTankPNG" style="padding:7px 15px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer;" disabled>💾 保存 APNG</button>
            <button id="btnCopyTankFile" style="padding:7px 15px; background:#0078d7; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer;" disabled>📋 复制文件</button>
        `;
        this.mirageContainer.appendChild(mFooter);
        this.mirageModal.appendChild(this.mirageContainer);
        document.body.appendChild(this.mirageModal);

        document.getElementById('btnToggleTankBg').onclick = () => {
            const box = document.getElementById('tankPreviewInnerBox');
            const btn = document.getElementById('btnToggleTankBg');
            if (this.tankPreviewBg === 'dark') {
                this.tankPreviewBg = 'light';
                box.style.background = '#ffffff';
                btn.textContent = '☀️ 白底预览';
                btn.style.color = '#fff';
            } else {
                this.tankPreviewBg = 'dark';
                box.style.background = '#000000';
                btn.textContent = '🌙 黑底预览';
                btn.style.color = '#aaa';
            }
        };

        this.bindMirageEvents();
    }

    setMirageActiveSlot(slot) {
        this.mirageActiveSlot = slot;
        if (slot === 'A') {
            this.slotA.style.border = '2px solid #00d2ff';
            this.slotA.style.boxShadow = '0 0 12px rgba(0, 210, 255, 0.4)';
            this.slotB.style.border = '2px dashed #ff4d4d';
            this.slotB.style.boxShadow = 'none';
        } else if (slot === 'B') {
            this.slotB.style.border = '2px solid #ff4d4d';
            this.slotB.style.boxShadow = '0 0 12px rgba(255, 77, 77, 0.4)';
            this.slotA.style.border = '2px dashed #4da6ff';
            this.slotA.style.boxShadow = 'none';
        } else {
            this.slotA.style.border = '2px dashed #4da6ff';
            this.slotA.style.boxShadow = 'none';
            this.slotB.style.border = '2px dashed #ff4d4d';
            this.slotB.style.boxShadow = 'none';
        }
    }

    bindMirageEvents() {
        const fileA = document.createElement('input');
        fileA.type = 'file';
        fileA.accept = 'image/*';
        fileA.style.display = 'none';
        document.body.appendChild(fileA);

        const fileB = document.createElement('input');
        fileB.type = 'file';
        fileB.accept = 'image/*';
        fileB.style.display = 'none';
        document.body.appendChild(fileB);

        this.slotA.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') this.setMirageActiveSlot('A');
        };
        this.slotB.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') this.setMirageActiveSlot('B');
        };

        document.getElementById('btnUploadA').onclick = (e) => {
            e.stopPropagation();
            this.setMirageActiveSlot('A');
            fileA.click();
        };
        fileA.onchange = (e) => {
            const file = e.target.files[0];
            if (file) this.loadTankImageFromBlob(file, 'A');
            fileA.value = '';
        };

        document.getElementById('btnPasteA').onclick = async (e) => {
            e.stopPropagation();
            this.setMirageActiveSlot('A');
            await this.pasteImageToTankSlot('A');
        };

        document.getElementById('btnUseBaseA').onclick = (e) => {
            e.stopPropagation();
            if (!this.baseImage) {
                this.showToast(this.lang === 'zh' ? "当前画布还没有背景图，请先导入！" : "No background image loaded!", 'warn');
                return;
            }
            const composite = this.compositeImage();
            const img = new Image();
            img.onload = () => {
                this.tankImageA = img;
                this.updateMirageThumbnail('tankThumbA', img);
                this.setMirageActiveSlot('A');
            };
            img.src = composite.toDataURL('image/png');
        };

        document.getElementById('btnUploadB').onclick = (e) => {
            e.stopPropagation();
            this.setMirageActiveSlot('B');
            fileB.click();
        };
        fileB.onchange = (e) => {
            const file = e.target.files[0];
            if (file) this.loadTankImageFromBlob(file, 'B');
            fileB.value = '';
        };

        document.getElementById('btnPasteB').onclick = async (e) => {
            e.stopPropagation();
            this.setMirageActiveSlot('B');
            await this.pasteImageToTankSlot('B');
        };

        document.getElementById('btnGenerateTank').onclick = () => this.generateMirageTank();

        document.getElementById('btnSaveTankPNG').onclick = () => {
            if (!this.tankApngBlob || !this.lastTankObjectUrl) return;
            const link = document.createElement('a');
            link.download = this.lastGeneratedFilename;
            link.href = this.lastTankObjectUrl;
            link.click();
            this.showToast(this.lang === 'zh' ? "💾 文件已开始下载" : "💾 Download started", 'success');
        };

        document.getElementById('btnCopyTankFile').onclick = async () => {
            if (!this.tankApngBlob) return;
            const btn = document.getElementById('btnCopyTankFile');
            btn.disabled = true;

            try {
                const formData = new FormData();
                formData.append("file", this.tankApngBlob, this.lastGeneratedFilename);
                formData.append("filename", this.lastGeneratedFilename);

                const resp = await fetch("/stickertool/copy_tank_file", { method: "POST", body: formData });
                const res = await resp.json();

                if (res.success) {
                    this.showToast(this.lang === 'zh' ? "✅ 已写入剪贴板，聊天框直接 Ctrl+V 发送！" : "✅ Copied! Press Ctrl+V in chat directly!", 'success', 2800);
                } else {
                    this.showToast("Copy failed: " + (res.error || "Unknown"), 'error');
                }
            } catch (err) {
                this.showToast("Error: " + err.message, 'error');
            } finally {
                btn.disabled = false;
            }
        };

        document.getElementById('btnOpenTankDir').onclick = async () => {
            if (!this.tankApngBlob) return;
            try {
                const formData = new FormData();
                formData.append("file", this.tankApngBlob, this.lastGeneratedFilename);
                formData.append("filename", this.lastGeneratedFilename);
                await fetch("/stickertool/copy_tank_file", { method: "POST", body: formData });

                const openData = new FormData();
                openData.append("filename", this.lastGeneratedFilename);
                const resp = await fetch("/stickertool/open_file_dir", { method: "POST", body: openData });
                const res = await resp.json();
                if (!res.success) this.showToast("Failed: " + res.error, 'error');
            } catch (e) {
                this.showToast("Error: " + e.message, 'error');
            }
        };
    }

    async pasteImageToTankSlot(slot) {
        try {
            if (navigator.clipboard && navigator.clipboard.read) {
                const items = await navigator.clipboard.read();
                for (const item of items) {
                    if (item.types.some(t => t.startsWith('image/'))) {
                        const blob = await item.getType(item.types.find(t => t.startsWith('image/')));
                        this.loadTankImageFromBlob(blob, slot);
                        return;
                    }
                }
            }
        } catch (e) {}
        this.showToast(this.lang === 'zh' ? "请直接按键盘 Ctrl + V 粘贴！" : "Please press Ctrl + V on keyboard!", 'info');
    }

    loadTankImageFromBlob(blob, slot) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            const img = new Image();
            img.onload = () => {
                if (slot === 'A') {
                    this.tankImageA = img;
                    this.updateMirageThumbnail('tankThumbA', img);
                    this.setMirageActiveSlot('A');
                } else {
                    this.tankImageB = img;
                    this.updateMirageThumbnail('tankThumbB', img);
                    this.setMirageActiveSlot('B');
                }
            };
            img.src = evt.target.result;
        };
        reader.readAsDataURL(blob);
    }

    handleMiragePaste(blob) {
        let targetSlot = 'A';
        if (this.mirageActiveSlot) {
            targetSlot = this.mirageActiveSlot;
        } else if (this.tankImageA && !this.tankImageB) {
            targetSlot = 'B';
        }
        this.loadTankImageFromBlob(blob, targetSlot);
    }

    updateMirageThumbnail(containerId, img) {
        const box = document.getElementById(containerId);
        box.innerHTML = '';
        const preview = document.createElement('img');
        preview.src = img.src;
        preview.style.cssText = 'max-width: 100%; max-height: 100%; object-fit: contain;';
        box.appendChild(preview);
    }

    openMirageModal() {
        this.mirageModal.style.display = 'flex';
        this.setMirageActiveSlot(this.tankImageA ? 'B' : 'A');
    }

    closeMirageModal() {
        this.mirageModal.style.display = 'none';
        this.setMirageActiveSlot(null);
    }

    applyStaticGeometricMask(canvas) {
        const w = canvas.width;
        const h = canvas.height;
        const ctx = canvas.getContext('2d');

        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        for (let x = -h; x < w + h; x += 16) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + h, h); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(x, h); ctx.lineTo(x + h, 0); ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        for (let y = 0; y < h; y += 12) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.font = 'bold 14px sans-serif';
        for (let y = 28; y < h; y += 65) {
            for (let x = 15; x < w; x += 140) {
                ctx.fillText('VERIFIED_IMG', x, y);
            }
        }
        ctx.restore();

        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
            const n = (Math.random() - 0.5) * 5;
            d[i] = Math.min(255, Math.max(0, d[i] + n));
            d[i+1] = Math.min(255, Math.max(0, d[i+1] + n));
            d[i+2] = Math.min(255, Math.max(0, d[i+2] + n));
            d[i+3] = 254;
        }
        ctx.putImageData(imgData, 0, 0);
    }

    createSoftCheckeredFrames(sourceCanvas) {
        const w = sourceCanvas.width;
        const h = sourceCanvas.height;
        const srcCtx = sourceCanvas.getContext('2d');
        const srcData = srcCtx.getImageData(0, 0, w, h);
        const d = srcData.data;

        const cv1 = document.createElement('canvas'); cv1.width = w; cv1.height = h;
        const cv2 = document.createElement('canvas'); cv2.width = w; cv2.height = h;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        const data1 = ctx1.createImageData(w, h);
        const data2 = ctx2.createImageData(w, h);
        const d1 = data1.data;
        const d2 = data2.data;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const idx = (y * w + x) * 4;
                const isDotA = ((x + y) % 2 === 0);
                const r = d[idx], g = d[idx+1], b = d[idx+2];

                if (isDotA) {
                    d1[idx] = Math.min(255, Math.round(r * 1.15));
                    d1[idx+1] = Math.min(255, Math.round(g * 1.15));
                    d1[idx+2] = Math.min(255, Math.round(b * 1.15));
                    d1[idx+3] = 254;

                    d2[idx] = Math.round(r * 0.85);
                    d2[idx+1] = Math.round(g * 0.85);
                    d2[idx+2] = Math.round(b * 0.85);
                    d2[idx+3] = 254;
                } else {
                    d1[idx] = Math.round(r * 0.85);
                    d1[idx+1] = Math.round(g * 0.85);
                    d1[idx+2] = Math.round(b * 0.85);
                    d1[idx+3] = 254;

                    d2[idx] = Math.min(255, Math.round(r * 1.15));
                    d2[idx+1] = Math.min(255, Math.round(g * 1.15));
                    d2[idx+2] = Math.min(255, Math.round(b * 1.15));
                    d2[idx+3] = 254;
                }
            }
        }
        ctx1.putImageData(data1, 0, 0);
        ctx2.putImageData(data2, 0, 0);
        return [cv1, cv2];
    }

    createChromaShiftFrames(sourceCanvas) {
        const w = sourceCanvas.width;
        const h = sourceCanvas.height;
        const srcCtx = sourceCanvas.getContext('2d');
        const srcData = srcCtx.getImageData(0, 0, w, h);
        const d = srcData.data;

        const cv1 = document.createElement('canvas'); cv1.width = w; cv1.height = h;
        const cv2 = document.createElement('canvas'); cv2.width = w; cv2.height = h;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        const data1 = ctx1.createImageData(w, h);
        const data2 = ctx2.createImageData(w, h);
        const d1 = data1.data;
        const d2 = data2.data;

        for (let i = 0; i < d.length; i += 4) {
            const r = d[i], g = d[i+1], b = d[i+2];

            d1[i] = Math.min(255, Math.max(0, r + 20));
            d1[i+1] = Math.min(255, Math.max(0, g - 6));
            d1[i+2] = Math.min(255, Math.max(0, b - 20));
            d1[i+3] = 254;

            d2[i] = Math.min(255, Math.max(0, r - 20));
            d2[i+1] = Math.min(255, Math.max(0, g + 6));
            d2[i+2] = Math.min(255, Math.max(0, b + 20));
            d2[i+3] = 254;
        }
        ctx1.putImageData(data1, 0, 0);
        ctx2.putImageData(data2, 0, 0);
        return [cv1, cv2];
    }

    createStrongInterlacedFrames(sourceCanvas) {
        const w = sourceCanvas.width;
        const h = sourceCanvas.height;
        const srcCtx = sourceCanvas.getContext('2d');

        srcCtx.save();
        srcCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        srcCtx.lineWidth = 1;
        for (let x = -h; x < w + h; x += 20) {
            srcCtx.beginPath(); srcCtx.moveTo(x, 0); srcCtx.lineTo(x + h, h); srcCtx.stroke();
        }
        srcCtx.restore();

        const srcData = srcCtx.getImageData(0, 0, w, h);
        const d = srcData.data;

        const cv1 = document.createElement('canvas'); cv1.width = w; cv1.height = h;
        const cv2 = document.createElement('canvas'); cv2.width = w; cv2.height = h;
        const ctx1 = cv1.getContext('2d');
        const ctx2 = cv2.getContext('2d');
        const data1 = ctx1.createImageData(w, h);
        const data2 = ctx2.createImageData(w, h);
        const d1 = data1.data;
        const d2 = data2.data;

        for (let y = 0; y < h; y++) {
            const isEven = (y % 2 === 0);
            for (let x = 0; x < w; x++) {
                const idx = (y * w + x) * 4;
                const r = Math.min(255, Math.round(d[idx] * 1.22 + 10));
                const g = Math.min(255, Math.round(d[idx + 1] * 1.22 + 10));
                const b = Math.min(255, Math.round(d[idx + 2] * 1.22 + 10));

                if (isEven) {
                    d1[idx] = r; d1[idx + 1] = g; d1[idx + 2] = b; d1[idx + 3] = 254;
                    d2[idx] = 12; d2[idx + 1] = 12; d2[idx + 2] = 12; d2[idx + 3] = 254;
                } else {
                    d1[idx] = 12; d1[idx + 1] = 12; d1[idx + 2] = 12; d1[idx + 3] = 254;
                    d2[idx] = r; d2[idx + 1] = g; d2[idx + 2] = b; d2[idx + 3] = 254;
                }
            }
        }
        ctx1.putImageData(data1, 0, 0);
        ctx2.putImageData(data2, 0, 0);
        return [cv1, cv2];
    }

    // ================= 幻影坦克核心生成算法 (修复越界Bug) =================
    async generateMirageTank() {
        if (!this.tankImageA || !this.tankImageB) {
            this.showToast(this.lang === 'zh' ? "请先导入【表图】和【里图】！" : "Please load Cover and Hidden images!", 'warn');
            return;
        }

        const fitMode = document.getElementById('tankFitMode').value;
        const auditLevel = document.getElementById('tankAuditLevel').value;
        const nameStyle = document.getElementById('tankNameStyle').value;

        if (nameStyle === 'camera_img') {
            const d = new Date();
            const pad = (n) => String(n).padStart(2, '0');
            this.lastGeneratedFilename = `IMG_${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}.png`;
        } else {
            this.lastGeneratedFilename = `点击查看原图_${Date.now()}.png`;
        }

        const width = this.tankImageA.width;
        const height = this.tankImageA.height;

        const canvasA = document.createElement('canvas');
        canvasA.width = width; canvasA.height = height;
        const ctxA = canvasA.getContext('2d');
        ctxA.drawImage(this.tankImageA, 0, 0, width, height);

        const canvasB = document.createElement('canvas');
        canvasB.width = width; canvasB.height = height;
        const ctxB = canvasB.getContext('2d');

        if (fitMode === 'contain') {
            const scale = Math.min(width / this.tankImageB.width, height / this.tankImageB.height);
            const bw = this.tankImageB.width * scale;
            const bh = this.tankImageB.height * scale;
            const bx = (width - bw) / 2;
            const by = (height - bh) / 2;
            ctxB.fillStyle = '#000000';
            ctxB.fillRect(0, 0, width, height);
            ctxB.drawImage(this.tankImageB, bx, by, bw, bh);
        } else if (fitMode === 'cover') {
            const scale = Math.max(width / this.tankImageB.width, height / this.tankImageB.height);
            const bw = this.tankImageB.width * scale;
            const bh = this.tankImageB.height * scale;
            const bx = (width - bw) / 2;
            const by = (height - bh) / 2;
            ctxB.drawImage(this.tankImageB, bx, by, bw, bh);
        } else {
            ctxB.drawImage(this.tankImageB, 0, 0, width, height);
        }

        const forceRGBA = (ctx) => {
            const p = ctx.getImageData(0, 0, 1, 1);
            p.data[3] = 254; 
            ctx.putImageData(p, 0, 0);
        };
        forceRGBA(ctxA);

        const signature = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
        const iendChunk = buildChunk('IEND', null);

        const isDualFrameMode = (auditLevel === 'soft_interlace' || auditLevel === 'chroma_shift' || auditLevel === 'strong');

        if (isDualFrameMode) {
            let dualFrames = null;
            if (auditLevel === 'soft_interlace') {
                dualFrames = this.createSoftCheckeredFrames(canvasB);
            } else if (auditLevel === 'chroma_shift') {
                dualFrames = this.createChromaShiftFrames(canvasB);
            } else {
                dualFrames = this.createStrongInterlacedFrames(canvasB);
            }

            const [cvB1, cvB2] = dualFrames;

            const blobA = await new Promise(res => canvasA.toBlob(res, 'image/png'));
            const blobB1 = await new Promise(res => cvB1.toBlob(res, 'image/png'));
            const blobB2 = await new Promise(res => cvB2.toBlob(res, 'image/png'));

            const chunksA = parsePNGChunks(await blobA.arrayBuffer());
            const chunksB1 = parsePNGChunks(await blobB1.arrayBuffer());
            const chunksB2 = parsePNGChunks(await blobB2.arrayBuffer());

            const ihdrChunk = chunksA.find(c => c.type === 'IHDR').rawChunk;
            const actlChunk = createAcTL(2, 0);

            const idatsA = chunksA.filter(c => c.type === 'IDAT').map(c => c.rawChunk);

            const fctlB1 = createFcTL(0, width, height, 0, 0, 3, 100, 0, 0);
            const idatsB1 = chunksB1.filter(c => c.type === 'IDAT');
            let seq = 1;
            const fdatsB1 = idatsB1.map(c => createFdAT(seq++, c.data));

            const fctlB2 = createFcTL(seq++, width, height, 0, 0, 3, 100, 0, 0);
            const idatsB2 = chunksB2.filter(c => c.type === 'IDAT');
            const fdatsB2 = idatsB2.map(c => createFdAT(seq++, c.data));

            const totalLen = signature.length + ihdrChunk.length + actlChunk.length +
                             idatsA.reduce((sum, c) => sum + c.length, 0) +
                             fctlB1.length + fdatsB1.reduce((sum, c) => sum + c.length, 0) +
                             fctlB2.length + fdatsB2.reduce((sum, c) => sum + c.length, 0) +
                             iendChunk.length;

            const apngBytes = new Uint8Array(totalLen);
            let offset = 0;
            const append = (u8) => {
                apngBytes.set(u8, offset);
                offset += u8.length;
            };

            append(signature);
            append(ihdrChunk);
            append(actlChunk);
            for (const c of idatsA) append(c);
            append(fctlB1);
            for (const c of fdatsB1) append(c);
            append(fctlB2);
            for (const c of fdatsB2) append(c);
            append(iendChunk);

            this.tankApngBlob = new Blob([apngBytes], { type: 'image/png' });
        } else {
            if (auditLevel === 'static_mask') {
                this.applyStaticGeometricMask(canvasB);
            } else if (auditLevel === 'light') {
                const imgDataB = ctxB.getImageData(0, 0, width, height);
                const data = imgDataB.data;
                for (let i = 0; i < data.length; i += 4) {
                    const noise = (Math.random() - 0.5) * 4;
                    data[i] = Math.min(255, Math.max(0, data[i] + noise));
                    data[i+1] = Math.min(255, Math.max(0, data[i+1] + noise));
                    data[i+2] = Math.min(255, Math.max(0, data[i+2] + noise));
                }
                ctxB.putImageData(imgDataB, 0, 0);
            }

            forceRGBA(ctxB);

            const blobA = await new Promise(res => canvasA.toBlob(res, 'image/png'));
            const blobB = await new Promise(res => canvasB.toBlob(res, 'image/png'));

            const chunksA = parsePNGChunks(await blobA.arrayBuffer());
            const chunksB = parsePNGChunks(await blobB.arrayBuffer());

            const ihdrChunk = chunksA.find(c => c.type === 'IHDR').rawChunk;
            const actlChunk = createAcTL(2, 1);

            const fctl0 = createFcTL(0, width, height, 0, 0, 5, 100, 0, 0);
            const idatsA = chunksA.filter(c => c.type === 'IDAT').map(c => c.rawChunk);

            const fctl1 = createFcTL(1, width, height, 0, 0, 990, 100, 0, 0);
            let seq = 2;
            const fdatsB = chunksB.filter(c => c.type === 'IDAT').map(c => createFdAT(seq++, c.data));

            // 精准计算字节长度，杜绝溢出
            const totalLen = signature.length + ihdrChunk.length + actlChunk.length +
                             fctl0.length + idatsA.reduce((sum, c) => sum + c.length, 0) +
                             fctl1.length + fdatsB.reduce((sum, c) => sum + c.length, 0) +
                             iendChunk.length;

            const apngBytes = new Uint8Array(totalLen);
            let offset = 0;
            const append = (u8) => {
                apngBytes.set(u8, offset);
                offset += u8.length;
            };

            append(signature);
            append(ihdrChunk);
            append(actlChunk);
            append(fctl0);
            for (const c of idatsA) append(c);
            append(fctl1);
            for (const c of fdatsB) append(c);
            append(iendChunk);

            this.tankApngBlob = new Blob([apngBytes], { type: 'image/png' });
        }

        // 释放旧 Object URL 避免显存泄漏
        if (this.lastTankObjectUrl) {
            URL.revokeObjectURL(this.lastTankObjectUrl);
        }
        this.lastTankObjectUrl = URL.createObjectURL(this.tankApngBlob);

        const coverBox = document.getElementById('tankPreviewCoverBox');
        const innerBox = document.getElementById('tankPreviewInnerBox');
        coverBox.innerHTML = '';
        innerBox.innerHTML = '';

        const imgA = document.createElement('img');
        imgA.src = canvasA.toDataURL('image/png');
        imgA.style.cssText = 'max-width:100%; max-height:100%; object-fit:contain;';

        const imgB = document.createElement('img');
        imgB.src = this.lastTankObjectUrl;
        imgB.style.cssText = 'max-width:100%; max-height:100%; object-fit:contain;';

        coverBox.appendChild(imgA);
        innerBox.appendChild(imgB);

        document.getElementById('btnSaveTankPNG').disabled = false;
        document.getElementById('btnCopyTankFile').disabled = false;
        document.getElementById('btnOpenTankDir').disabled = false;

        this.showToast(this.lang === 'zh' ? "✨ 幻影坦克已生成完毕！" : "✨ Mirage tank generated!", 'success');
    }
    
    // ================= 马赛克 =================
    toggleMosaicMode() {
        if (!this.baseImage) return;
        this.mosaicMode = !this.mosaicMode;
        this.selectedSticker = -1;
        
        const btn = document.getElementById('mosaicBtn');
        if (btn) {
            btn.style.background = this.mosaicMode ? '#0078d7 !important' : (this.nightMode ? '#4c4c4c !important' : '#ffffff !important');
            btn.style.color = (this.mosaicMode || this.nightMode) ? '#ffffff !important' : '#000000 !important';
        }
        this.canvas.style.cursor = this.mosaicMode ? 'crosshair' : 'default';
        this.updateCanvas();
    }

    ensureBaseImageCanvas() {
        if (!this.baseImage) return null;
        if (this.baseImage instanceof HTMLCanvasElement) return this.baseImage;
        const canvas = document.createElement('canvas');
        canvas.width = this.baseImage.width;
        canvas.height = this.baseImage.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.baseImage, 0, 0);
        this.baseImage = canvas;
        return this.baseImage;
    }

    applyMosaicAt(centerX, centerY) {
        if (!this.baseImage) return;
        this.ensureBaseImageCanvas();
        
        const ctx = this.baseImage.getContext('2d');
        const radius = this.mosaicBrushSize;
        const blockSize = this.mosaicBlockSize;
        
        const startX = Math.max(0, Math.floor((centerX - radius) / blockSize) * blockSize);
        const startY = Math.max(0, Math.floor((centerY - radius) / blockSize) * blockSize);
        const endX = Math.min(this.baseImage.width, Math.ceil((centerX + radius) / blockSize) * blockSize);
        const endY = Math.min(this.baseImage.height, Math.ceil((centerY + radius) / blockSize) * blockSize);
        
        const width = endX - startX;
        const height = endY - startY;
        if (width <= 0 || height <= 0) return;
        
        const imgData = ctx.getImageData(startX, startY, width, height);
        const data = imgData.data;
        
        for (let by = 0; by < height; by += blockSize) {
            for (let bx = 0; bx < width; bx += blockSize) {
                const blockCenterX = startX + bx + blockSize / 2;
                const blockCenterY = startY + by + blockSize / 2;
                const distSq = (blockCenterX - centerX) ** 2 + (blockCenterY - centerY) ** 2;
                
                if (distSq <= radius ** 2) {
                    const bw = Math.min(blockSize, width - bx);
                    const bh = Math.min(blockSize, height - by);
                    
                    let totalR = 0, totalG = 0, totalB = 0, count = 0;
                    for (let py = 0; py < bh; py++) {
                        for (let px = 0; px < bw; px++) {
                            const idx = ((by + py) * width + (bx + px)) * 4;
                            totalR += data[idx];
                            totalG += data[idx + 1];
                            totalB += data[idx + 2];
                            count++;
                        }
                    }
                    
                    const avgR = Math.round(totalR / count);
                    const avgG = Math.round(totalG / count);
                    const avgB = Math.round(totalG / count);
                    
                    for (let py = 0; py < bh; py++) {
                        for (let px = 0; px < bw; px++) {
                            const idx = ((by + py) * width + (bx + px)) * 4;
                            data[idx] = avgR;
                            data[idx + 1] = avgG;
                            data[idx + 2] = avgB;
                        }
                    }
                }
            }
        }
        
        ctx.putImageData(imgData, startX, startY);
        this.updateCanvas();
    }

    applyMosaicLine(x0, y0, x1, y1) {
        const dx = x1 - x0;
        const dy = y1 - y0;
        const dist = Math.hypot(dx, dy);
        const step = Math.max(2, this.mosaicBlockSize / 2);
        const steps = Math.max(1, Math.floor(dist / step));
        
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            this.applyMosaicAt(x0 + dx * t, y0 + dy * t);
        }
    }
    
    toggleNightMode() {
        this.nightMode = !this.nightMode;
        localStorage.setItem('stickerToolNightMode', this.nightMode);
        
        const nightModeBtn = document.getElementById('nightModeBtn');
        if (nightModeBtn) {
            nightModeBtn.textContent = this.nightMode ? this.t('btnNightOff') : this.t('btnNightOn');
        }
        
        this.applyNightModeStyles();
    }
    
    applyNightModeStyles() {
        const sel = document.getElementById('exportPresetSelect');
        const lbl = document.getElementById('exportPresetLabel');

        if (this.nightMode) {
            this.container.style.background = '#2c2c2c';
            this.toolbar.style.background = '#3c3c3c';
            this.statusBar.style.background = '#3c3c3c';
            this.statusBar.style.color = '#ffffff !important';
            this.canvas.style.background = '#1e1e1e';
            this.drawer.style.background = '#222222';
            this.drawer.style.borderColor = '#444';
            this.drawer.style.color = '#ffffff';

            if (sel) {
                sel.style.setProperty('background', '#2a2a2a', 'important');
                sel.style.setProperty('color', '#ffffff', 'important');
                sel.style.setProperty('border-color', '#555555', 'important');
                sel.querySelectorAll('option').forEach(opt => {
                    opt.style.setProperty('background', '#2a2a2a', 'important');
                    opt.style.setProperty('color', '#ffffff', 'important');
                });
            }
            if (lbl) lbl.style.color = '#ffffff';

            const toolbarButtons = this.toolbar.querySelectorAll('button');
            toolbarButtons.forEach(btn => {
                if (btn.id === 'mosaicBtn' && this.mosaicMode) {
                    btn.style.background = '#0078d7 !important';
                    btn.style.color = '#ffffff !important';
                } else if (!['btnSave', 'btnCopy', 'langBtn', 'nightModeBtn'].includes(btn.id)) {
                    btn.style.background = '#4c4c4c !important';
                    btn.style.color = '#ffffff !important';
                    btn.style.borderColor = '#666 !important';
                }
            });
        } else {
            this.container.style.background = '#f0f0f0';
            this.toolbar.style.background = '#e0e0e0';
            this.statusBar.style.background = '#e0e0e0';
            this.statusBar.style.color = '#000000 !important';
            this.canvas.style.background = '#f0f0f0';
            this.drawer.style.background = '#fafafa';
            this.drawer.style.borderColor = '#ccc';
            this.drawer.style.color = '#000000';

            if (sel) {
                sel.style.setProperty('background', '#ffffff', 'important');
                sel.style.setProperty('color', '#000000', 'important');
                sel.style.setProperty('border-color', '#cccccc', 'important');
                sel.querySelectorAll('option').forEach(opt => {
                    opt.style.setProperty('background', '#ffffff', 'important');
                    opt.style.setProperty('color', '#000000', 'important');
                });
            }
            if (lbl) lbl.style.color = '#000000';

            const toolbarButtons = this.toolbar.querySelectorAll('button');
            toolbarButtons.forEach(btn => {
                if (btn.id === 'mosaicBtn' && this.mosaicMode) {
                    btn.style.background = '#0078d7 !important';
                    btn.style.color = '#ffffff !important';
                } else if (!['btnSave', 'btnCopy', 'langBtn', 'nightModeBtn'].includes(btn.id)) {
                    btn.style.background = '#ffffff !important';
                    btn.style.color = '#000000 !important';
                    btn.style.borderColor = '#ccc !important';
                }
            });
        }
        
        if (this.showDrawer) {
            this.renderFavoritesList();
        }
        this.updateCanvas();
    }
    
    // ================= 浮动按钮修复：严格位移防误触 =================
    createFloatingButton() {
        this.floatingBtn = document.createElement('button');
        this.floatingBtn.innerHTML = '🖼️ 贴纸工具';
        this.floatingBtn.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; z-index: 999998;
            background: #0078d7 !important; color: white !important;
            border: none !important; border-radius: 8px !important;
            padding: 10px 15px !important; font-size: 14px !important;
            font-weight: bold !important; cursor: grab !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important; user-select: none !important;
        `;
        
        const savedPosition = localStorage.getItem('stickerToolBtnPosition');
        if (savedPosition) {
            try {
                const pos = JSON.parse(savedPosition);
                this.floatingBtn.style.bottom = 'auto'; this.floatingBtn.style.right = 'auto';
                this.floatingBtn.style.left = pos.left + 'px'; this.floatingBtn.style.top = pos.top + 'px';
            } catch (e) {}
        }
        
        this.floatingBtn.onclick = (e) => {
            if (this.floatingBtnHasMoved) {
                this.floatingBtnHasMoved = false;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            this.show();
        };
        
        this.floatingBtn.onmousedown = (e) => {
            this.floatingBtnDragging = true;
            this.floatingBtnHasMoved = false;
            this.floatingBtn.style.cursor = 'grabbing !important';
            const rect = this.floatingBtn.getBoundingClientRect();
            this.floatingBtnStartX = e.clientX;
            this.floatingBtnStartY = e.clientY;
            this.floatingBtnOffsetX = e.clientX - rect.left;
            this.floatingBtnOffsetY = e.clientY - rect.top;
            e.preventDefault();
            e.stopPropagation();
        };
        
        document.addEventListener('mousemove', (e) => {
            if (this.floatingBtnDragging) {
                const dist = Math.hypot(e.clientX - this.floatingBtnStartX, e.clientY - this.floatingBtnStartY);
                if (dist > 4) {
                    this.floatingBtnHasMoved = true;
                }
                let newLeft = e.clientX - this.floatingBtnOffsetX;
                let newTop = e.clientY - this.floatingBtnOffsetY;
                newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - this.floatingBtn.offsetWidth));
                newTop = Math.max(0, Math.min(newTop, window.innerHeight - this.floatingBtn.offsetHeight));
                this.floatingBtn.style.bottom = 'auto'; this.floatingBtn.style.right = 'auto';
                this.floatingBtn.style.left = newLeft + 'px'; this.floatingBtn.style.top = newTop + 'px';
                e.preventDefault();
                e.stopPropagation();
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (this.floatingBtnDragging) {
                this.floatingBtnDragging = false;
                this.floatingBtn.style.cursor = 'grab !important';
                const rect = this.floatingBtn.getBoundingClientRect();
                localStorage.setItem('stickerToolBtnPosition', JSON.stringify({
                    left: rect.left, top: rect.top
                }));
            }
        });
        
        document.body.appendChild(this.floatingBtn);
    }
    
    bindGlobalShortcut() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                this.show();
            }
        });
    }
    
    bindEvents() {
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.onMouseUp(e));
        
        this.canvas.addEventListener('wheel', (e) => {
            if (this.mosaicMode) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.mosaicBrushSize = Math.min(100, this.mosaicBrushSize + 4);
                } else {
                    this.mosaicBrushSize = Math.max(8, this.mosaicBrushSize - 4);
                }
            }
        }, { passive: false });
        
        // 捕获阶段拦截粘贴事件，彻底阻止 ComfyUI 底层画布创建节点
        window.addEventListener('paste', async (e) => {
            const isModalOpen = (this.modal && this.modal.style.display === 'flex');
            const isTankOpen = (this.mirageModal && this.mirageModal.style.display === 'flex');

            if (!isModalOpen && !isTankOpen) return;

            const items = (e.clipboardData || e.originalEvent?.clipboardData)?.items;
            if (!items) return;

            let hasImage = false;
            for (let item of items) {
                if (item.type.indexOf('image') !== -1) {
                    hasImage = true;
                    break;
                }
            }

            if (hasImage) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                for (let item of items) {
                    if (item.type.indexOf('image') !== -1) {
                        const blob = item.getAsFile();
                        if (isTankOpen) {
                            this.handleMiragePaste(blob);
                            return;
                        }
                        if (isModalOpen) {
                            await this.loadImageFromFile(blob, !this.baseImage);
                            return;
                        }
                    }
                }
            }
        }, true); // true: 捕获阶段拦截，优先级高于 ComfyUI

        document.addEventListener('keydown', (e) => {
            if (this.mirageModal.style.display === 'flex' && e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                this.closeMirageModal();
                return;
            }

            if (this.modal.style.display !== 'flex') return;
            
            if (e.ctrlKey && e.key === 'z') {
                e.preventDefault();
                e.stopPropagation();
                this.undo();
            } else if (e.ctrlKey && e.key === 'y') {
                e.preventDefault();
                e.stopPropagation();
                this.redo();
            } else if (e.key === 'Delete') {
                e.preventDefault();
                e.stopPropagation();
                this.deleteSelectedSticker();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                if (this.pickingColor) {
                    this.cancelColorPicking();
                } else if (this.mosaicMode) {
                    this.toggleMosaicMode();
                } else {
                    this.hide();
                }
            }
        }, true);
        
        window.addEventListener('resize', () => {
            if (this.modal.style.display === 'flex') {
                this.fitToWindow();
            }
        });
    }
    
    show(imageUrl = null) {
        this.modal.style.display = 'flex';
        setTimeout(() => {
            this.fitToWindow();
            if (imageUrl) {
                this.loadImageFromUrl(imageUrl, true);
            }
            this.applyNightModeStyles();
            this.startAnimationLoop();
        }, 100);
    }
    
    hide() {
        if (this.mosaicMode) this.toggleMosaicMode();
        this.animLoopRunning = false;
        this.modal.style.display = 'none';
    }
    
    saveHistory() {
        if (this._undoingOrRedoing) return;
        
        const state = {
            baseImage: this.baseImage ? this.cloneImage(this.baseImage) : null,
            stickers: this.stickers.map(s => ({
                image: s.isAnimated ? s.image : this.cloneImage(s.image),
                x: s.x, y: s.y, width: s.width, height: s.height,
                isAnimated: s.isAnimated, frames: s.frames,
                frameIndex: s.frameIndex || 0, rawBlob: s.rawBlob,
                flipped: !!s.flipped, rotation: s.rotation || 0, speed: s.speed || 1.0,
                origRatio: s.origRatio || (s.width / s.height)
            }))
        };
        
        this.undoStack.push(state);
        if (this.undoStack.length > this.maxHistory) this.undoStack.shift();
        this.redoStack = [];
        this.updateUndoRedoButtons();
    }
    
    cloneImage(img) {
        if (img instanceof ImageBitmap) return img;
        const canvas = document.createElement('canvas');
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return canvas;
    }
    
    undo() {
        if (!this.undoStack.length) return;
        this._undoingOrRedoing = true;
        const currentState = {
            baseImage: this.baseImage ? this.cloneImage(this.baseImage) : null,
            stickers: this.stickers.map(s => ({
                image: s.isAnimated ? s.image : this.cloneImage(s.image),
                x: s.x, y: s.y, width: s.width, height: s.height,
                isAnimated: s.isAnimated, frames: s.frames,
                frameIndex: s.frameIndex || 0, rawBlob: s.rawBlob,
                flipped: !!s.flipped, rotation: s.rotation || 0, speed: s.speed || 1.0,
                origRatio: s.origRatio || (s.width / s.height)
            }))
        };
        this.redoStack.push(currentState);
        
        const prevState = this.undoStack.pop();
        this.baseImage = prevState.baseImage;
        this.stickers = prevState.stickers;
        this.selectedSticker = -1;
        
        this.updateCanvas();
        this.fitToWindow();
        this.updateUndoRedoButtons();
        this.startAnimationLoop();
        this._undoingOrRedoing = false;
    }
    
    redo() {
        if (!this.redoStack.length) return;
        this._undoingOrRedoing = true;
        const currentState = {
            baseImage: this.baseImage ? this.cloneImage(this.baseImage) : null,
            stickers: this.stickers.map(s => ({
                image: s.isAnimated ? s.image : this.cloneImage(s.image),
                x: s.x, y: s.y, width: s.width, height: s.height,
                isAnimated: s.isAnimated, frames: s.frames,
                frameIndex: s.frameIndex || 0, rawBlob: s.rawBlob,
                flipped: !!s.flipped, rotation: s.rotation || 0, speed: s.speed || 1.0,
                origRatio: s.origRatio || (s.width / s.height)
            }))
        };
        this.undoStack.push(currentState);
        
        const nextState = this.redoStack.pop();
        this.baseImage = nextState.baseImage;
        this.stickers = nextState.stickers;
        this.selectedSticker = -1;
        
        this.updateCanvas();
        this.fitToWindow();
        this.updateUndoRedoButtons();
        this.startAnimationLoop();
        this._undoingOrRedoing = false;
    }
    
    updateUndoRedoButtons() {
        const undoBtn = document.getElementById('undoBtn');
        const redoBtn = document.getElementById('redoBtn');
        if (undoBtn) undoBtn.disabled = !this.undoStack.length;
        if (redoBtn) redoBtn.disabled = !this.redoStack.length;
    }
    
    loadBaseImage() {
        this.fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) await this.loadImageFromFile(file, true);
            this.fileInput.value = '';
        };
        this.fileInput.click();
    }
    
    loadSticker() {
        if (!this.baseImage) {
            this.showToast(this.lang === 'zh' ? "请先导入背景图片" : "Please load background first", 'warn');
            return;
        }
        this.fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) await this.loadImageFromFile(file, false);
            this.fileInput.value = '';
        };
        this.fileInput.click();
    }

    async loadImageFromFile(file, isBaseImage) {
        if (isBaseImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    this.saveHistory();
                    this.baseImage = img;
                    this.stickers = [];
                    this.selectedSticker = -1;
                    this.fitToWindow();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
            return;
        }

        if (file.type === 'image/gif' && window.ImageDecoder) {
            try {
                this.showLoading(this.lang === 'zh' ? "正在解析动态 GIF..." : "Decoding GIF...");
                const arrayBuffer = await file.arrayBuffer();
                const decoder = new ImageDecoder({ data: arrayBuffer, type: 'image/gif' });
                await decoder.tracks.ready;
                
                const track = decoder.tracks.selectedTrack;
                const frameCount = track.frameCount;
                const frames = [];

                for (let i = 0; i < frameCount; i++) {
                    const result = await decoder.decode({ frameIndex: i });
                    const bitmap = await createImageBitmap(result.image);
                    const duration = (result.image.duration || 100000) / 1000000;
                    frames.push({ bitmap, duration });
                    result.image.close();
                }

                if (frames.length > 1) {
                    this.saveHistory();
                    this.addAnimatedSticker(frames, file.name, file);
                    return;
                }
            } catch (err) {
            } finally {
                this.hideLoading();
            }
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.saveHistory();
                this.addSticker(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    addAnimatedSticker(frames, filename, rawBlob = null) {
        const firstFrame = frames[0].bitmap;
        const maxSize = Math.min(this.baseImage.width, this.baseImage.height) / 3;
        let width = firstFrame.width;
        let height = firstFrame.height;
        
        if (width > maxSize || height > maxSize) {
            const ratio = Math.min(maxSize / width, maxSize / height);
            width *= ratio;
            height *= ratio;
        }
        
        const x = (this.baseImage.width - width) / 2;
        const y = (this.baseImage.height - height) / 2;

        this.stickers.push({
            image: firstFrame,
            x, y, width, height,
            isAnimated: true,
            frames: frames,
            frameIndex: 0,
            lastFrameTime: performance.now(),
            rawBlob: rawBlob,
            flipped: false,
            rotation: 0,
            speed: 1.0,
            origRatio: width / height
        });

        this.selectedSticker = this.stickers.length - 1;
        this.updateCanvas();
        this.startAnimationLoop();
    }
    
    async loadImageFromUrl(url, isBaseImage) {
        try {
            const resp = await fetch(url);
            const blob = await resp.blob();
            await this.loadImageFromFile(blob, isBaseImage);
        } catch (e) {
            this.showToast("Error: " + e.message, 'error');
        }
    }
    
    addSticker(img) {
        const maxSize = Math.min(this.baseImage.width, this.baseImage.height) / 4;
        let width = img.width;
        let height = img.height;
        
        if (width > maxSize || height > maxSize) {
            const ratio = Math.min(maxSize / width, maxSize / height);
            width *= ratio;
            height *= ratio;
        }
        
        const x = (this.baseImage.width - width) / 2;
        const y = (this.baseImage.height - height) / 2;
        
        this.stickers.push({
            image: img, x, y, width, height,
            isAnimated: false, flipped: false, rotation: 0, speed: 1.0,
            origRatio: width / height
        });
        this.selectedSticker = this.stickers.length - 1;
        this.updateCanvas();
    }
    
    async pasteFromClipboard() {
        try {
            if (navigator.clipboard && navigator.clipboard.read) {
                const items = await navigator.clipboard.read();
                for (const item of items) {
                    if (item.types.some(t => t.startsWith('image/'))) {
                        const blob = await item.getType(item.types.find(t => t.startsWith('image/')));
                        await this.loadImageFromFile(blob, !this.baseImage);
                        return;
                    }
                }
            }
        } catch (e) {}
        this.showToast(this.lang === 'zh' ? "请直接按 Ctrl + V 粘贴图片" : "Please press Ctrl + V to paste", 'info');
    }
    
    fitToWindow() {
        if (!this.baseImage) return;
        const containerWidth = this.canvasContainer.clientWidth - 40;
        const containerHeight = this.canvasContainer.clientHeight - 40;
        const scaleX = containerWidth / this.baseImage.width;
        const scaleY = containerHeight / this.baseImage.height;
        this.scale = Math.min(scaleX, scaleY);
        this.canvas.width = this.baseImage.width * this.scale;
        this.canvas.height = this.baseImage.height * this.scale;
        this.updateCanvas();
    }
    
    updateCanvas() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!this.baseImage) return;
        
        ctx.drawImage(this.baseImage, 0, 0, this.canvas.width, this.canvas.height);
        
        this.stickers.forEach((sticker, i) => {
            const x = sticker.x * this.scale;
            const y = sticker.y * this.scale;
            const width = sticker.width * this.scale;
            const height = sticker.height * this.scale;
            const cx = x + width / 2;
            const cy = y + height / 2;
            
            ctx.save();
            ctx.translate(cx, cy);
            if (sticker.rotation) {
                ctx.rotate((sticker.rotation * Math.PI) / 180);
            }
            if (sticker.flipped) {
                ctx.scale(-1, 1);
            }
            ctx.drawImage(sticker.image, -width / 2, -height / 2, width, height);
            ctx.restore();
            
            if (i === this.selectedSticker) {
                ctx.save();
                ctx.translate(cx, cy);
                if (sticker.rotation) {
                    ctx.rotate((sticker.rotation * Math.PI) / 180);
                }
                
                ctx.strokeStyle = this.nightMode ? '#4da6ff' : '#0078d7';
                ctx.lineWidth = 2;
                ctx.strokeRect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4);
                
                const handleSize = 6;
                const corners = [
                    [-width / 2, -height / 2],
                    [width / 2, -height / 2],
                    [-width / 2, height / 2],
                    [width / 2, height / 2]
                ];
                
                ctx.fillStyle = this.nightMode ? '#4da6ff' : '#0078d7';
                ctx.strokeStyle = this.nightMode ? '#333' : 'white';
                ctx.lineWidth = 1;
                corners.forEach(([hx, hy]) => {
                    ctx.fillRect(hx - handleSize, hy - handleSize, handleSize * 2, handleSize * 2);
                    ctx.strokeRect(hx - handleSize, hy - handleSize, handleSize * 2, handleSize * 2);
                });

                const rotHandleDist = 26;
                const rotHandleY = -height / 2 - rotHandleDist;

                ctx.beginPath();
                ctx.moveTo(0, -height / 2 - 2);
                ctx.lineTo(0, rotHandleY);
                ctx.strokeStyle = this.nightMode ? '#4da6ff' : '#0078d7';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(0, rotHandleY, 6, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                ctx.strokeStyle = this.nightMode ? '#4da6ff' : '#0078d7';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.restore();
            }
        });
    }
    
    onMouseDown(e) {
        if (!this.baseImage) return;
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const origX = x / this.scale;
        const origY = y / this.scale;
        
        if (this.mosaicMode) {
            this.saveHistory();
            this.mosaicPainting = true;
            this.lastMosaicX = origX;
            this.lastMosaicY = origY;
            this.applyMosaicAt(origX, origY);
            return;
        }

        if (this.pickingColor && this.selectedSticker !== -1) {
            this.pickBackgroundColor(x, y);
            return;
        }
        
        if (this.selectedSticker !== -1) {
            const sticker = this.stickers[this.selectedSticker];
            const cx = (sticker.x + sticker.width / 2) * this.scale;
            const cy = (sticker.y + sticker.height / 2) * this.scale;
            const hw = (sticker.width * this.scale) / 2;
            const hh = (sticker.height * this.scale) / 2;
            const rad = -((sticker.rotation || 0) * Math.PI) / 180;
            
            const lx = (x - cx) * Math.cos(rad) - (y - cy) * Math.sin(rad);
            const ly = (x - cx) * Math.sin(rad) + (y - cy) * Math.cos(rad);

            if (Math.hypot(lx - 0, ly - (-hh - 26)) <= 14) {
                this.rotating = true;
                this.resizing = false;
                this.dragging = false;
                return;
            }

            const handleSize = 12;
            const corners = [
                [-hw, -hh], [hw, -hh],
                [-hw, hh], [hw, hh]
            ];
            for (let j = 0; j < 4; j++) {
                const [hx, hy] = corners[j];
                if (Math.abs(lx - hx) < handleSize && Math.abs(ly - hy) < handleSize) {
                    this.resizing = true;
                    this.rotating = false;
                    this.dragging = false;
                    this.resizeCorner = j;
                    this.lastX = origX;
                    this.lastY = origY;
                    return;
                }
            }
        }
        
        for (let i = this.stickers.length - 1; i >= 0; i--) {
            const sticker = this.stickers[i];
            const cx = (sticker.x + sticker.width / 2) * this.scale;
            const cy = (sticker.y + sticker.height / 2) * this.scale;
            const hw = (sticker.width * this.scale) / 2;
            const hh = (sticker.height * this.scale) / 2;
            const rad = -((sticker.rotation || 0) * Math.PI) / 180;

            const lx = (x - cx) * Math.cos(rad) - (y - cy) * Math.sin(rad);
            const ly = (x - cx) * Math.sin(rad) + (y - cy) * Math.cos(rad);

            if (lx >= -hw && lx <= hw && ly >= -hh && ly <= hh) {
                this.selectedSticker = i;
                this.dragging = true;
                this.resizing = false;
                this.rotating = false;
                this.lastX = origX;
                this.lastY = origY;
                this.updateCanvas();
                return;
            }
        }
        
        this.selectedSticker = -1;
        this.updateCanvas();
    }
    
    onMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (this.mosaicMode) {
            this.canvas.style.cursor = 'crosshair';
            if (this.mosaicPainting) {
                const origX = x / this.scale;
                const origY = y / this.scale;
                this.applyMosaicLine(this.lastMosaicX, this.lastMosaicY, origX, origY);
                this.lastMosaicX = origX;
                this.lastMosaicY = origY;
            }
            return;
        }

        if (this.pickingColor) {
            this.canvas.style.cursor = 'crosshair';
            return;
        }

        if (this.rotating && this.selectedSticker !== -1) {
            this.canvas.style.cursor = 'crosshair';
            const sticker = this.stickers[this.selectedSticker];
            const cx = (sticker.x + sticker.width / 2) * this.scale;
            const cy = (sticker.y + sticker.height / 2) * this.scale;
            const dx = x - cx;
            const dy = y - cy;

            let deg = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;
            deg = (deg % 360 + 360) % 360;

            if (e.shiftKey) {
                deg = Math.round(deg / 15) * 15;
            }
            sticker.rotation = Math.round(deg);
            this.updateCanvas();
            return;
        }
        
        if (this.dragging && this.selectedSticker !== -1) {
            const origX = x / this.scale;
            const origY = y / this.scale;
            const sticker = this.stickers[this.selectedSticker];
            const dx = origX - this.lastX;
            const dy = origY - this.lastY;
            
            sticker.x += dx; sticker.y += dy;
            sticker.x = Math.max(0, Math.min(sticker.x, this.baseImage.width - sticker.width));
            sticker.y = Math.max(0, Math.min(sticker.y, this.baseImage.height - sticker.height));
            
            this.lastX = origX; this.lastY = origY;
            this.updateCanvas();
            return;
        }
        
        if (this.resizing && this.selectedSticker !== -1) {
            const origX = x / this.scale;
            const origY = y / this.scale;
            const sticker = this.stickers[this.selectedSticker];
            const dx = origX - this.lastX;
            const dy = origY - this.lastY;
            const ratio = sticker.origRatio || (sticker.width / sticker.height);
            
            switch (this.resizeCorner) {
                case 0:
                    sticker.x += dx; sticker.y += dy;
                    sticker.width -= dx; sticker.height -= dy;
                    if (e.shiftKey) sticker.width = sticker.height * ratio;
                    break;
                case 1:
                    sticker.y += dy;
                    sticker.width += dx; sticker.height -= dy;
                    if (e.shiftKey) sticker.width = sticker.height * ratio;
                    break;
                case 2:
                    sticker.x += dx;
                    sticker.width -= dx; sticker.height += dy;
                    if (e.shiftKey) sticker.width = sticker.height * ratio;
                    break;
                case 3:
                    sticker.width += dx; sticker.height += dy;
                    if (e.shiftKey) sticker.width = sticker.height * ratio;
                    break;
            }
            
            const minSize = 20;
            if (sticker.width < minSize) sticker.width = minSize;
            if (sticker.height < minSize) sticker.height = minSize;
            
            this.lastX = origX; this.lastY = origY;
            this.updateCanvas();
            return;
        }
        
        if (this.selectedSticker !== -1) {
            const sticker = this.stickers[this.selectedSticker];
            const cx = (sticker.x + sticker.width / 2) * this.scale;
            const cy = (sticker.y + sticker.height / 2) * this.scale;
            const hw = (sticker.width * this.scale) / 2;
            const hh = (sticker.height * this.scale) / 2;
            const rad = -((sticker.rotation || 0) * Math.PI) / 180;
            const lx = (x - cx) * Math.cos(rad) - (y - cy) * Math.sin(rad);
            const ly = (x - cx) * Math.sin(rad) + (y - cy) * Math.cos(rad);

            if (Math.hypot(lx - 0, ly - (-hh - 26)) <= 12) {
                this.canvas.style.cursor = 'crosshair';
                return;
            }

            const handleSize = 12;
            const corners = [
                [-hw, -hh], [hw, -hh],
                [-hw, hh], [hw, hh]
            ];
            for (let j = 0; j < 4; j++) {
                const [hx, hy] = corners[j];
                if (Math.abs(lx - hx) < handleSize && Math.abs(ly - hy) < handleSize) {
                    const cursors = ['nw-resize', 'ne-resize', 'sw-resize', 'se-resize'];
                    this.canvas.style.cursor = cursors[j];
                    return;
                }
            }
            
            if (lx >= -hw && lx <= hw && ly >= -hh && ly <= hh) {
                this.canvas.style.cursor = 'move';
                return;
            }
        }
        
        this.canvas.style.cursor = 'default';
    }
    
    onMouseUp() {
        if (this.mosaicPainting) this.mosaicPainting = false;
        if (this.dragging || this.resizing || this.rotating) this.saveHistory();
        this.dragging = false;
        this.resizing = false;
        this.rotating = false;
        this.resizeCorner = null;
    }
    
    deleteSelectedSticker() {
        if (this.selectedSticker !== -1) {
            this.saveHistory();
            const s = this.stickers[this.selectedSticker];
            if (s.frames) {
                s.frames.forEach(f => {
                    try { if (f.bitmap && f.bitmap.close) f.bitmap.close(); } catch (e) {}
                });
            }
            this.stickers.splice(this.selectedSticker, 1);
            this.selectedSticker = -1;
            this.updateCanvas();
        }
    }
    
    clearCanvas() {
        if (this.baseImage || this.stickers.length) {
            if (confirm(this.lang === 'zh' ? "确定要清空整个画布吗？" : "Clear entire canvas?")) {
                this.saveHistory();
                this.stickers.forEach(s => {
                    if (s.frames) {
                        s.frames.forEach(f => {
                            try { if (f.bitmap && f.bitmap.close) f.bitmap.close(); } catch (e) {}
                        });
                    }
                });
                this.baseImage = null;
                this.stickers = [];
                this.selectedSticker = -1;
                this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.updateUndoRedoButtons();
            }
        }
    }
    
    removeBackground(colorHex, tolerance) {
        if (this.selectedSticker === -1) return;
        this.saveHistory();
        const sticker = this.stickers[this.selectedSticker];
        const canvas = document.createElement('canvas');
        canvas.width = sticker.image.width;
        canvas.height = sticker.image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(sticker.image, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const r = parseInt(colorHex.slice(1, 3), 16);
        const g = parseInt(colorHex.slice(3, 5), 16);
        const b = parseInt(colorHex.slice(5, 7), 16);
        
        for (let i = 0; i < data.length; i += 4) {
            const dr = data[i] - r;
            const dg = data[i + 1] - g;
            const db = data[i + 2] - b;
            if (Math.sqrt(dr * dr + dg * dg + db * db) < tolerance) {
                data[i + 3] = 0;
            }
        }
        
        ctx.putImageData(imageData, 0, 0);
        const newImg = new Image();
        newImg.onload = () => {
            sticker.image = newImg;
            this.updateCanvas();
        };
        newImg.src = canvas.toDataURL('image/png');
    }
    
    startColorPicking() {
        if (this.selectedSticker === -1) return;
        this.pickingColor = true;
        this.canvas.style.cursor = 'crosshair';
    }
    
    cancelColorPicking() {
        this.pickingColor = false;
        this.canvas.style.cursor = 'default';
    }
    
    pickBackgroundColor(x, y) {
        try {
            const sticker = this.stickers[this.selectedSticker];
            const sx = sticker.x * this.scale;
            const sy = sticker.y * this.scale;
            const sw = sticker.width * this.scale;
            const sh = sticker.height * this.scale;
            
            if (x >= sx && x <= sx + sw && y >= sy && y <= sy + sh) {
                const canvas = document.createElement('canvas');
                canvas.width = sticker.image.width;
                canvas.height = sticker.image.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(sticker.image, 0, 0);
                
                const stickerX = Math.floor((x - sx) / this.scale);
                const stickerY = Math.floor((y - sy) / this.scale);
                const pixel = ctx.getImageData(stickerX, stickerY, 1, 1).data;
                const colorHex = '#' + 
                    pixel[0].toString(16).padStart(2, '0') + 
                    pixel[1].toString(16).padStart(2, '0') + 
                    pixel[2].toString(16).padStart(2, '0');
                this.removeBackground(colorHex, 30);
            }
        } catch (e) {
        } finally {
            this.cancelColorPicking();
        }
    }
    
    compositeImage() {
        if (!this.baseImage) return null;
        const canvas = document.createElement('canvas');
        canvas.width = this.baseImage.width;
        canvas.height = this.baseImage.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.baseImage, 0, 0);
        this.stickers.forEach(sticker => {
            const cx = sticker.x + sticker.width / 2;
            const cy = sticker.y + sticker.height / 2;
            ctx.save();
            ctx.translate(cx, cy);
            if (sticker.rotation) ctx.rotate((sticker.rotation * Math.PI) / 180);
            if (sticker.flipped) ctx.scale(-1, 1);
            ctx.drawImage(sticker.image, -sticker.width / 2, -sticker.height / 2, sticker.width, sticker.height);
            ctx.restore();
        });
        return canvas;
    }

    // ================= 动图合成 (消除1px微抖动 + 统一投影坐标系) =================
    async compositeAnimatedAPNG() {
        if (!this.baseImage) return null;

        const animStickers = this.stickers.filter(s => s.isAnimated && s.frames && s.frames.length > 1);
        if (animStickers.length === 0) {
            const staticCanvas = this.compositeImage();
            return new Promise(r => staticCanvas.toBlob(r, 'image/png'));
        }

        const preset = document.getElementById('exportPresetSelect')?.value || '1024_20';
        let maxDim = 1024;
        let targetMaxFps = 20;

        if (preset === '640_15') {
            maxDim = 640; targetMaxFps = 15;
        } else if (preset === '720_18') {
            maxDim = 720; targetMaxFps = 18;
        } else if (preset === '1024_20') {
            maxDim = 1024; targetMaxFps = 20;
        } else if (preset === '1440_24') {
            maxDim = 1440; targetMaxFps = 24;
        } else if (preset === 'orig') {
            maxDim = 99999; targetMaxFps = 60;
        }

        const origW = this.baseImage.width;
        const origH = this.baseImage.height;
        let scale = 1.0;
        if (origW > maxDim || origH > maxDim) {
            scale = Math.min(maxDim / origW, maxDim / origH);
        }
        const outW = Math.round(origW * scale);
        const outH = Math.round(origH * scale);

        animStickers.forEach(s => {
            let cur = 0;
            s.frameTimeStarts = [];
            for (const f of s.frames) {
                s.frameTimeStarts.push(cur);
                cur += (f.duration || 0.1);
            }
            s.totalDuration = cur || 1.0;
        });

        const maxDuration = Math.min(6.0, Math.max(...animStickers.map(s => s.totalDuration / (s.speed || 1.0))));
        const dt = 1.0 / targetMaxFps;
        const numFrames = Math.max(2, Math.round(maxDuration / dt));

        const getStickerFrameAtTime = (s, t) => {
            const spd = s.speed || 1.0;
            const localT = (t * spd) % s.totalDuration;
            let fIdx = 0;
            for (let k = s.frames.length - 1; k >= 0; k--) {
                if (localT >= s.frameTimeStarts[k]) {
                    fIdx = k;
                    break;
                }
            }
            return s.frames[fIdx].bitmap;
        };

        // 旋转外接矩形范围判定
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        animStickers.forEach(s => {
            const cx = s.x + s.width / 2;
            const cy = s.y + s.height / 2;
            const rad = ((s.rotation || 0) * Math.PI) / 180;
            const w_rot = Math.abs(s.width * Math.cos(rad)) + Math.abs(s.height * Math.sin(rad));
            const h_rot = Math.abs(s.width * Math.sin(rad)) + Math.abs(s.height * Math.cos(rad));
            minX = Math.min(minX, cx - w_rot / 2);
            minY = Math.min(minY, cy - h_rot / 2);
            maxX = Math.max(maxX, cx + w_rot / 2);
            maxY = Math.max(maxY, cy + h_rot / 2);
        });

        const cropNativeX = Math.max(0, Math.floor(minX));
        const cropNativeY = Math.max(0, Math.floor(minY));
        const cropNativeW = Math.min(origW - cropNativeX, Math.ceil(maxX - minX));
        const cropNativeH = Math.min(origH - cropNativeY, Math.ceil(maxY - minY));

        const cropX = Math.round(cropNativeX * scale);
        const cropY = Math.round(cropNativeY * scale);
        const cropW = Math.max(1, Math.round(cropNativeW * scale));
        const cropH = Math.max(1, Math.round(cropNativeH * scale));

        this.showLoading(this.lang === 'zh' ? `正在渲染局部切片 (${outW}x${outH} · ${cropW}x${cropH} · 共${numFrames}帧)...` : `Rendering subframes (${numFrames} frames)...`);

        const frameItems = [];

        // Frame 0 全画幅基底图
        const cv0 = document.createElement('canvas');
        cv0.width = outW; cv0.height = outH;
        const ctx0 = cv0.getContext('2d');
        ctx0.drawImage(this.baseImage, 0, 0, outW, outH);

        this.stickers.forEach(s => {
            const sx = Math.round(s.x * scale);
            const sy = Math.round(s.y * scale);
            const sw = Math.round(s.width * scale);
            const sh = Math.round(s.height * scale);
            const cx = sx + sw / 2;
            const cy = sy + sh / 2;
            const img = s.isAnimated ? getStickerFrameAtTime(s, 0) : s.image;

            ctx0.save();
            ctx0.translate(cx, cy);
            if (s.rotation) ctx0.rotate((s.rotation * Math.PI) / 180);
            if (s.flipped) ctx0.scale(-1, 1);
            ctx0.drawImage(img, -sw / 2, -sh / 2, sw, sh);
            ctx0.restore();
        });

        const delayMs = Math.max(2, Math.round(dt * 100));
        frameItems.push({
            canvas: cv0, x: 0, y: 0,
            delayNum: delayMs, delayDen: 100
        });

        // Frame 1 ~ N：采用反向位移统一绘制，消除任何切片舍入抖动
        for (let i = 1; i < numFrames; i++) {
            const t = i * dt;
            const cvSub = document.createElement('canvas');
            cvSub.width = cropW;
            cvSub.height = cropH;
            const ctxSub = cvSub.getContext('2d');

            ctxSub.save();
            ctxSub.translate(-cropX, -cropY);
            ctxSub.drawImage(this.baseImage, 0, 0, outW, outH);

            this.stickers.forEach(s => {
                const sx = Math.round(s.x * scale);
                const sy = Math.round(s.y * scale);
                const sw = Math.round(s.width * scale);
                const sh = Math.round(s.height * scale);
                const cx = sx + sw / 2;
                const cy = sy + sh / 2;
                const img = s.isAnimated ? getStickerFrameAtTime(s, t) : s.image;

                ctxSub.save();
                ctxSub.translate(cx, cy);
                if (s.rotation) ctxSub.rotate((s.rotation * Math.PI) / 180);
                if (s.flipped) ctxSub.scale(-1, 1);
                ctxSub.drawImage(img, -sw / 2, -sh / 2, sw, sh);
                ctxSub.restore();
            });

            ctxSub.restore();

            frameItems.push({
                canvas: cvSub, x: cropX, y: cropY,
                delayNum: delayMs, delayDen: 100
            });
        }

        return await encodeSubframeAPNG(frameItems, 0);
    }
    
    async saveImage() {
        if (!this.baseImage) return;

        const hasAnim = this.stickers.some(s => s.isAnimated && s.frames && s.frames.length > 1);
        if (hasAnim) {
            try {
                this.showLoading(this.lang === 'zh' ? "正在渲染动图..." : "Rendering animation...");
                const finalBlob = await this.compositeAnimatedAPNG();
                const filename = `sticker_anim_${Date.now()}.png`;

                const link = document.createElement('a');
                link.download = filename;
                link.href = URL.createObjectURL(finalBlob);
                link.click();
                this.showToast(this.lang === 'zh' ? "💾 动图已开始下载" : "💾 Download started", 'success');
            } catch (err) {
                this.showToast("Error: " + err.message, 'error');
            } finally {
                this.hideLoading();
            }
        } else {
            const canvas = this.compositeImage();
            const link = document.createElement('a');
            link.download = `sticker_${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            this.showToast(this.lang === 'zh' ? "💾 图片已保存" : "💾 Image saved", 'success');
        }
    }
    
    async copyToClipboard() {
        if (!this.baseImage) return;

        const hasAnim = this.stickers.some(s => s.isAnimated && s.frames && s.frames.length > 1);

        if (hasAnim) {
            try {
                this.showLoading(this.lang === 'zh' ? "正在写入系统剪贴板..." : "Copying to clipboard...");
                const blob = await this.compositeAnimatedAPNG();
                const filename = `sticker_anim_${Date.now()}.png`;

                const formData = new FormData();
                formData.append("file", blob, filename);
                formData.append("filename", filename);

                const resp = await fetch("/stickertool/copy_tank_file", {
                    method: "POST", body: formData
                });
                const res = await resp.json();

                if (res.success) {
                    const sizeMB = (blob.size / 1024 / 1024).toFixed(2);
                    this.showToast(this.lang === 'zh' ? `✅ 动图已写入剪贴板 (${sizeMB} MB)，直接 Ctrl+V 发送！` : `✅ Copied (${sizeMB} MB)! Paste in chat directly!`, 'success', 2800);
                } else {
                    this.showToast("Copy failed: " + (res.error || "Unknown"), 'error');
                }
            } catch (err) {
                this.showToast("Error: " + err.message, 'error');
            } finally {
                this.hideLoading();
            }
        } else {
            const canvas = this.compositeImage();
            try {
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                this.showToast(this.lang === 'zh' ? "✅ 图片已复制到剪贴板！" : "✅ Image copied to clipboard!", 'success');
            } catch (e) {
                this.showToast("Error: " + e.message, 'error');
            }
        }
    }
    
    setStatus(text) {
        this.statusBar.textContent = text;
    }
}

// 注册扩展
app.registerExtension({
    name: "ComfyUI.StickerTool",
    async setup() {
        window.stickerToolInstance = new StickerTool();
        console.log("✅ StickerTool loaded successfully!");
    },
    
    async nodeCreated(node) {
        const origGetExtraMenuOptions = node.getExtraMenuOptions;
        node.getExtraMenuOptions = function(canvas, options) {
            if (origGetExtraMenuOptions) {
                origGetExtraMenuOptions.apply(this, arguments);
            }
            
            if (this.imgs && this.imgs.length > 0) {
                options.push({
                    content: "🖼️ 用贴纸工具编辑",
                    callback: () => {
                        const activeImg = this.imgs[this.imageIndex || 0];
                        if (activeImg && activeImg.src) {
                            window.stickerToolInstance.show(activeImg.src);
                        }
                    }
                });
            }
        };
    }
});
