import type { OpenApi, Reference, Schema } from '../../swaggerType3.x'
import type { IInterface } from '../../types'
import fs from 'node:fs'
import { handleDescription, handleWeirdName, simpleTypeMap } from '../../utils'

/** 用户自定义的字段类型 map 规则 */
let theCustomerTypeMap = {}

let swaggerJson: OpenApi = {} as any
export function handleInterface3(docJson: OpenApi, customerTypeMap: { [key: string]: string }) {
  swaggerJson = docJson
  const components = swaggerJson.components
  theCustomerTypeMap = customerTypeMap || {}
  const defs: IInterface[] = []
  const schemas = components?.schemas // 目前只处理了 scheme
  Object.keys(schemas).forEach((key) => {
    const interfaceName = handleWeirdName(key)
    // 不存在或者是简单类型
    if (!interfaceName || simpleTypeMap(interfaceName, theCustomerTypeMap))
      return
    const res = handleScheme(key, schemas[key])
    defs.push(res)
  })
  fs.writeFileSync('./res.json', JSON.stringify(defs))
  return defs
}

function handleScheme(key: string, schema: Schema | Reference): IInterface {
  // "data": {
  //   "$ref": "#/components/schemas/ComPage待办列表响应"
  // }
  if ((schema as Reference)?.$ref) {
    const _schema = schema as Reference
    return {
      name: handleWeirdName(key),
      type: getInterfaceByRefPathLast(_schema.$ref),
    }
  }
  else {
    const _schema = schema as Schema
    const properties = _schema?.properties || {}
    const isArray = _schema?.type === 'array'
    return {
      name: handleWeirdName(key),
      isArray,
      type: isArray ? getType(_schema.items) : getType(_schema),
      description: handleDescription(_schema.description),
      properties: Object.keys(properties).map(p => handleScheme(p, properties[p])),
      enums: _schema.enum,
    }
  }
}

function getType(schema: Schema | Reference) {
  if ((schema as Reference)?.$ref) {
    const _schema = schema as Reference
    return getInterfaceByRefPathLast(_schema.$ref)
  }
  else {
    const _schema = schema as Schema
    return simpleTypeMap(_schema.format || _schema.type, theCustomerTypeMap)
  }
}

/**
 * @param ref #/components/schemas/getTodoListObj
 * @return getTodoListObj
 */
function getInterfaceByRefPathLast(ref: string): string {
  if (!ref || !ref.trim())
    return ''
  const arr = ref.replace(/^#\//, '').split('/') // ['components','schemas','getTodoListObj']
  return handleWeirdName(arr.pop())
}

// 通过 ref 获取interface
// function getInterfaceByRefPath(ref: string): any {
//   console.log('ref', ref)
//   return ref
//     .replace(/^#\//, '')
//     .split('/')
//     .reduce((current, key) => current?.[key], swaggerJson)
// }

/**
  "待办内容": {
    "type": "string"
  },
 
  "附件内容": {
    "type": "array",
    "items": {
      "$ref": "#/components/schemas/Attach"
    }，
 
    "完成方式：默认ANY_OWNER": {
      "type": "string",
      "enum": ["ANY_OWNER", "ALL_OWNER"]
    },
},
 */
// function handleInterfaceModal(obj): Omit<IInterface, 'name'> {
//   const additionalProperties = obj.type === 'object' && obj.additionalProperties?.originalRef
//   const isArray = obj.type === 'array'
//   const theType = additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(obj)

//   return {
//     isArray, // 是否是数组
//     type: theType || 'any',
//     description: handleDescription(obj.description),
//     enums: obj.enum && Array.isArray(obj.enum) ? obj.enum : undefined,
//   }
// }

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
// function handleItemsType(obj) {
//   if (obj.type === 'array') {
//     if (obj?.items?.originalRef) return handleWeirdName(obj.items.originalRef)
//     else return simpleTypeMap(obj.items?.format || obj.items?.type, theCustomerTypeMap)
//   } else if (obj?.originalRef) {
//     return handleWeirdName(obj?.originalRef)
//   } else {
//     return simpleTypeMap(obj.format || obj.type, theCustomerTypeMap)
//   }
// }
