//  OpenAPI 3.0 (Swagger 3) 完整类型定义

/**
 * 基础类型  https://spec.openapis.org/oas/v3.0.0#schema
 */
export interface OpenApi {
  openapi: string // 必须，版本号如 "3.0.0"
  info: Info
  servers?: Server[]
  paths: Paths
  components?: Components
  security?: SecurityRequirement[]
  tags?: Tag[]
  externalDocs?: ExternalDocumentation
}

/**
 * API 元信息  https://spec.openapis.org/oas/v3.0.0#info-object
 */
export interface Info {
  title: string
  description?: string
  termsOfService?: string
  contact?: Contact
  license?: License
  version: string
}

/**
 * 联系人信息
 */
export interface Contact {
  name?: string
  url?: string
  email?: string
}

/**
 * 许可证信息
 */
export interface License {
  name: string
  url?: string
}

/**
 * 服务器配置 https://spec.openapis.org/oas/v3.0.0#server-object
 */
export interface Server {
  url: string
  description?: string
  variables?: Record<string, ServerVariable>
}

/**
 * 服务器变量
 */
export interface ServerVariable {
  enum?: string[]
  default: string
  description?: string
}

/**
 * 路径集合
 */
export interface Paths {
  [path: string]: PathItem
}

/**
 * 路径项  https://spec.openapis.org/oas/v3.0.0#path-item-object
 */
export interface PathItem {
  $ref?: string
  summary?: string
  description?: string
  get?: Operation
  put?: Operation
  post?: Operation
  delete?: Operation
  options?: Operation
  head?: Operation
  patch?: Operation
  trace?: Operation
  servers?: Server[]
  parameters?: (Parameter | Reference)[]
}

/**
 * 操作(HTTP方法)
 */
export interface Operation {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: ExternalDocumentation
  operationId?: string
  parameters?: (Parameter | Reference)[]
  requestBody?: RequestBody | Reference
  responses: Responses
  callbacks?: Record<string, Callback | Reference>
  deprecated?: boolean
  security?: SecurityRequirement[]
  servers?: Server[]
}

/**
 * 外部文档
 */
export interface ExternalDocumentation {
  description?: string
  url: string
}

/**
 * 参数定义  https://spec.openapis.org/oas/v3.0.0#parameter-object
 */
export interface Parameter {
  name: string
  in: 'query' | 'header' | 'path' | 'cookie'
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  style?: string
  explode?: boolean
  allowReserved?: boolean
  schema?: Schema | Reference
  example?: any
  examples?: Record<string, Example | Reference>
  content?: Record<string, MediaType>
}

/**
 * 请求体
 */
export interface RequestBody {
  description?: string
  content: Record<string, MediaType>
  required?: boolean
}

/**
 * 媒体类型
 */
export interface MediaType {
  schema?: Schema | Reference
  example?: any
  examples?: Record<string, Example | Reference>
  encoding?: Record<string, Encoding>
}

/**
 * 编码信息
 */
export interface Encoding {
  contentType?: string
  headers?: Record<string, Header | Reference>
  style?: string
  explode?: boolean
  allowReserved?: boolean
}

/**
 * 响应集合
 */
export interface Responses {
  [statusCode: string]: Response | Reference
}

/**
 * 响应定义
 */
export interface Response {
  description: string
  headers?: Record<string, Header | Reference>
  content?: Record<string, MediaType>
  links?: Record<string, Link | Reference>
}

/**
 * 回调定义
 */
export interface Callback {
  [expression: string]: PathItem
}

/**
 * 示例对象
 */
export interface Example {
  summary?: string
  description?: string
  value?: any
  externalValue?: string
}

/**
 * 链接对象
 */
export interface Link {
  operationRef?: string
  operationId?: string
  parameters?: Record<string, any>
  requestBody?: any
  description?: string
  server?: Server
}

/**
 * 头部定义
 */
export interface Header {
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  style?: string
  explode?: boolean
  allowReserved?: boolean
  schema?: Schema | Reference
  example?: any
  examples?: Record<string, Example | Reference>
  content?: Record<string, MediaType>
}

/**
 * 标签定义
 */
export interface Tag {
  name: string
  description?: string
  externalDocs?: ExternalDocumentation
}

/**
 * 引用对象
 */
export interface Reference {
  $ref: string
}

/**
 * 安全需求
 */
export interface SecurityRequirement {
  [name: string]: string[]
}

/**
 * 组件集合 https://spec.openapis.org/oas/v3.0.0#components-object
 */
export interface Components {
  schemas?: Record<string, Schema | Reference>
  responses?: Record<string, Response | Reference>
  parameters?: Record<string, Parameter | Reference>
  examples?: Record<string, Example | Reference>
  requestBodies?: Record<string, RequestBody | Reference>
  headers?: Record<string, Header | Reference>
  securitySchemes?: Record<string, SecurityScheme | Reference>
  links?: Record<string, Link | Reference>
  callbacks?: Record<string, Callback | Reference>
}

/**
 * 安全方案
 */
export interface SecurityScheme {
  type: 'apiKey' | 'http' | 'oauth2' | 'openIdConnect'
  description?: string
  name?: string
  in?: 'query' | 'header' | 'cookie'
  scheme?: string
  bearerFormat?: string
  flows?: OAuthFlows
  openIdConnectUrl?: string
}

/**
 * OAuth 流程
 */
export interface OAuthFlows {
  implicit?: OAuthFlow
  password?: OAuthFlow
  clientCredentials?: OAuthFlow
  authorizationCode?: OAuthFlow
}

/**
 * OAuth 流程详情
 */
export interface OAuthFlow {
  authorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  scopes: Record<string, string>
}

/**
 * 数据模型  https://spec.openapis.org/oas/v3.0.0#schema-object
 */
export interface Schema {
  title?: string
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  required?: string[]
  enum?: any[]
  type?: 'array' | 'boolean' | 'integer' | 'number' | 'object' | 'string'
  allOf?: (Schema | Reference)[]
  oneOf?: (Schema | Reference)[]
  anyOf?: (Schema | Reference)[]
  not?: Schema | Reference
  items?: Schema | Reference
  properties?: Record<string, Schema | Reference>
  additionalProperties?: boolean | Schema | Reference
  description?: string
  format?: string
  default?: any
  nullable?: boolean
  discriminator?: Discriminator
  readOnly?: boolean
  writeOnly?: boolean
  example?: any
  externalDocs?: ExternalDocumentation
  deprecated?: boolean
  xml?: XML
}

/**
 * 鉴别器
 */
export interface Discriminator {
  propertyName: string
  mapping?: Record<string, string>
}

/**
 * XML 定义
 */
export interface XML {
  name?: string
  namespace?: string
  prefix?: string
  attribute?: boolean
  wrapped?: boolean
}

/**
 * 实用类型：HTTP 方法 https://spec.openapis.org/oas/v3.0.0#path-item-object
 */
export type HttpMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'

/**
 * 实用类型：参数位置
 */
export type ParameterLocation = 'query' | 'header' | 'path' | 'cookie'

/**
 * 实用类型：安全方案类型
 */
export type SecuritySchemeType = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect'
