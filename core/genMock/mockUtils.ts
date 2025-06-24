import path from 'node:path'
import log from 'npmlog'
import { getRunEnv } from '../utils/index'

/** 获取简单数据类型的 mock */
export function getFieldMockStr({ name, type, fieldRules }) {
  const lowerCaseName = name.toLowerCase()
  let mockStr = ''
  let isCustome = false // 使用用户自定义规则
  const customeMockStr = getCustomeMockStr(name, fieldRules)
  // 处理用户自定义的 mock 规则
  if (customeMockStr) {
    mockStr = customeMockStr
    isCustome = true
  }
  // 一些内置的 mock处理规则
  else if (
    lowerCaseName === 'timestamp'
    || lowerCaseName === 'datetime'
    || lowerCaseName === 'time'
    || lowerCaseName === 'date'
    || (type === 'string' && /(.*)Date|(.*)Time/.test(name))
  ) {
    mockStr = '@datetime' // 处理成日期
  }
  else if (/(.*)id$/.test(lowerCaseName)) {
    mockStr = '@guid' // 处理成 id
  }
  else if (type === 'string' && /color/.test(lowerCaseName)) {
    mockStr = '@color'
  }
  else if (type === 'string' && /province/.test(lowerCaseName)) {
    mockStr = '@province'
  }
  else if (type === 'string' && /city/.test(lowerCaseName)) {
    mockStr = '@city'
  }
  else if (type === 'string' && /county/.test(lowerCaseName)) {
    mockStr = '@county'
  }
  else if (type === 'number' && /Ratio|Percent|Rate/.test(name)) {
    mockStr = '@float(0,1)' // 比例
  }
  else if (type === 'number' && /Count|Amount/.test(lowerCaseName)) {
    mockStr = '@integer(10,10000)' // 数量
  }
  else if (type === 'string' && /username/.test(lowerCaseName)) {
    mockStr = '@cname'
  }
  else if (type === 'string' && /department/.test(lowerCaseName)) {
    mockStr = getRandomOneFromArr('财务部|研发部|市场部|运维部|测试部')
  }
  else if (type === 'string' && /url|link|avatar/.test(lowerCaseName)) {
    mockStr = '@image(200x100, @color, @color)' // 生成一张图片地址
  }
  else if (type === 'string' && /phone/.test(lowerCaseName)) {
    mockStr = '@integer(13100000000,18999999999)' // 电话号码
  }
  else if (type === 'string' && /email/.test(lowerCaseName)) {
    mockStr = '@email' // 邮箱
  }
  else if (type === 'string' && /name|title/.test(lowerCaseName)) {
    mockStr = '@ctitle(5,10)'
  }
  // 根据类型简单处理
  else if (type === 'number') {
    mockStr = '@integer(3,1000)'
  }
  else if (type === 'string') {
    mockStr = '@string(5,50)'
  }
  else if (type === 'boolean') {
    mockStr = '@boolean'
  }
  else if (type === 'any' || type === 'File') {
    mockStr = ''
  }
  else {
    console.log('未处理的类型？')
    mockStr = '@string(5,50)'
  }
  return {
    mockStr,
    isCustome,
  }
}

/** 用户自定义的 mock 规则 */
export function getCustomeMockStr(name, fieldRules) {
  // 不存在用户自定义的 mock 规则
  if (!fieldRules || !Object.keys(fieldRules).length) {
    return false
  }

  const findRule = Object.keys(fieldRules).find((rule) => {
    let matched = false
    // 正则 '/url/': 'Mock.mock("@url")'
    if (rule.startsWith('/') && rule.endsWith('/')) {
      const reg = new RegExp(rule.replace(/\//g, ''))
      reg.test(name) && (matched = true)
    }
    // 完全匹配  'userName':'@cname'
    else if (rule === name) {
      matched = true
    }
    return matched
  })
  if (findRule) {
    const res = fieldRules[findRule] || ''
    // 如果是字符串,加个引号,
    if (typeof res === 'string') {
      return `\'${res}\'`
    }
    // 其它情况（数字，正则，函数），直接返回
    return res
  }
}

/**
 * 从竖线分隔的数据中随机取一项  Mock.mock({ 'regexp': /abc|eed|/})
 * @param str 竖线分隔的字符串，如： 'FORWARD|REPLY|'
 * @return 正则： /FORWARD|REPLY|/
 */
function getRandomOneFromArr(str) {
  return `/${str}/`
}

/** 获取 mock 数据输出路径 */
export async function getMockPath() {
  const env = await getRunEnv()
  log.verbose(`env: ${env}`)
  let mockPath = ''
  // link方式在本工具内运行（执行：npm run test）, mock 数据输出到 __test__ 目录下
  if (env === 'linkInTool') {
    mockPath = path.join(process.cwd(), '__test__/mock')
  }
  // link方式在使用者项目内运行，cwd 指向使用者项目目录, mock 数据输出到本项目 /mock 目录下
  else if (env === 'linkInUserProject') {
    const basename = path.basename(process.cwd()) // 运行目录路径最后一个斜杠后的内容
    mockPath = path.join(process.cwd(), `node_modules/@cxxgo/genapi/mock/${basename}`)
  }
  // 非link方式在使用者项目内运行, __dirname 指向使用者项目目录下的 node_modules/@cxxgo/genapi/dist 目录
  else {
    mockPath = path.join(__dirname, '../mock')
  }
  return mockPath
}
