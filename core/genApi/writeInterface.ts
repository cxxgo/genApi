import path from 'node:path'
import { IInterface } from '../types'
import { writeAndPrettify, typeIsInterface, isExistInterface, sortByName, handleEnum} from '../utils'

/** interface 写入 */
export function writeInterface(interfaces: IInterface[], config: { outputDir: string }) {
  const { outputDir } = config
  let str = ''
  sortByName(interfaces, 'name').forEach((item) => {
    str += `export interface ${item.name} {\n`
    if (item?.properties && item.properties?.length) {
      sortByName(item.properties, 'name').forEach((it) => {
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

