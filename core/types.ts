export interface UserConfig {
  /** 接口列表 */
  apiList: IApiStation[]
  /** 文件头部引入内容 */
  httpTpl?: string
  /** api 结构 */
  apiBody?: (data: IApibodyParam) => string
  /** 接口所属文件名称 */
  fileName?: string | ((data: FileNameFnParam) => string)
  /** 接口名称 */
  apiName?: (data: ApiNameFnParam) => string
  /** 接口路径重写（如：加前缀 /abc/def => /prefix/abc/def） */
  pathRewrite?: (data: { url: string }) => string
  /** 文件后缀, 可选值：ts 或 js， 默认 ts */
  fileExt?: 'ts' | 'js' | '.ts' | '.js'
  /** 接口出入参类型映射 */
  typeMap?: Record<string, string>
  mock?: IMock
  /** 自定义格式化函数 */
  formatter?: (data: { filePath: string }) => string
}
export interface IApiStation {
  /** 接口文档 json 数据地址(可以是服务端地址也可以是 swagger json 本地文件路径) */
  swaggerUrl: string
  /** 生成结果的输出目录 */
  outputDir: string
  /** 是否生成(默认true, 设为false，则不生成 ) */
  gen?: boolean
  /**
   * 无需生成的接口, 支持正则匹配和字符串完全匹配
   * 注1. 匹配的是原始的 url，而非通过 pathRewrite 函数重写后的 url
   * 注2. 不判断 method，即：如果有两个接口路径相同 method 不同，两个接口都不会生成
   */
  exclude?: RegExp | string | (RegExp | string)[]
  /**
   * 只需生成的接口，支持正则匹配和字符串完全匹配
   * 注1：同 exclude 一样，只匹配原始路径，不判断 method
   * 注2：优先级比 exclude 低，即：如果一个接口同时被 exclude 和 include 规则匹配，这个接口将不会生成
   */
  include?: RegExp | string | (RegExp | string)[]
  /** 文件头部引入内容 */
  httpTpl?: string
  /** 接口所属文件名称 */
  fileName?: string | ((data: FileNameFnParam) => string)
  /** 接口名称 */
  apiName?: (data: ApiNameFnParam) => string
  /** 接口路径重写（如：加前缀 /abc/def => /prefix/abc/def） */
  pathRewrite?: (data: { url: string }) => string
  /** api 结构 */
  apiBody?: (data: IApibodyParam) => string
  /** 文件后缀, 可选值：ts 或 js， 默认 ts */
  fileExt?: 'ts' | 'js'
  /** 接口参数类型映射 */
  typeMap?: Record<string, string>
}

export interface IApibodyParam {
  /** 接口名称，如 getUserList */
  name: string
  /** 接口路径 */
  url: string
  /** 接口原始路径（即重写前路径） */
  originUrl: string
  /** 请求方法（小写，如 get、post） */
  method: string
  /** 后端注释 */
  summary: string
  /** 接口输出数据模型 */
  outputInterface: string
  /** 接口出参类型 */
  outputType: 'object' | 'array'
  /** 接口所有入参 */
  parameters: IParams[]
  /** 由 parameters 处理得到，值如 'data: { id: string }' ，可能为空字符串 */
  pstr1: string
  /** 由 parameters 处理得到，值如 'data'，可能为空字符串 */
  pstr2: string
  /** 由 parameters 处理得到，当路径中存在参数时，会有值，值如 'const { id } = data' */
  pstr3: string
}

export interface IMock {
  /** 本地启动的 mock 服务端口号 */
  port?: number
  /** 接口路径重写 */
  rewrite?: (data: { url: string }) => string
  /** 自定义 mock 生成规则 */
  fieldRules?: {
    [key: string]: any
  }
}

export interface IParams {
  /** 参数名 */
  name: string
  /** 参数注释 */
  description?: string // 注释
  in: 'header' | 'body' | 'query' | 'path' // 可能值： body ,header, query, path...
  /** 是否是数组 */
  isArray: boolean
  /** 入参类型，可能值：string, number, boolean, any, void, File, UserInterface... */
  type: string
  enums?: Array<string | number>
}

export interface IApiModel {
  /** 接口路径 */
  url: string
  /** 接口原始路径（即重写前路径） */
  originUrl: string
  /** 请求方法 */
  method: string
  /** 接口名称, 如 getUserList */
  name: string
  /** 接口注释 */
  summary: string
  /** 接口入参 */
  parameters: IParams[]
  /** 接口出参 interface */
  outputInterface: string
  /** 接口出参类型 */
  outputType: 'object' | 'array'
  /** 接口所属文件名称（不包含后缀，如 user） */
  fileName: string
  /** 文件后缀（ts 或 js, 不包含点号） */
  fileExt: 'ts' | 'js'
}

export interface IInterface {
  /** 原始 key 处理后结果，如： ApiResponse */
  name: string
  /** 是否是数组 */
  isArray?: boolean
  /** 如 string, number, boolean , UserInterface */
  type?: string
  /** 注释 */
  description?: string
  properties?: IInterface[]
  /** 枚举值 */
  enums?: Array<string | number>
}

export interface IParsered extends IApiStation {
  /** swagger 站点标记，由 outputDir 路径拼接而成 */
  stationFlag: string
  apis: IApiModel[]
  interfaces: IInterface[]
}

export interface IApiGroup {
  /** api 所属文件名称， 如 user */
  fileName: string
  /** 后缀（ts 或 js, 不包含点号） */
  fileExt: 'ts' | 'js'
  /** 该文件名内所有的接口 */
  apis: IApiModel[]
}

export interface ApiNameFnParam {
  /** 接口路径 */
  url: string
  /** 接口原始路径（即重写前路径） */
  originUrl: string
  /** 请求方法（小写） */
  method: string
  /** 接口名称默认值 */
  defaultApiName: string
}

export interface FileNameFnParam {
  /** 接口路径 */
  url: string
  /** 接口原始路径（即重写前路径） */
  originUrl: string
}
