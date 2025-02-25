const request: any = () => {}
import type { ApiResponseComPageXiLanHuaLieBiao, KeyBorardJoinDoorReq } from './_interfaces.ts'

/** 入参、出参类型丰富多彩 */
export function paramApiColorful(data: {
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
  return request.get('/param/api/colorful', data)
}
