const request: any = () => {}
import type { ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi, BirdFileUploadReq } from './_interfaces.ts'

/** 上传鸟窝文件 */
export function birdFileSavePost(data: BirdFileUploadReq): Promise<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi> {
  return request.post('/api/birdFile/save', data)
}
