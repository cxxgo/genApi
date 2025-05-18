import { IApiModel, IParams, IApiStation, IInterface } from '../../types'
import {
  getUrl,
  getApiName,
  getFileName,
  getFileExt,
  handleWeirdName,
  simpleTypeMap,
  handleDescription,
  typeIsInterface,
  isExistInterface,
} from '../../utils'

import { OpenApi, Schema, Parameter, Reference, Operation, Response, RequestBody } from '../../swaggerType3.x'

/** 生成 api 数据模型 */
export function handleApiModel3(
  docJson: OpenApi,
  allInterfaces: IInterface[],
  {
    exclude,
    include,
    fileName,
    fileExt,
    apiName,
    pathRewrite,
    typeMap,
  }: Pick<IApiStation, 'exclude' | 'include' | 'fileName' | 'fileExt' | 'apiName' | 'pathRewrite' | 'typeMap'>
) {
  const paths = docJson.paths
  const apis: IApiModel[] = []

  for (const key in paths) {
    const _needGen = needGen({ exclude, include, apiPath: key })
    if (_needGen) {
      const objs = paths[key]
      const apiHasSameUrl = Object.keys(objs).length // url 相同，但是方法不同的接口数量
      Object.keys(objs).forEach((method) => {
        if (!['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'].includes(method)) return

        const obj = objs[method] as Operation
        const theUrl = getUrl(key)
        const url = pathRewrite ? pathRewrite({ url: theUrl }) : theUrl // 经用户 pathRewrite() 函数处理过后的 url
        const defaultApiName = getApiName(theUrl, apiHasSameUrl > 1 ? method : '') // 内置生成的接口名称
        // 优先使用用户传入的 apiName 生成规则
        const name = apiName ? apiName({ url, originUrl: theUrl, method, defaultApiName }) : defaultApiName
        const theFileName = getFileName({ url, originUrl: theUrl, userFileName: fileName })
        const theFileExt = getFileExt(fileExt)
        const summary = handleDescription(obj.summary) // 接口注释
        const parameters = getParameters(obj.parameters, allInterfaces, typeMap) // 入参
        const parametersInBody = getParametersInBody(obj.requestBody, allInterfaces, typeMap) || []

        const successCode = obj?.responses?.['200']

        let outputInterface = '' // 出参 interface
        const outputType: 'object' | 'array' = 'object' // 出参类型

        const successScheme =
          (successCode as Response)?.content?.['application/json']?.schema ||
          (successCode as Response)?.content?.['*/*']?.schema

        if ((successScheme as Reference)?.$ref) {
          outputInterface = getInterfaceByRefPathLast((successScheme as Reference).$ref)
          if (outputInterface) {
            console.log('successScheme', successScheme)
          }
        } else {
          console.error('未处理：输出类型不是interface') // cjh todo
        }

        // // 如果出参是数组
        // if (resScheme?.type === 'array') {
        //   outputType = 'array'
        //   resScheme?.items?.originalRef && (outputInterface = handleWeirdName(resScheme.items.originalRef))
        // }
        // // 如果存在出参模型
        // else if (resScheme?.originalRef) {
        //   outputInterface = handleWeirdName(resScheme.originalRef)
        // }
        // // 出参是个简单类型
        // else if (resScheme?.type) {
        //   outputInterface = simpleTypeMap(resScheme.type, typeMap)
        // } else {
        //   // console.warn(`接口${key}不存在出参`)
        // }
        apis.push({
          name,
          url,
          originUrl: theUrl,
          method,
          summary,
          parameters: [...parameters, ...parametersInBody],
          outputInterface: outputInterface || 'any',
          outputType,
          fileName: theFileName,
          fileExt: theFileExt,
        })
      })
    }
  }
  return apis
}

/** 判断某个接口是否需要生成 */
function needGen({ exclude, include, apiPath }) {
  // 没配置 exclude 和 include
  const notSetExclude = !exclude || (Array.isArray(exclude) && !exclude.length)
  const notSetInclude = !include || (Array.isArray(include) && !include.length)
  if (notSetExclude && notSetInclude) {
    return true
  }
  const excludeArr = Array.isArray(exclude) ? exclude : [exclude]
  const includeArr = Array.isArray(include) ? include : [include]

  const isExclude = matchExp(excludeArr, apiPath) // 该 api 不需要生成
  const isInclude = matchExp(includeArr, apiPath) // 该 api 需要生成

  // 只配置了 include 没配置 exclude
  if (include && !exclude) {
    return isInclude
  }
  // 只配置了 exclude 没配置 include
  else if (exclude && !include) {
    return !isExclude
  }
  // exclude 和 include 都配置了
  else if (include && exclude) {
    return !isExclude && isInclude
  }
}

