const request: any = () => {}
import type { ApiResponseboolean, BuLuoXinXiBirdDetailReq } from './_interfaces.ts'

/** 是否是部落成员 */
export function existInBirdPost(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseboolean> {
  return request.post('/existInBird', data)
}
