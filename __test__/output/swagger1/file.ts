const request: any = () => {}
import type { ApiResponseListWenJianShangChuanXiangYing } from './_interfaces.ts'

/** 文件上传 */
export function fileUploadPost(data?: any): Promise<ApiResponseListWenJianShangChuanXiangYing> {
  return request.post('/api/file/upload', data)
}
