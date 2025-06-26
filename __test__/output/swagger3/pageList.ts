const request: any = () => {}
import type {
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  BuLuoChengYuanFenYeBirdMemberPageReq,
} from './_interfaces.ts'

/** 根据birdId分页旅游成员秋千 */
export function pageList(data: {
  channel?: string
  pageReq?: BuLuoChengYuanFenYeBirdMemberPageReq
}): Promise<ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/pageList', data)
}
