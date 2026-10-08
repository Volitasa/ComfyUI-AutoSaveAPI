# ComfyUI-AutoSaveAPI

[English](#english) | [中文说明](#chinese)

<a name="english"></a>
## English

A lightweight ComfyUI extension that automatically generates and saves an API-formatted JSON file (`[filename]_api.json`) alongside the standard UI workflow whenever you save your work.

### Why This Exists
External applications (such as mobile apps, bots, or custom backend services) require API-formatted workflows to interact with ComfyUI. Typically, users must manually export this file every time a node parameter is updated. This extension automates the process by hooking into the native "Save" action, ensuring both UI and API JSON files are saved to the server simultaneously and kept in sync.

### Features
- **Frontend-Only Implementation**: Intercepts the save request on the browser side without modifying the ComfyUI backend or adding custom Python routes, ensuring good compatibility with future updates.
- **Native Multi-User Support**: Relies on the official `/api/userdata` endpoints. It respects ComfyUI's native multi-user environment and automatically saves the `_api.json` to the authenticated user's correct workspace.
- **Seamless Integration**: Operates in the background with no additional UI buttons or manual steps required.

### Installation

Navigate to your ComfyUI `custom_nodes` folder and clone this repository:
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/Volitasa/ComfyUI-AutoSaveAPI.git
```
Restart ComfyUI and clear your browser cache (`Ctrl+F5` or `Cmd+Shift+R`).

### Usage
1. Open ComfyUI and build your workflow.
2. Ensure you have **"Enable Dev mode Options"** checked in settings (required for API format generation).
3. Click the default **Save** button in the menu.
4. Check your server's `ComfyUI/user/default/workflows/` directory. You will find both `your_workflow.json` and `your_workflow_api.json` ready for external API calls.

---

<a name="chinese"></a>
## 中文说明

一个轻量级的 ComfyUI 插件。在 Web 界面保存标准工作流时，自动生成并保存对应的 API 格式 JSON 文件（`[原文件名]_api.json`）。

### 背景与用途
当开发者构建移动端应用、机器人或通过第三方服务远程调用 ComfyUI 时，需要依赖 API 格式的工作流。原生的操作流程要求用户每次修改节点后手动执行“导出 API 格式”并管理文件。本插件通过监听原生的保存动作，实现了常规工作流与 API 工作流的自动同步落盘，省去了手动导出的繁琐步骤。

### 核心特性
- **纯前端实现**：仅在浏览器端拦截保存请求，不修改 ComfyUI 后端逻辑，无需挂载自定义的 Python 路由，代码结构极简，对后续版本更新有较好的兼容性。
- **原生支持多用户环境**：直接复用官方的 `/api/userdata` 接口，能够自动跟随 ComfyUI 本身的权限逻辑，将 API 文件准确存入当前登录用户的工作区。
- **无缝集成**：不增加额外的操作按钮，完全遵循用户原有的保存习惯，后台自动完成格式转换与存盘。

### 安装方法

进入 ComfyUI 的 `custom_nodes` 目录，克隆本仓库：
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/Volitasa/ComfyUI-AutoSaveAPI.git
```
重启 ComfyUI，并在浏览器中强制刷新页面（`Ctrl+F5` 或 `Cmd+Shift+R`）以加载最新的前端脚本。

### 使用说明
1. 在 ComfyUI 中正常搭建工作流。
2. 确保在设置面板（齿轮图标）中已勾选开启开发者模式（**Enable Dev mode Options**），这是生成 API 格式的前提。
3. 点击菜单中原生的 **Save** 保存按钮。
4. 检查服务端的 `ComfyUI/user/default/workflows/` 目录，相应的 `工作流.json` 和 `工作流_api.json` 已同步生成，可直接供外部程序读取和调用。

---
**License**
MIT License
