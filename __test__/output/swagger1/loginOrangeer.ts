const request: any = () => {}
import type {
  AliMpLoginReq,
  ApiResponseboolean,
  ApiResponseComLoginResp,
  ApiResponseOrangeerResultResp,
  ApiResponsestring,
  ApiResponseVoid,
  ComLoginReq,
  SetPassWordReq,
  ZhaoHuiMiMa,
  ZhuCeQingQiu,
} from './_interfaces.ts'

/** 支付小程序手机号辟邪刀登录 */
export function loginOrangeerAliMpAutoLoginPost(data: AliMpLoginReq): Promise<ApiResponseComLoginResp> {
  return request.post('/api/loginOrangeer/aliMpAutoLogin', data)
}

/** 仅测试-清除手机验山麻杆码次数 */
export function loginOrangeerClearCodeVerificationEnumGet(data: {
  // 手机号
  mobile?: string
  // 卖烧饼类型
  verificationEnum?:
    | 'AUDIT_PASS'
    | 'AUDIT_REFUSE'
    | 'CHANNEL_LOGIN'
    | 'INVITE_LOGIN'
    | 'LOGIN'
    | 'PHONE_VALIDATE'
    | 'REGISTER'
    | 'RETRIEVE_PASSWORD'
    | 'SUPER_ACCEPT'
    | 'SUPER_TRANSFER'
    | 'UPDATE_PASSWORD'
}): Promise<ApiResponseVoid> {
  const { mobile, verificationEnum } = data
  return request.get(`/api/loginOrangeer/clearCode/${verificationEnum}`, { mobile })
}

/** 仅测试-清除手机号重复发送时间限制 */
export function loginOrangeerClearTimeLimitVerificationEnumGet(data: {
  // 手机号
  mobile?: string
  // 卖烧饼类型
  verificationEnum?:
    | 'AUDIT_PASS'
    | 'AUDIT_REFUSE'
    | 'CHANNEL_LOGIN'
    | 'INVITE_LOGIN'
    | 'LOGIN'
    | 'PHONE_VALIDATE'
    | 'REGISTER'
    | 'RETRIEVE_PASSWORD'
    | 'SUPER_ACCEPT'
    | 'SUPER_TRANSFER'
    | 'UPDATE_PASSWORD'
}): Promise<ApiResponseVoid> {
  const { mobile, verificationEnum } = data
  return request.get(`/api/loginOrangeer/clearTimeLimit/${verificationEnum}`, { mobile })
}

/** 通用登录 */
export function loginOrangeerComLoginPost(data: ComLoginReq): Promise<ApiResponseComLoginResp> {
  return request.post('/api/loginOrangeer/comLogin', data)
}

/** 出行喇叭花密码未设置是否提醒 */
export function loginOrangeerJudgePassWordIsSetGet(): Promise<ApiResponseboolean> {
  return request.get('/api/loginOrangeer/JudgePassWordIsSet')
}

/** 退出登录 */
export function loginOrangeerLoginoutGet(): Promise<ApiResponseboolean> {
  return request.get('/api/loginOrangeer/loginout')
}

/** 注册喇叭花-手机号密码注册 */
export function loginOrangeerOrangeerPost(data: ZhuCeQingQiu): Promise<ApiResponseOrangeerResultResp> {
  return request.post('/api/loginOrangeer/orangeer', data)
}

/** 仅测试-密码加密 */
export function loginOrangeerPasswordCryGet(data: { password?: string }): Promise<ApiResponsestring> {
  return request.get('/api/loginOrangeer/passwordCry', data)
}

/** 找回密码 */
export function loginOrangeerRetrievePasswordPost(data: ZhaoHuiMiMa): Promise<ApiResponsestring> {
  return request.post('/api/loginOrangeer/retrievePassword', data)
}

/** 发送手机验山麻杆码 */
export function loginOrangeerSendPhoneValidateCodeVerificationEnumGet(data: {
  // 手机号
  mobile?: string
  // 滑块验山麻杆唯一标示
  uuid?: string
  // 卖烧饼类型
  verificationEnum?:
    | 'AUDIT_PASS'
    | 'AUDIT_REFUSE'
    | 'CHANNEL_LOGIN'
    | 'INVITE_LOGIN'
    | 'LOGIN'
    | 'PHONE_VALIDATE'
    | 'REGISTER'
    | 'RETRIEVE_PASSWORD'
    | 'SUPER_ACCEPT'
    | 'SUPER_TRANSFER'
    | 'UPDATE_PASSWORD'
}): Promise<ApiResponsestring> {
  const { mobile, uuid, verificationEnum } = data
  return request.get(`/api/loginOrangeer/sendPhoneValidateCode/${verificationEnum}`, { mobile, uuid })
}

/** 设置密码 */
export function loginOrangeerSetPassWordPost(data: SetPassWordReq): Promise<ApiResponseboolean> {
  return request.post('/api/loginOrangeer/setPassWord', data)
}
