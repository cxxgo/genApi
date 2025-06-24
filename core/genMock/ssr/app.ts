import type { IParsered } from '../../types'
// app.js (在服务器和客户端之间共享)
import { createSSRApp } from 'vue'

export function createApp(allApiData?: IParsered[]) {
  return createSSRApp({
    data: () => ({ allApiData: allApiData || [] }),
    methods: {
      getColor(method: string) {
        switch (method) {
          case 'get':
            return '#50cc61' // 绿
          case 'post':
            return '#2196f3' // 蓝
          case 'delete':
            return '#da5656' // 红
          default:
            return '#9e9e9e' // 灰
        }
      },
    },
    template: `
        <div v-for="(item,index) in allApiData" :key="index">
          <div style="
            margin: 20px;
            word-break: break-all;
            font-size:16px;
            font-weight:bold;
          ">{{item.swaggerUrl}}</div>
          <div v-for="(api,idx) in item.apis" :key="idx" style="
            display: flex;
            align-items: center;
            margin:8px 20px;
            color: #333;
            font-size: 14px;
          ">
            <span 
              style="
                min-width:56px;
                margin-right:8px;
                padding: 3px 0;   
                text-align: center;          
                color: #fff;
                border-radius: 4px;
                user-select: none;
              "
              :style="{'background-color':getColor(api.method)}"
            >{{api.method}}</span>
            <a v-if="api.method==='get'" :href="api.url">{{api.url}}</a>
            <span v-else>
              {{api.url}}
            </span>
            <span style="margin-left:16px; color:#999;">{{api.summary}}</span>
        </div>
      </div>
    `,
  })
}
