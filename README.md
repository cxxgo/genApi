# api 自动生成工具

注：目前只支持解析 swagger 2.0 接口文档。

## 安装

```shell
npm install @cxxgo/genapi -D
```

## 使用

### 1. 生成配置文件

生成 genapi 配置文件:

```shell
genapi init
```

可选参数:

- `--force`： 是否覆盖本地配置文件。

  配置文件支持 `js` 和 `ts` 格式，如果本地已经存在`genapi.config.ts` 或 `genapi.config.js` 配置文件，执行 `genapi init --force` 将会生成新的配置文件覆盖本地配置文件。

### 2. 生成 api

根据配置文件自动生成 api:

```shell
genapi now
```

可选参数:

- `--config <configPath>`： 自定义配置文件路径。

  执行 `genapi now` 时，默认将当前目录下的 `genapi.config.ts` 或 `genapi.config.js` 当做配置文件。

  当然也可以手动指定，如：`genapi now -c ./xxx/myApiConf.ts`， 指定配置文件路径为 `./xxx/myApiConf.ts`。

- `--no-mock`： 是否不生成 mock 数据。

  执行 `genapi now` 除了会生成 api 数据外，还会默认在 node_modules 目录下生成 mock 数据。
  `genapi now --no-mock` 则不生成 mock 数据，可以一定程度上减少命令执行时间 。

### 3. 启动 mock 服务

启动本地 mock 服务，默认端口号 8090:

```shell
genapi mock-server
```

## 配置文件说明

### 1. `apiList` 配置选项：

| 配置项      | 是否必传 | 类型                    | 默认值 | 说明                                                                       |
| ----------- | -------- | ----------------------- | ------ | -------------------------------------------------------------------------- |
| swaggerUrl  | Y        | String                  | /      | 接口文档 json 数据地址(可以是服务端地址也可以是 swagger json 本地文件路径) |
| outputDir   | Y        | String                  | /      | 生成结果的输出目录                                                         |
| apiBody     | Y        | Function                | /      | 自定义 api 结构                                                            |
| pathRewrite | N        | Function                | /      | 接口路径重写                                                               |
| apiName     | N        | Function                | /      | 自定义接口名称生成规则                                                     |
| fileName    | N        | String 或 Function      | /      | 自定义接口所属文件名称规则                                                 |
| gen         | N        | boolean                 | true   | 是否生成                                                                   |
| exclude     | N        | String 或 Regexp 或数组 | /      | 无需生成的接口                                                             |
| include     | N        | String 或 Regexp 或数组 | /      | 只需生成的接口（优先级比 exclude 低）                                      |
| httpTpl     | N        | String                  | /      | 文件头部引入内容（通常用于引入封装的请求方法）                             |
| fileExt     | N        | String                  | ts     | 文件类型（可选值 ts 或 js）                                                |
| typeMap     | N        | Record<string, string>  | /      | 接口出入参类型映射                                                         |

其中:

