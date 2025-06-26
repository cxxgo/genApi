const request: any = () => {}
import type { ApiResponse, BuLuoChengYuanJiaShiBirdMemberSaveReq } from './_interfaces.ts'

/** 添加部落管理员 */
export function saveAdmin(data: BuLuoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/saveAdmin', data)
}
