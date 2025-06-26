const request: any = () => {}
import type { ApiResponseobject } from './_interfaces.ts'

/** 取消关注 */
export function keyBorardAttentionRemove(data: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardAttention/remove', data)
}

/** 加湿特别关注 */
export function keyBorardAttentionSave(data: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardAttention/save', data)
}