- #### `apiBody` 自定义 api 结构

  配置示例：

  ```ts
  {
    apiList: [
      {
        /* 自定义 api 结构
         * @param url 接口路径（pathRewrite 后的路径）
         * @param originUrl 接口原始路径（接口文档上的路径）
         * @param method 请求方法（小写，如 get、post）
         * @param summary 服务端写的接口注释，可能为空字符串
         * @param name 接口名称（如果配了fileName 函数，那将是通过 fileName 函数处理后得到的名称，否则是工具使用默认规则生成的名称）
         * @param outputInterface 接口输出数据模型
         * @param parameters 接口所有入参
         * @param pstr1 由 parameters 处理得到，值如 data: { id: string }，可能为空字符串
         * @param pstr2 由 parameters 处理得到，值如 data，可能为空字符串
         * @param pstr3 由 parameters 处理得到，当路径中存在参数时，会有值，值如 const { id } = data
         **/
        apiBody: ({ url, originUrl, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {
          const quotation = pstr3 ? '`' : "'" // 引号类型
          return `
            /** ${summary || '无注释'} */
            export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
              ${pstr3 ? pstr3 : ''}
              return Http.${method}(${quotation}${url}${quotation}, ${pstr2})
            }`
        },
      },
    ]
  }
  ```

  以上配置将会生成如下 api 结构:

  ```ts
  /** 获取用户信息 */
  // 注：'data: { id: string }' 这一串即 apiBody 中的 pstr1
  export function userInfo(data: { id: string }): Promise<ExampleModel1> {
    const { id } = data // 注： 'const { id } = data' 这一串即 apiBody 中的 pstr3
    return request.get(`/api/user/info?${id}`)
  }

  /** 用户修改密码 */
  export function userChangePswd(data: ExampleModel2): Promise<ExampleModel3> {
    return request.post('/api/user/changePswd', data) // 注：'data' 即 apiBody 中的 pstr2
  }
  ```

- #### `pathRewrite` 接口路径重写

  这个配置项用于接口路径重写。比较常见的使用场景是：接口文档上的路径（后面都称为‘原始路径’或‘接口原始路径’）是 `/api/user/list`, 但是实际访问路径需要添加前缀，如 `/prefix/api/user/list`。

  配置示例：

  ```ts
  {
    apiList: [
      {
        pathRewrite: ({ url }) => {
          return `/prefix${url}`
        },
      },
    ]
  }
  ```

- #### `apiName` 自定义接口名称生成规则

  默认的接口名称生成规则为: 去除原始路径开头可能存在的 `/api`后，将剩余的单词拼接起来。 如：
  接口 `/api/user/info/{id}` 的默认名称为 `userInfoId`；
  接口 `/api/user/changePswd` 的默认名称为 `userChangePswd`；
  接口 `/app-event-center/manageRuleConfig/list` 的默认名称为 `appeventcenterManageRuleConfigList`；

  特殊情况 1： 如果存在路径相同但方法不同的两个接口，如 : `get: /api/user/info` 和 `post: /api/user/info`，这两个接口的名称将分别被处理为 `userInfoGet` 和 `userInfoPost`。

  特殊情况 2： 如果按照默认规则处理后的接口名称正好是 js 关键字，如`delete`， 则会在后面拼上 `Fn`，即默认处理后的接口名称为 `deleteFn`

  使用场景，有时候接口路径上统一带了很长的前缀，导致默认的接口名称特别长（如上面的 `appeventcenterManageRuleConfigList`），这种情况下就可以使用`apiName`自定义接口名称，使之更为美观些。

  配置示例：

  ```ts
  {
    apiList: [
      {
        /**
         * 自定义接口名称生成规则
         * @param url 接口路径（pathRewrite 后的路径）
         * @param originUrl 接口原始路径（接口文档上的路径）
         * @param method 请求方法（小写，如 get、post）
         * @param defaultApiName 默认的接口名称
         **/
        apiName: ({ url, originUrl, method, defaultApiName }) => {
          // appeventcenterManageRuleConfigList 处理为 manageRuleConfigList
          return defaultApiName.replace('appeventcenter', '').replace(/^\S/, (s) => s.toLowerCase())
        },
      },
    ]
  }
  ```

- #### `fileName` 自定义接口所属文件名称

  默认的接口所属文件处理规则为: 取去除原始路径开头可能存在的 `/api`后的第一个单词。 如：
  接口 `/api/user/info/{id} `和 `/api/user/changePswd` 会放到 `user.ts` 文件里；
  如果接口路径上有统一的前缀，如 `/prefix/api/dept/list`，那么所有的接口都将被放到 `prefix.ts` 文件里；

  你可以通过 `fileName` 自定义这个规则，配置示例：

  ```ts
  {
    apiList: [
      {
        /**
         * 自定义接口所属文件名称
         * @param url 接口路径（pathRewrite 后的路径）
         * @param originUrl 接口原始路径（接口文档上的路径）
         **/
        fileName: ({ url, originUrl }) => {
          // 如：
          return 'myApi' // 将所有的接口都放到 myApi.ts 文件里
          // 再如：
          // return originUrl.replace(/^\/prefix\/api\//, '').split('/')[0] //  '/prefix/api/dept/list' 放到 dept.ts 里
        },
      },
    ]
  }
  ```

- #### `typeMap` 自定义服务端数据类型和前端数据类型的映射关系

  默认的映射关系为：

  | 服务端数据类型 | 前端 ts 类型 |
  | -------------- | ------------ |
  | integer        | number       |
  | integer(int32) | number       |
  | integer(int64) | string       |
  | float          | number       |
  | number         | number       |
  | double         | string       |
  | long           | string       |
  | string         | string       |
  | boolean        | boolean      |
  | date           | string       |
  | date-time      | string       |
  | uri            | string       |
  | url            | string       |
  | file           | File         |
  | object         | any          |

  配置示例：

  ```ts
  {
    apiList: [
      typeMap: {
        int64: 'number',  // 服务端的 int64 类型数据将被定义成 number 类型
      },
    ]
  }
  ```

### 2. `mock` 配置选项：

| 配置项     | 是否必传 | 类型                   | 默认值 | 说明                                                                 |
| ---------- | -------- | ---------------------- | ------ | -------------------------------------------------------------------- |
| port       | N        | Number                 | 8090   | 本地启动的 mock 服务端口号                                           |
| rewrite    | N        | Function               | /      | 接口路径重写                                                         |
| fieldRules | N        | Record<string, string> | /      | 自定义 mock 生成规则，参考 [mockjs](http://mockjs.com/examples.html) |

## 示例

### 1. 简单示例

```ts
import { type UserConfig } from '@cxxgo/genapi'

