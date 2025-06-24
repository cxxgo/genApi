import type { IInterface } from '../types'
import { handleDescription, handleWeirdName, simpleTypeMap } from '../utils'

/** 用户自定义的字段类型 map 规则 */
let theCustomerTypeMap = {}

/**
 * 入参格式
 * "ApiResponse«AddUserReq»": {
 *    "type": "object",
 *    "properties": {
 *     "code": { "type": "integer", "format": "int32" },
 *     "data": { "$ref": "#/definitions/AddUserReq", "originalRef": "AddUserReq" },
 *     "msg": { "type": "string" },
 *     "success": { "type": "boolean" },
 *   },
 * },
 */
export function handleInterface(definitions, customerTypeMap: { [key: string]: string }) {
  theCustomerTypeMap = customerTypeMap || {}
  const defs: IInterface[] = []
  Object.keys(definitions).forEach((key) => {
    const interfaceName = handleWeirdName(key)
    // 不存在或者是简单类型
    if (!interfaceName || simpleTypeMap(interfaceName, theCustomerTypeMap))
      return

    const obj = definitions[key]
    const properties = handleProperties(obj.properties || {})
    const exist = defs.find(item => item.name === interfaceName)
    const interfaceModal = handleInterfaceModal(obj)
    defs.push({ name: interfaceName, ...interfaceModal, properties })
  })
  return defs
}

/**
 * 处理属性
 * @param properties 格式如下
 *  "properties": {
      "directEntryGroup": { "type": "boolean", "description": "是否直接入圈子" },
      "groupId": { "type": "integer", "format": "int64", "description": "圈子id" }
   },
 */
function handleProperties(properties) {
  const arr: IInterface[] = []
  Object.keys(properties).forEach((key) => {
    const obj = properties[key]
    const interfaceModal = handleInterfaceModal(obj)
    arr.push({ name: key, ...interfaceModal })
  })
  return arr
}

function handleInterfaceModal(obj): Omit<IInterface, 'name'> {
  const additionalProperties = obj.type === 'object' && (obj.additionalProperties?.originalRef || (obj.additionalProperties?.$ref || '').replace('#/definitions/', ''))
  const isArray = obj.type === 'array'
  const theType = additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(obj)

  return {
    isArray, // 是否是数组
    type: theType || 'any',
    description: handleDescription(obj.description),
    enums: obj.enum && Array.isArray(obj.enum) ? obj.enum : undefined,
  }
}

/**
 * 处理以下数据格式
 * "certificateList": {
      "type": "array",
      "description": "执业资格证",
      "items": {
        "$ref": "#/definitions/CrmCustomerPersonCertificateInfoResp",
        "originalRef": "CrmCustomerPersonCertificateInfoResp"
      }
    }
  或者
  "fileIdList": {
      "type": "array",
      "description": "图片文件id列表",
      "items": { "type": "integer", "format": "int64" }
    },
  或者
  "data": {
    "$ref": "#/definitions/AddUserReq", "originalRef": "AddUserReq"
  },
 */
function handleItemsType(obj) {
  if (obj.type === 'array') {
    if (obj?.items?.originalRef || obj?.items?.$ref)
      return handleWeirdName(obj.items.originalRef || obj.items.$ref.replace('#/definitions/', ''))
    else return simpleTypeMap(obj.items?.format || obj.items?.type, theCustomerTypeMap)
  }
  else if (obj?.originalRef || obj?.$ref) {
    return handleWeirdName(obj?.originalRef || obj?.$ref.replace('#/definitions/', ''))
  }
  else {
    return simpleTypeMap(obj.format || obj.type, theCustomerTypeMap)
  }
}
