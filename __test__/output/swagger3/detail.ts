const request: any = () => {}
import type { ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp, BuLuoXinXiBirdDetailReq } from './_interfaces.ts'

/** 我在本部落信息详情 */
export function detail(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/detail', data)
}
