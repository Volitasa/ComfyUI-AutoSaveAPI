# ComfyUI-AutoSaveAPI

[English](#english) | [中文说明](#chinese)

<a name="english"></a>
## English

A lightweight, zero-backend ComfyUI extension designed for external App developers. 

Whenever you save a standard workflow in the ComfyUI web interface, this extension silently intercepts the action and automatically generates an API-formatted JSON file (`[filename]_api.json`), saving it perfectly alongside your original file in the official user directory.

### 🌟 Why This Exists?
If you are developing a mobile App, a Telegram bot, or a FastAPI middleware to call ComfyUI remotely, you need the "API Format" workflow JSON. Traditionally, you have to manually click "Save (API Format)" and transfer the file. This extension automates that away. Just hit the native "Save" button, and both the UI JSON and API JSON are saved to the server simultaneously.

### ✨ Features
- **Zero Backend Footprint**: Does not modify ComfyUI's core backend or introduce custom Python routing. It strictly utilizes the official `/api/userdata` endpoints.
- **Multi-user Compatible**: Fully respects ComfyUI's multi-user environment. The `_api.json` is accurately saved into the current authenticated user's workspace.
- **Set and Forget**: Operates completely silently in the background.

### 📦 Installation

Navigate to your ComfyUI `custom_nodes` folder and clone this repository:
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/YOUR_GITHUB_ID/ComfyUI-AutoSaveAPI.git
```
Restart ComfyUI and strictly refresh your browser cache (`Ctrl+F5`).

### 🚀 Usage
1. Open ComfyUI and build your workflow.
2. Ensure you have "Enable Dev mode Options" checked in settings (to allow API format compilation).
3. Click the default **Save** button in the menu.
4. Check your server's `ComfyUI/user/default/workflows/` directory. You will find both `your_workflow.json` and `your_workflow_api.json`.

---

<a name="chinese"></a>
## 中文说明

专为外部 App 开发者和极客打造的 ComfyUI 轻量级自动化插件。

当你在 ComfyUI 原生界面点击“保存”工作流时，本插件会在后台静默工作，自动将当前画布转换为纯净的 API 格式，并以 `[原文件名]_api.json` 的形式，与原文件同步保存在官方的 `workflows` 目录下。

### 🌟 解决的痛点
在开发调用 ComfyUI 算力的移动端 App、微信机器人或第三方中间件时，运行端需要的是 API 格式的工作流。过去，每次修改节点后，你都必须手动点击“导出 API 格式”并手动拷贝文件到服务端。使用本插件后，只需像平时一样点击“保存”，双格式文件即刻同步落盘，外部应用可随时直接拉取调用。

### ✨ 核心特性
- **纯前端零侵入**：没有手写任何 Python 读写后端的脏代码，不破坏官方逻辑，100% 兼容未来的 ComfyUI 版本更新。
- **多租户/多用户完美兼容**：完全利用官方 `/api/userdata` 接口，自动识别当前登录用户，API 文件精准存入专属工作区。
- **无感运行**：不增加任何多余按钮，原生保存动作即刻触发。

### 📦 安装方法

进入 ComfyUI 的 `custom_nodes` 目录，克隆本仓库：
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/YOUR_GITHUB_ID/ComfyUI-AutoSaveAPI.git
```
重启 ComfyUI，并在浏览器中按下 `Ctrl + F5` 强制刷新缓存。

### 🚀 使用说明
1. 在 ComfyUI 中正常连接你的节点。
2. 确保设置面板（齿轮图标）中已勾选开启开发者模式（Enable Dev mode Options）。
3. 点击原生的 **Save** 保存按钮。
4. 检查服务端的 `ComfyUI/user/default/workflows/` 目录，你会发现 `你的工作流.json` 和 `你的工作流_api.json` 已经整齐地保存在了一起。

---
**License**
MIT License
