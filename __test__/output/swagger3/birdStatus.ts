const request: any = () => {}
import type { ApiResponseMemberBirdStatusResp, BuLuoXinXiBirdDetailReq } from './_interfaces.ts'

/** 本部落状态 */
export function birdStatus(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseMemberBirdStatusResp> {
  return request.post('/birdStatus', data)
}
