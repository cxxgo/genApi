const request: any = () => {}
import type { ApiResponse, BuLuoChengYuanJiaShiBirdMemberSaveReq } from './_interfaces.ts'

/** 添加部落成员（自动创建好看大肚腩部落不能添加倒垃圾成员） */
export function save(data: BuLuoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/save', data)
}
