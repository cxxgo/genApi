import type { IApiGroup } from '../types'
import path from 'node:path'
import { handleWeirdName, writeAndPrettify } from '../utils'

/** 在 mock/index.js 中写入内容 */
export function writeMockIndex(
  groupApiList: { outputDir: string, stationFlag: string, apiGroup: IApiGroup[] }[],
  config: { mockRootPath: string },
) {
  const { mockRootPath } = config
  const firstLine = 'import Mock from \'better-mock\'\n'
  const extraStr = `
Mock.setup({
  timeout: "200-500"
})\n
  `
  let imortStr = ''
  let mockStr = ''
  groupApiList.forEach((item) => {
    if (item.outputDir && item.apiGroup && item.apiGroup.length) {
      item.apiGroup.forEach((obj) => {
        const matchPath = handleWeirdName(item.stationFlag + obj.fileName) // 如： station0 + user
        imortStr += `import * as ${matchPath} from './${item.stationFlag}/${obj.fileName}.js'\n`
        ;(obj.apis || []).forEach((api) => {
          // 将 /thk/api/v1/config/continue-education/${id}  处理成  /\/thk\/api\/v1\/config\/continue-education\/.*/
          const _url = api.url.replace(/\//g, '\\/').replace(/\$\{.*?\}/g, '.*')
          mockStr += `Mock.mock(/${_url}/, '${api.method}', ${matchPath}.${api.name})\n`
        })
      })
    }
  })

  const finaStr = `${firstLine}${extraStr}${imortStr}${mockStr}`
  const targetFile = path.join(mockRootPath, 'index.js')
  writeAndPrettify(targetFile, finaStr)
}
