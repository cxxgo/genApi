const request: any = () => {}
import type { ApiResponse, BuLuoChengYuanDaoLaJiBirdMemberDelReq } from './_interfaces.ts'

/** 倒垃圾部落管理员 */
export function deleteAdmin(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/deleteAdmin', data)
}
