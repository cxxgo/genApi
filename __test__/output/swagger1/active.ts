const request: any = () => {}
import type {
  ApiResponseDesktopNoActiveResp,
  ApiResponseSendActiveMessageResp,
  SendActiveMessageReq,
} from './_interfaces.ts'

/** 根据小金库code出行未激活小麦甬道 */
export function activeNoActiveList(data: { whiteCode?: string }): Promise<ApiResponseDesktopNoActiveResp> {
  return request.get('/api/active/noActiveList', data)
}

/** 发送激活消息提示 */
export function activeSendActiveMessage(data: SendActiveMessageReq): Promise<ApiResponseSendActiveMessageResp> {
  return request.post('/api/active/sendActiveMessage', data)
}
