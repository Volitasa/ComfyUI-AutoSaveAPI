import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "ComfyUI-AutoSaveAPI", 
    async setup() {
        const originalFetch = window.fetch;
        
        window.fetch = async function(resource, config) {
            const response = await originalFetch.apply(this, arguments);
            
            const url = typeof resource === 'string' ? resource : (resource?.url || '');
            const method = config?.method?.toUpperCase() || 'GET';
            
            // 1. 防御性拦截：如果是我们自己发出的 _api.json 保存请求，直接放行，防止死循环
            if (url.includes('_api.json')) {
                return response;
            }
            
            // 2. 精准匹配官方的保存动作
            if ((method === 'POST' || method === 'PUT') && url.includes('/userdata/workflows')) {
                try {
                    // 3. 使用正则精准替换扩展名，完美保留后方的 ?overwrite=true 等参数
                    const apiUrl = url.replace(/\.json(\?|$)/, '_api.json$1');
                    
                    // 4. 如果连替换都没发生，说明不是标准 json 文件，安全退出
                    if (apiUrl === url) return response; 
                    
                    const apiFormat = await app.graphToPrompt();
                    
                    // 5. 静默调用官方接口写入
                    await originalFetch(apiUrl, {
                        method: method,
                        headers: config?.headers, // 顺手把官方的鉴权 headers 也带上，增加兼容性
                        body: JSON.stringify(apiFormat.output, null, 4)
                    });
                    
                    console.log(`[AutoSaveAPI] 已通过官方接口完美同步 API 文件: ${apiUrl}`);
                    
                } catch (e) {
                    console.error("[AutoSaveAPI] API 同步保存失败:", e);
                }
            }
            return response;
        };
    }
});