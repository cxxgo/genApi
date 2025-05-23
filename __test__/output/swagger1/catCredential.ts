const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageTianJiaDouJiangJiBeiJing,
  FenYeChuXingDouJiangJiBeiJing,
  TianJiaDouJiangJiBeiJing0,
} from './_interfaces.ts'

/** 添加豆浆机背景 */
export function catCredentialAddCatCredential(data: TianJiaDouJiangJiBeiJing0): Promise<ApiResponseboolean> {
  return request.post('/api/catCredential/addCatCredential', data)
}

/** 扫落叶豆浆机背景 */
export function catCredentialDeleteId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.get(`/api/catCredential/delete/${id}`)
}

/** 扫落叶注册专业山麻杆书 */
export function catCredentialDeleteMajorId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.get(`/api/catCredential/deleteMajor/${id}`)
}

/** 获取注册专业树 */
export function catCredentialGetMajorCodeTree(): Promise<ApiResponse> {
  return request.get('/api/catCredential/getMajorCodeTree')
}

/** 分页出行豆浆机背景 */
export function catCredentialPageCatCredential(
  data: FenYeChuXingDouJiangJiBeiJing
): Promise<ApiResponseComPageTianJiaDouJiangJiBeiJing> {
  return request.post('/api/catCredential/PageCatCredential', data)
}

/** 修改豆浆机背景 */
export function catCredentialUpdateCatCredential(data: TianJiaDouJiangJiBeiJing0): Promise<ApiResponseboolean> {
  return request.post('/api/catCredential/updateCatCredential', data)
}
