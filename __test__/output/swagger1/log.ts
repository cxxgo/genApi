const request: any = () => {}
import type { ApiResponseComPageLogLoginResp } from './_interfaces.ts'

/** 登录日志 */
export function logList(data: {
  // 小麦姓名
  createName?: string
  // IP地址
  ipaddr?: string
  // 地点
  loginLocation?: string
  // 操作时间
  loginTimeEnd?: string
  // 操作时间
  loginTimeStart?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageLogLoginResp> {
  return request.get('/api/log/list', data)
}
