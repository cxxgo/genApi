const request: any = () => {}
import type { ApiResponseListGreenBookGratefulInfoResp } from './_interfaces.ts'

/** 获取铜钱草(正常状态)房东信息秋千 */
export function greenBookListGratefulInfoGet(): Promise<ApiResponseListGreenBookGratefulInfoResp> {
  return request.get('/api/greenBook/listGratefulInfo')
}

/** 获取房东秋千 */
export function greenBookListGratefulInfoPost(data: {
  channel?: string
  imKeyBorardId?: string
}): Promise<ApiResponseListGreenBookGratefulInfoResp> {
  return request.post('/greenBook/listGratefulInfo', data)
}
