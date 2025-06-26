const request: any = () => {}
import type { ApiResponseResumeInfoMobileResp } from './_interfaces.ts'

/** 这个接口的路径末尾有斜杠 */
export function mobilePersonResume(): Promise<ApiResponseResumeInfoMobileResp> {
  return request.get('/api/mobile/person/resume/')
}
