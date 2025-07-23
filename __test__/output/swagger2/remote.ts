const request: any = () => {}
import type { ApiResponse, MessageProcessReq, RemoteAutoBirdReq } from './_interfaces.ts'

/** 模拟大数据建鸟窝 */
export function remoteBigdataAutoBirdPost(data: RemoteAutoBirdReq): Promise<ApiResponse> {
  return request.post('/api/remote/bigdata/autoBird', data)
}

/** 模拟大数据建鸟窝 */
export function remoteBigdataMockAutoBirdPost(data: string[]): Promise<ApiResponse> {
  return request.post('/api/remote/bigdata/mockAutoBird', data)
}

/** 处理结构化消息 */
export function remoteMessageProcessPost(data: MessageProcessReq): Promise<ApiResponse> {
  return request.post('/remote/message/process', data)
}
