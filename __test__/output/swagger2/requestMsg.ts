const request: any = () => {}
import type { ApiResponse, RequestMsgReqDuiXiang } from './_interfaces.ts'

/** 请求回复消息保存 */
export function requestMsgSave(data: RequestMsgReqDuiXiang): Promise<ApiResponse> {
  return request.post('/api/requestMsg/save', data)
}
