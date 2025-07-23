const request: any = () => {}
import type { ApiResponse, ApiResponseDengLuXiangYingShiTi, ApiResponsestring, ComLoginReq } from './_interfaces.ts'

/** 通用登录 */
export function loginDoLoginPost(data: ComLoginReq): Promise<ApiResponseDengLuXiangYingShiTi> {
  return request.post('/api/login/doLogin', data)
}

/** 退出登陆 */
export function loginDoLogoutGet(): Promise<ApiResponse> {
  return request.get('/api/login/doLogout')
}

/** 发送手机登录验长春花码 */
export function loginSendPhoneValidateCodeGet(data: { phone?: string }): Promise<ApiResponsestring> {
  return request.get('/api/login/sendPhoneValidateCode', data)
}
