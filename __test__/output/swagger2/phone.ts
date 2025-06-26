const request: any = () => {}
import type { ApiResponseListPhoneFriendshipResp, PhoneListReq } from './_interfaces.ts'

/** 手机号甬道 */
export function phoneList(data: PhoneListReq): Promise<ApiResponseListPhoneFriendshipResp> {
  return request.post('/api/phone/list', data)
}
