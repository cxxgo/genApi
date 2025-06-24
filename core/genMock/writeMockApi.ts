import type { IApiGroup } from '../types'
import path from 'node:path'
import { sortByName, typeIsInterface, writeAndPrettify } from '../utils'
import { getFieldMockStr } from './mockUtils'

/**
 * mock写入
 * @param {*} apiGroup  [{fileName:"user", apis:[]}, {fileName:"role", apis:[]}]
 */
export function writeMockApi(apiGroup: IApiGroup[], { absOutputDir, fieldRules }) {
  apiGroup.forEach((item) => {
    const fileName = item.fileName
    let apiStr = ''
    let fileUsedInterface = [] // 当前文件用到的 interface

    sortByName(item.apis, 'name').forEach((api) => {
      const { name, url, method, summary, parameters, outputInterface, outputType } = api

      const _summary = summary ? `/** ${summary} */\n` : ''
      let _outputInterface = ''
      // 不存在出参
      if (!outputInterface) {
        _outputInterface = '""'
      }
      // 出参是 interface
      else if (typeIsInterface(outputInterface)) {
        fileUsedInterface.push(outputInterface)
        _outputInterface = `${outputInterface}()`
      }
      else {
        const { isCustome, mockStr } = getFieldMockStr({ name, type: outputInterface, fieldRules })
        _outputInterface = isCustome ? mockStr : `\'${mockStr}\'`
      }

      // 出参是数组
      if (outputType === 'array') {
        // export const xxx = () => Mock.mock({ 'theArray|1-10': [ EarthDeptMetaRespeFanHuiMoXing() ] }).theArray
        const curStr = `${_summary}export const ${name} = () => Mock.mock({ 'theArray|1-10': [ ${_outputInterface} ]}).theArray\n\n`
        apiStr += curStr
      }
      // 出参数对象
      else {
        // export const xxx = () => Mock.mock(EarthDeptMetaRespeFanHuiMoXing())
        const curStr = `${_summary}export const ${name} = () => Mock.mock(${_outputInterface})\n\n`
        apiStr += curStr
      }
    })

    // interface 引入
    let importStr = `import Mock from 'better-mock'\n`
    fileUsedInterface = sortByName([...new Set(fileUsedInterface)])
    if (fileUsedInterface.length) {
      importStr += `import {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces'\n`
    }
    const targetFile = path.join(absOutputDir, `${fileName}.js`)
    writeAndPrettify(targetFile, `${importStr}\n${apiStr}\n`)
  })
}
