const docUrl = 'https://www.npmjs.com/package/@cxxgo/genapi'

export const apiConfigTpl_ts = `
// 更多配置: ${docUrl}
import { type UserConfig } from '@cxxgo/genapi';\n
const config: UserConfig =  ${getCommonTpl(false)}\n
export default config;
`

export const apiConfigTpl_js = `
// 更多配置: ${docUrl}\n
module.exports = ${getCommonTpl(true)}
`

/**
 * 生成 genapi 配置文件模板
 * @param needComment 是否需要注释
 */
function getCommonTpl(needComment = false) {
  return `
    {
      apiList: [
        {
          swaggerUrl: '', ${needComment ? '// swagger json 的 url 或 本地swagger.json路径' : ''}
          outputDir: '/src/api', ${needComment ? '// 输出到哪个目录中' : ''}
        },
      ],
      httpTpl: "import request from './request/index'", ${needComment ? '// 文件头部引入内容' : ''}
      apiBody: ({ url, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {
        const quotation = pstr3 ? '\`' : "'"; // 引号类型
        return \`
        /** \${summary || '无注释'} */
        export function \${name}  (\${pstr1}) :Promise<\${outputInterface || undefined}>{
          \${pstr3 ? pstr3 : ''}
          return Http.\${method}(\${quotation}\${url}\${quotation}, \${pstr2})
        }\`
      },
      mock:{
        fieldRules:{
          code: 200,
          current: 1,
          size: 20,
          total: '@integer(1, 50)',
        }
      }
    }
`
}
