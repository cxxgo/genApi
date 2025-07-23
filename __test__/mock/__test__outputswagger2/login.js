import Mock from 'better-mock'
import { ApiResponse, ApiResponseDengLuXiangYingShiTi, ApiResponsestring } from './_interfaces'

/** 通用登录 */
export const loginDoLoginPost = () => Mock.mock(ApiResponseDengLuXiangYingShiTi())

/** 退出登陆 */
export const loginDoLogoutGet = () => Mock.mock(ApiResponse())

/** 发送手机登录验长春花码 */
export const loginSendPhoneValidateCodeGet = () => Mock.mock(ApiResponsestring())
