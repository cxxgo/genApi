import path from 'node:path'
import { getFieldMockStr } from './mockUtils'
import { IInterface } from '../types'
import { writeAndPrettify, isExistInterface, sortByName} from '../utils'

let allInterfaces: IInterface[] = []

/** interface 写入 */
export function writeMockInterface(interfaces: IInterface[], { outputDir, cmd = false, fieldRules }) {
  allInterfaces = interfaces
  let str = cmd ? '' : 'import Mock from "better-mock"\n'
  sortByName(interfaces, 'name').forEach((item) => {
    const hasSame = childTypeSameWithParent(item)
    if (hasSame) {
      let mockStrWithoutSameField = ''
      if (item?.properties && item.properties?.length) {
        const allProperties = item.properties.filter((it) => it.type !== item.name) //  过滤掉和父级 interface name 相同的属性
        allProperties.forEach((it) => {
          mockStrWithoutSameField += getInterfaceMock(it, fieldRules, item.name)
        })
      }
      const returnWithoutSameField = `${mockStrWithoutSameField ? '{\n' + mockStrWithoutSameField + '\n}' : ''}`
      // 限制执行次数 2 次，避免函数循环调用导致栈溢出
      str += `${cmd ? '' : 'export'} function ${item.name}(n=2) {`
      str += `
          if (n <= 0) {return ${returnWithoutSameField}}
          n = n-1
        `
    } else {
      str += `${cmd ? '' : 'export'}  function ${item.name}() {`
    }
    if (item?.properties && item.properties?.length) {
      let mockRes = ''
      sortByName(item.properties, 'name').forEach((it) => {
        mockRes += getInterfaceMock(it, fieldRules, item.name)
      })
      str += `\nreturn ${mockRes ? '{\n' + mockRes + '\n}' : ''}`
    }
    str += '\n}\n'
  })

  if (cmd) {
    const exportStr = interfaces.reduce((pre, cur, index) => {
      const last = index === interfaces.length - 1 ? '}' : ''
      pre = `${pre}${cur.name},\n${last}`
      return pre
    }, 'module.exports = {')

    str += exportStr
  }
  const targetFile = path.join(outputDir, cmd ? `_interfaces.cmd.js` : `_interfaces.js`)
  writeAndPrettify(targetFile, str)
}

/** 生成 mock
 @param model 格式如下
   * {
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object", 目前看到的都是 'object'
   *    properties:[{
   *      name:"",
   *      isArray:false,  // 是否是数组
   *      type:"",        // 类型，如 string, number, boolean , UserInterface
   *      description:""  // 注释
   *    }]
   *  }
   */
function getInterfaceMock(model: IInterface, fieldRules, parentInterface) {
  const { name, type, isArray, enums } = model

  let _mockStr = ''
  // 如果是简单类型
  let isFn = false
  let _isCustome = false
  if (enums?.length) {
    _mockStr = `/${enums.join('|')}/` // 处理枚举 /A|B|C/,
  } else if (!type) {
    // 处理异常情况，防止出现 'data|1-20': [()] 的情况，正常应该是  'data|1-20': [UserInfo()]
    _mockStr = ''
  } else if (type === 'string' || type === 'number' || type === 'boolean' || type === 'any' || type === 'File') {
    const { mockStr, isCustome } = getFieldMockStr({ name, type, fieldRules })
    _mockStr = mockStr
    _isCustome = isCustome
  } else if (type === 'object') {
    _mockStr = '{}'
  } else {
    //  1. 如下数据，如果当前 type 和 parentInterface 一致（都为JobCategoryConfigResp）
    //  则增加参数 n 用于控制执行次数，避免循环调用导致栈溢出
    /**
      export function JobCategoryConfigResp(n=2) {
        if (n <= 0) return null
        n = n-1
        return {
          'children|1-20': [JobCategoryConfigResp(n)],
          createId: '@guid',
          createName: '@ctitle(5,10)',
        }
     }
     */
    if (!isExistInterface(type, allInterfaces)) {
      _mockStr = '' // interface 不存在，处理成  'children|1-20': [''],
    } else if (type === parentInterface) {
      isFn = true
      _mockStr = `${type}(n)` // 增加参数 n 用于控制执行次数，避免循环调用导致栈溢出
    } else {
      isFn = true
      _mockStr = `${type}()`
    }
  }

  if (isArray) {
    if (isFn || _isCustome) {
      return `\'${name}|1-20\': [${_mockStr}],\n`
    } else {
      return `\'${name}|1-20\': [\'${_mockStr}\'],\n`
    }
  } else {
    if (isFn || _isCustome || enums?.length) {
      return `${name}: ${_mockStr},\n`
    } else {
      return `${name}: \'${_mockStr}\',\n`
    }
  }
}

/** 判断是否存在类型和当前 interface 相同的子属性
 *  如下数据，children 的类型为 XXX , 当前 interface 也是 XXX， 则函数返回 true
 *  interface XXX{
 *    children:XXX[],
 *    created:string
 *  }
 */
function childTypeSameWithParent(theInterface: IInterface) {
  const curName = theInterface.name
  return (theInterface.properties || []).find((item) => item.type === curName)
}