function matchExp(expArr: any[], apiPath: string) {
  return expArr.some((exp) => {
    const expIsReg = exp && Object.prototype.toString.call(exp) === '[object RegExp]'
    const expIsString = exp && Object.prototype.toString.call(exp) === '[object String]'
    // 字符串全等或正则匹配
    return (expIsReg && exp.test(apiPath)) || (expIsString && exp === apiPath)
  })
}

/** 处理入参 */
function getParameters(
  parameters: (Parameter | Reference)[],
  allInterfaces: IInterface[],
  customerTypeMap: { [key: string]: string }
): IParams[] {
  // 有入参
  if (parameters && parameters.length) {
    return parameters.map((item) => {
      if ((item as Reference).$ref) {
        console.error('未处理的入参格式', (item as Reference).$ref)
      } else {
        const _item = item as Parameter
        const isArray = (_item.schema as Schema)?.type === 'array'
        let type =
          (isArray
            ? getItemType((_item.schema as Schema)?.items, customerTypeMap)
            : getParamType(item, customerTypeMap)) || 'any'

        // 是 interface ，但是不存在于 interfaces.ts 中, 处理成 any
        if (typeIsInterface(type)) {
          type = isExistInterface(type, allInterfaces) ? type : 'any'
        }

        return {
          name: handleWeirdName(_item.name),
          description: _item.description || '', // 注释
          in: _item.in as any,
          isArray,
          type,
        }
      }
    })
  }
  // 没入参
  else {
    return []
  }
}

function getParametersInBody(
  requestBody: Operation['requestBody'],
  allInterfaces: IInterface[],
  customerTypeMap: { [key: string]: string }
): IParams[] {
  if (!requestBody) return []
  if ((requestBody as Reference)?.$ref) {
    const _requestBody = requestBody as Reference
    return [
      {
        name: '',
        description: '',
        in: 'body',
        // isArray,
        type: getInterfaceByRefPathLast(_requestBody.$ref),
      },
    ]
  } else {
    const _requestBody = requestBody as RequestBody
    console.log(_requestBody)
    const json = _requestBody?.content?.['application/json'] // cjh todo ,同时有 formData 的没处理
    if ((json?.schema as Reference)?.$ref) {
      return [
        {
          name: '',
          description: _requestBody?.description || '', // 注释
          in: 'body',
          // isArray,
          type: getInterfaceByRefPathLast((json?.schema as Reference)?.$ref),
        },
      ]
    }
  }
}

function getItemType(schema: Schema | Reference, customerTypeMap: { [key: string]: string }) {
  if ((schema as Reference)?.$ref) {
    const _schema = schema as Reference
    return getInterfaceByRefPathLast(_schema.$ref)
  } else {
    const _schema = schema as Schema
    return simpleTypeMap(_schema.format || _schema.type, customerTypeMap)
  }
}

function getParamType(parameter: Parameter | Reference, customerTypeMap: { [key: string]: string }) {
  if ((parameter as Reference)?.$ref) {
    const _parameter = parameter as Reference
    return getInterfaceByRefPathLast(_parameter.$ref)
  } else if (((parameter as Parameter).schema as Reference)?.$ref) {
    const _paramScheme = (parameter as Parameter).schema as Reference
    return getInterfaceByRefPathLast(_paramScheme?.$ref)
  } else if ((parameter as Parameter).schema) {
    const _paramScheme = (parameter as Parameter).schema as Schema
    return simpleTypeMap(_paramScheme.format || _paramScheme.type, customerTypeMap)
  }
}

/**
 * @param ref #/components/schemas/getTodoListObj
 * @return getTodoListObj
 */
function getInterfaceByRefPathLast(ref: string): string {
  if (!ref || !ref.trim()) return ''
  const arr = ref.replace(/^#\//, '').split('/') // ['components','schemas','getTodoListObj']
  return handleWeirdName(arr.pop())
}
