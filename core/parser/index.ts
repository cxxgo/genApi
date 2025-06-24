import type { IApiModel, IApiStation, IInterface, IParsered, UserConfig } from '../types'
import { handleWeirdName } from '../utils/index'
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
    interfaces = handleInterface(swaggerJson.definitions, apiStation.typeMap)
    apis = handleApiModel(swaggerJson.paths, interfaces, {
      include: apiStation.include,
      exclude: apiStation.exclude,
      fileName: apiStation.fileName,
      apiName: apiStation.apiName,
      pathRewrite: apiStation.pathRewrite,
      typeMap: apiStation.typeMap,
      fileExt: apiStation.fileExt,
    })
  }
  return {
    ...apiStation,
    stationFlag: `${handleWeirdName(apiStation.outputDir)}`,
    apis,
    interfaces,
  }
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
