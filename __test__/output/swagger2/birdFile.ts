const request: any = () => {}
import type { ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi, BirdFileUploadReq } from './_interfaces.ts'

/** 上传鸟窝文件 */
export function birdFileSave(data: BirdFileUploadReq): Promise<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi> {
  return request.post('/api/birdFile/save', data)
}
