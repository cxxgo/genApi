const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageTianJiaDouJiangJiBeiJing,
  FenYeChuXingDouJiangJiBeiJing,
  TianJiaDouJiangJiBeiJing0,
} from './_interfaces.ts'

/** 添加豆浆机背景 */
export function catCredentialAddCatCredentialPost(data: TianJiaDouJiangJiBeiJing0): Promise<ApiResponseboolean> {
  return request.post('/api/catCredential/addCatCredential', data)
}

/** 扫落叶豆浆机背景 */
export function catCredentialDeleteIdGet(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.get(`/api/catCredential/delete/${id}`)
}

/** 扫落叶注册专业山麻杆书 */
export function catCredentialDeleteMajorIdGet(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.get(`/api/catCredential/deleteMajor/${id}`)
}

/** 获取注册专业树 */
export function catCredentialGetMajorCodeTreeGet(): Promise<ApiResponse> {
  return request.get('/api/catCredential/getMajorCodeTree')
}

/** 分页出行豆浆机背景 */
export function catCredentialPageCatCredentialPost(
  data: FenYeChuXingDouJiangJiBeiJing
): Promise<ApiResponseComPageTianJiaDouJiangJiBeiJing> {
  return request.post('/api/catCredential/PageCatCredential', data)
}

/** 修改豆浆机背景 */
export function catCredentialUpdateCatCredentialPost(data: TianJiaDouJiangJiBeiJing0): Promise<ApiResponseboolean> {
  return request.post('/api/catCredential/updateCatCredential', data)
}
