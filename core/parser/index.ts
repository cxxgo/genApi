import type { IApiModel, IApiStation, IInterface, IParsered, UserConfig } from '../types'
import { handleWeirdName, typeIsInterface } from '../utils/index'
import { handleApiModel } from './handleApiModel'
import { handleInterface } from './handleInterface'
import { saveParseredDataToLocal } from './localData'
import { readSwagger } from './readSwagger'

export async function parser(apiConfig: UserConfig) {
  validateApiConfig(apiConfig)
  const apiList: IApiStation[] = apiConfig.apiList
    .filter(item => item.gen !== false)
    .map((item) => {
      return {
        ...item,
        httpTpl: item.httpTpl || apiConfig.httpTpl || '',
        apiBody: item.apiBody || apiConfig.apiBody,
        fileName: item.fileName || apiConfig.fileName,
        apiName: item.apiName || apiConfig.apiName,
        pathRewrite: item.pathRewrite || apiConfig.pathRewrite,
        typeMap: item.typeMap || apiConfig.typeMap,
        apiNameWithMethod: item.apiNameWithMethod === true || (item.apiNameWithMethod === undefined && apiConfig.apiNameWithMethod !== false),
      }
    })

  const res = await parseParaller(apiList)
  saveParseredDataToLocal(res)
  return res
}

function parseParaller(apiList: IApiStation[]): Promise<IParsered[]> {
  const fns: Promise<IParsered>[] = []
  apiList.forEach((item, index) => {
    fns.push(parseFn(item, index))
  })
  return Promise.all(fns)
}

async function parseFn(apiStation: IApiStation, stationIndex: number): Promise<IParsered> {
  const swaggerJson = (await readSwagger(apiStation.swaggerUrl)) as any
  let apis: IApiModel[] = []
  let interfaces: IInterface[] = []
  if (swaggerJson) {
    const allInterfaces = handleInterface(swaggerJson.definitions, apiStation.typeMap) // 接口文档上的所有 interface
    apis = handleApiModel(swaggerJson.paths, allInterfaces, {
      include: apiStation.include,
      exclude: apiStation.exclude,
      fileName: apiStation.fileName,
      apiName: apiStation.apiName,
      pathRewrite: apiStation.pathRewrite,
      typeMap: apiStation.typeMap,
      fileExt: apiStation.fileExt,
      apiNameWithMethod: apiStation.apiNameWithMethod,
    })

    const usedInterfaces = getStationInterfaces(apis, allInterfaces) // 需要生成的接口用到的 interface 名称数组
    interfaces = allInterfaces.filter(i => usedInterfaces.includes(i.name)) // 需要生成的接口用到的 interface 对象数组
  }
  return {
    ...apiStation,
    stationFlag: `${handleWeirdName(apiStation.outputDir)}`,
    apis,
    interfaces,
  }
}

/** 获取接口所涉及到的所有 interface */
function getStationInterfaces(apis: IApiModel[], allInterfaces: IInterface[]): string[] {
  const result: string[] = []
  apis.forEach((item) => {
    // 获取入参使用到的 interface
    item.parameters?.forEach((p) => {
      if (typeIsInterface(p.type)) {
        loopInterface({ type: p.type, allInterfaces, result })
      }
    })
    // 获取出参使用到的 interface
    if (typeIsInterface(item.outputInterface)) {
      loopInterface({ type: item.outputInterface, allInterfaces, result })
    }
  })
  return result
}

/**
 * 循环某个 interface 的属性，如果属性值非简单数据类型，则添加到 result 中
 */
function loopInterface(data: { type: string, allInterfaces: IInterface[], result: string[] }) {
  const { type, allInterfaces, result } = data
  if (typeIsInterface(type) && !result.includes(type)) {
    result.push(type)
    const theInterfaceObj = allInterfaces.find(item => item.name === type)
    theInterfaceObj?.properties?.forEach((item) => {
      loopInterface({ type: item.type, allInterfaces, result })
    })
  }
  return result
}

/** 校验 apiConfig  */
function validateApiConfig(apiConfig: UserConfig) {
  const apiList = apiConfig.apiList.filter(item => item.gen !== false)
  if (!apiConfig.apiBody && apiList.some(item => !item.apiBody)) {
    throw new Error('请配置 apiBody , 必须是一个函数')
  }
  if (apiList.some(item => !item.outputDir)) {
    throw new Error('请配置输出路径 outputDir')
  }
  if (apiList.some(item => !item.swaggerUrl)) {
    throw new Error('请配置 swaggerUrl')
  }
  if (
    (apiConfig.apiName && typeof apiConfig.apiName !== 'function')
    || apiList.some(item => item.apiName && typeof item.apiName !== 'function')
  ) {
    throw new Error('apiName 必须是一个函数')
  }
  if (
    (apiConfig.pathRewrite && typeof apiConfig.pathRewrite !== 'function')
    || apiList.some(item => item.pathRewrite && typeof item.pathRewrite !== 'function')
  ) {
    throw new Error('pathRewrite 必须是一个函数')
  }
}
