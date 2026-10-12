# ComfyUI StickerTool & APNG Mirage Tank Generator

<p align="center">
  <strong>轻量图片贴纸工具 & 全彩 APNG 幻影坦克生成器</strong><br>
  A lightweight interactive sticker editor & lossless APNG Mirage Tank generator for ComfyUI.
</p>

---

## 🌟 特性亮点 / Key Features
<img width="2215" height="1140" alt="QQ20261012-200248" src="https://github.com/user-attachments/assets/c95d0302-3c80-4cdd-8119-c8bdd5233ab5" />
- **🎨 交互式贴纸编辑 (Interactive Sticker Editing)**:
- <img width="1920" height="862" alt="QQ20261012-200159-HD" src="https://github.com/user-attachments/assets/00fc839e-7ae2-49f1-aa71-9fc2312882a6" />
  - 支持静态图片与**原生动态 GIF 贴纸**实时循环播放。
  - **交互旋转手柄**：支持 $0^\circ \sim 360^\circ$ 自由平滑旋转，按住 `Shift` 自动吸附至 $15^\circ$ 倍数。
  - **等比例缩放**：四角手柄拖拽调整大小时，按住 `Shift` 锁定原始纵横比。
  - **图层排序与翻转**：支持图层自由上移/下移，水平一键镜像翻转，以及动图播放倍速调节（$0.5\times \sim 2.0\times$）。
  - **自带常用工具**：画笔马赛克打码、一键去除纯白背景、任意色度吸管取色抠图。
  - **本地持久收藏库**：基于 IndexedDB，动态 GIF 贴纸收藏后在库中原生动态预览，随时拖回画布使用。

- **⚡ 局部差量切片与动图超轻量导出 (Sub-frame Diff Compression)**:
  - 突破传统 APNG 全画幅重复编码导致的几十兆臃肿体积，采用**局部更新与多轨时间轴自动对齐**技术。
  - 提供 `640px`、`720px`、`1024px (推荐)`、`1440px (2K)` 与原画多档规格，动图体积直降 90%（通常仅需 $1 \sim 5\text{ MB}$），聊天软件秒发秒播。

- **🎭 APNG 幻影坦克生成器 (Full-Color Mirage Tank)**:
  - **100% 满血全彩**：不掉色彩饱和度，表图伪装，点开大图展示隐藏真相。
  - **🛡️ 六档精简防审机制**：
    - `🔴 极高强度 (高反差扫描 · 严苛风控)`
    - `🟠 高强度 (柔和点阵 · 护眼微动)`
    - `🟡 中高强度 (静态网纹 · 绝对0闪烁 · 护眼首选)`
    - `🟢 中等强度 (等光色差 · 视觉静止)`
    - `🔵 低强度 (微弱噪点 · 原图画质)`
    - `⚪ 关闭 (原画直出)`
  - **双底色即时验证**：全屏预览支持一键切换 `🌙 黑底` / `☀️ 白底`，直观校验融底效果。

- **📋 Windows 物理剪贴板直通 (Native File Clipboard)**:
  - 后端直接调用 Windows 原生 `CF_HDROP` 句柄，点击「复制」后直接切到 QQ / 微信 聊天框按 `Ctrl + V` 即可无损发送，发出去就是会动的！
  - 自带历史临时文件自动清理机制（仅保留最新 5 个文件），杜绝堆积硬盘空间。

- **🌐 界面体验优化**:
  - 全界面支持 **中 / 英 双语一键切换**。
  - 采用优雅轻量的**浮动 Toast 通知**，告别系统弹窗打断手感。
  - 悬浮按钮位移防误触判定，自由拖放位置不弹窗。

---

## 📦 安装方法 / Installation

1. 进入 ComfyUI 的插件目录 `ComfyUI/custom_nodes/`：
   ```bash
   cd ComfyUI/custom_nodes
