import type { IMock, IParsered } from '../../types'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'

/** ssr 服务 */
export function ssrServer(allApiData: IParsered[], mockConfig: IMock, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })
  const app = createApp(handleData(allApiData, mockConfig))
  // app.mount('#app')
  renderToString(app).then((html) => {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <link ref="icon' href="/static/favicon.ico">
          <title>mock</title>
        </head>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/static/client.js"></script>
        <body>
          <div style="margin:20px">mock服务启动成功！🚀🚀🚀</div>
          <div id="app">${html}</div>
        </body>
      </html>
      `)
  })
}

/**
 * 根据 mock 配置里的 rewrite 方法重写 url
 * 比如原本的 url 为 /xxx/xxx , 重写为 /prefix/xxx/xxx, 那么本地 mock 服务页面展示的将是 /prefix/xxx/xxx
 */
function handleData(allApiData: IParsered[], mockConfig: IMock) {
  return allApiData.map((item) => {
    const apis = (item.apis || []).map((it) => {
      return {
        ...it,
        url:
          mockConfig?.rewrite && typeof mockConfig.rewrite === 'function'
            ? mockConfig.rewrite({ url: it.url })
            : it.url,
      }
    })
    return {
      ...item,
      apis,
    }
  })
}
