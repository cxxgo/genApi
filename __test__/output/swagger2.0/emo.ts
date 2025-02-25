const request: any = () => {}
import type { ApiResponseComPageXiLanHuaLieBiao, KeyBorardJoinDoorReq, ApiResponseListTreelong } from './_interfaces.ts'

/** 入参、出参类型丰富多彩 */
export function emoApiColorful(data: {
  // 枚举入参
  cooperateStatus?: string
  // type string
  cooperateTypeFirst?: string
  // type boolean
  allowAllot?: boolean
  // type integer, format int64
  feeId?: string
  // 操作时间
  loginTimeEnd?: string
  // type array, items integer, format int64
  parentIds?: string[]
  // type array, items string
  keywords?: string[]
  // type array, items integer, format int64
  reId?: string[]
  // type array, items object
  map?: any
  // type interface
  req?: KeyBorardJoinDoorReq
}): Promise<ApiResponseComPageXiLanHuaLieBiao> {
  return request.get('/emo/api/colorful', data)
}

/** 这个接口出参type是object, 需要处理成any */
export function emoEmoEmployeeTree(): Promise<ApiResponseListTreelong> {
  return request.get('/api/emo/emo/employee/tree')
}
