import path from 'node:path'
import { IInterface } from '../types'
import { writeAndPrettify, typeIsInterface, isExistInterface } from '../utils'

/** interface 写入 */
export function writeInterface(interfaces: IInterface[], config: { outputDir: string }) {
  const { outputDir } = config
  let str = ''
  const interfacesSorted = interfaces.sort((a, b) => a.name.localeCompare(b.name))
  interfacesSorted.forEach((item) => {
    str += `export interface ${item.name} {\n`
    if (item?.properties && item.properties?.length) {

      const propertiesSorted =  item.properties.sort((a, b) => a.name.localeCompare(b.name))
      propertiesSorted.forEach((it) => {
        const description = it.description ? `/** ${it.description} */` : ''
        let theType = ''
        if (it.enums?.length) {
          theType = handleEnum(it.enums)
        } else {
          if (typeIsInterface(it.type)) {
            // 没找到则处理成 any, 防止后端接口写了错误的 interface
            theType = isExistInterface(it.type, interfaces) ? it.type : 'any'
          } else {
            theType = it.type || 'any'
          }
        }

        str += description ? `${description}\n` : '' // 注释
        str += `${it.name}?: ${theType}${it.isArray ? '[]' : ''}\n` //  userName?: boolean
      })
    }
    str += '\n}\n'
  })
  const targetFile = path.join(outputDir, `_interfaces.ts`)
  writeAndPrettify(targetFile, str)
}

/** 处理类型，如果有枚举，则处理成 a|b|c 的格式，否则直接返回类型，如 string, number */
function handleEnum(enums: string[]) {
  // 将 [1,2,3] 处理成 1 | 2 | 3 ， 或将 ['1','2','3'] 处理成 '1'|'2'|'3'
  return enums.reduce((pre, cur, index) => {
    const _cur = typeof cur === 'string' ? `'${cur}'` : cur
    return index > 0 ? `${pre} | ${_cur}` : _cur
  }, '')
}