const config: UserConfig = {
  apiList: [
    {
      swaggerUrl: '', // 接口文档 json 地址
      outputDir: '/src/api', // 生成结果的输出路径
    },
  ],
  httpTpl: "import request from './request/index'", // 文件头部引入的内容，通常用于引入封装的请求方法
  // 自定义 api 结构
  apiBody: ({ url, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {
    const quotation = pstr3 ? '`' : "'" // 引号类型
    return `
        /** ${summary || '无注释'} */
        export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
          ${pstr3 ? pstr3 : ''}
          return Http.${method}(${quotation}${url}${quotation}, ${pstr2})
        }`
  },
}

export default config
```

基于以上配置，假如现在有以下三个接口：

```
get:   /api/user/info/{id}
post:  /api/user/changePswd
get:   /api/dept/list
```

将生成以下格式的接口文件和数据：

```
|-src
  |-api
     _interfaces.ts  // 自动生成的类型文件，名称固定为 _interfaces
     user.ts  // 接口文件
     dept.ts // 接口文件
```

src/api/user.ts 内容：

```ts
import request from './request/index'
import { ExampleModel1, ExampleModel2, ExampleModel3 } from './_interfaces.ts'

/** 获取用户信息 */
// 注：'data: { id: string }' 这一串即 apiBody 中的 pstr1
export function userInfo(data: { id: string }): Promise<ExampleModel1> {
  const { id } = data // 注： 'const { id } = data' 这一串即 apiBody 中的 pstr3
  return request.get(`/api/user/info?${id}`)
}

/** 用户修改密码 */
export function userChangePswd(data: ExampleModel2): Promise<ExampleModel3> {
  return request.post('/api/user/changePswd', data) // 注：'data' 即 apiBody 中的 pstr2
}
```

src/api/dept.ts 内容：

```ts
import request from './request/index'
import { ExampleModel4 } from './_interfaces.ts'

/** 获取部门列表 */
export function deptList(): Promise<ExampleModel4> {
  return request.get('/api/dept/list')
}
```

### 2. 更多配置示例

```ts
import { type UserConfig } from '@cxxgo/genapi'
const config: UserConfig = {
  apiList: [
    {
      swaggerUrl: 'http://xxx1', /
      outputDir: './src/api1',
      gen: true,
      exclude: [/api\/test/, '/api/xxx/xxx'],
    },
    {
      swaggerUrl: 'http://xxx2',
      outputDir: './src/api2',
      gen: true,
      include: [/api\/user/, '/api/dept/list'],
      // 使用不同的头部引入的内容
      httpTpl:"const myRequest:any=()=>{}",
      pathRewrite: () => {}, // 使用不同的 `pathRewrite` 生成规则
      fileName: () => {}, // 使用不同的 `fileName` 生成规则
      apiName: () => {}, // 使用不同的 `apiName` 生成规则
      apiBody: () => {}, // 使用不同的 `apiBody` 生成规则
      typeMap: {
        int64: 'number',
      },
    },
  ],
  httpTpl: 'const request:any=()=>{}',
  pathRewrite: ({ url }) => {},
  fileName: ({ url, originUrl }) => {},
  apiName: ({ url, originUrl ，method,defaultApiName}) => {},
  apiBody: ({ url, originUrl, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {},
  //  mock 相关
  mock: {
    /**
     * mock 路径重写
     * @param url 接口路径（pathRewrite 后的路径）
     */
    rewrite: ({url}) => {
      return `/api/${url}`
    },
    port: 8090,  // mock 服务端口号， 默认 8090
    // 工具本身有内置的 mock 生成规则，当然你也可以使用 fieldRules 进行自定义
    fieldRules: {
      code: 200,   // 完全匹配，值为数字
      size: '20',     // 完全匹配，值为字符串
      created: '@datetime',       // 完全匹配，值为mock字符串， http://mockjs.com/examples.html
      // 完全匹配，值为函数
      total: () => {
        return +this.size * 10 || 100
      },
      '/url/': '@url',   // 正则匹配，值为mock字符串
      loginStatus: 'ONLINE|OFFLINE|',   // loginStatus 的 mock 结果为 'ONLINE' 或 'OFFLINE' 或 ''，若不期望生成空字符串，去除末尾的竖线即可
    },
  },
}
export default config
```

## 使用 mock 服务

**使用方式 1**

执行 `genapi mock-server`, 会启动 `http://locahost:8090` 的本地 mock 服务，直接访问这个地址即可

**使用方式 2**

在项目入口文件中 `import '@cxxgo/genapi/mock/index'`

(基于 [better-mock](https://www.npmjs.com/package/better-mock), XHR 和 fetch 请求均可以拦截)
