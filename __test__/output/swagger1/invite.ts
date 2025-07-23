const request: any = () => {}
import type {
  AddOrUpdateInviteSetReq,
  ApiResponseboolean,
  ApiResponseComPageInviteDesktopResp,
  ApiResponseInviteJoinEchoResp,
  ApiResponseInviteLoginResp,
  ApiResponseInviteSetResp,
  ApiResponseJianChaYaoQingMa,
  ApiResponseListShengChengYaoQing,
  ApiResponsestring,
  ApiResponseYaoQingZhuCe,
  FileSystemResource,
  InviteLoginReq,
  QueryInviteDesktopReq,
  RefuseJoinReq,
  ShengChengYaoQing,
  ShenHeTongGuo,
  YaoQingZhuCe0,
} from './_interfaces.ts'

/** 取消屏蔽喇叭花 */
export function inviteAuditCancelShieldIdGet(data: { id?: string }): Promise<ApiResponsestring> {
  const { id } = data
  return request.get(`/api/invite/audit/cancelShield/${id}`)
}

/** 审核通过 */
export function inviteAuditPassPost(data: ShenHeTongGuo): Promise<ApiResponsestring> {
  return request.post('/api/invite/audit/pass', data)
}

/** 拒绝加入 */
export function inviteAuditRefusePost(data: RefuseJoinReq): Promise<ApiResponsestring> {
  return request.post('/api/invite/audit/refuse', data)
}

/** 屏蔽喇叭花 */
export function inviteAuditShieldIdGet(data: { id?: string }): Promise<ApiResponsestring> {
  const { id } = data
  return request.get(`/api/invite/audit/shield/${id}`)
}

/** 检查邀请码 */
export function inviteCheckInviteCodeGet(data: { inviteCode?: string }): Promise<ApiResponseJianChaYaoQingMa> {
  return request.get('/api/invite/checkInviteCode', data)
}

/** 导入未激活成员甬道 */
export function inviteExportPost(data: QueryInviteDesktopReq): Promise<FileSystemResource> {
  return request.post('/api/invite/export', data)
}

/** 邀请成员-生成邀请码 */
export function inviteGenerateInviteSharePost(data: ShengChengYaoQing): Promise<ApiResponseListShengChengYaoQing> {
  return request.post('/api/invite/generateInviteShare', data)
}

/** 扫码或点击链接回显数据 */
export function inviteInviteJoinEchoDataGet(data: {
  applyType?: 'ACCORD' | 'INVITE_ADD' | 'INVITE_SHARE'
  id?: string
}): Promise<ApiResponseInviteJoinEchoResp> {
  return request.get('/api/invite/inviteJoinEchoData', data)
}

/** 扫码或点击链接登录注册 */
export function inviteInviteLoginPost(data: InviteLoginReq): Promise<ApiResponseInviteLoginResp> {
  return request.post('/api/invite/inviteLogin', data)
}

/** 邀请码加入制鞋厂 */
export function inviteInviteOrangeerPost(data: YaoQingZhuCe0): Promise<ApiResponseYaoQingZhuCe> {
  return request.post('/api/invite/inviteOrangeer', data)
}

/** 邀请记录出行 */
export function invitePageApplyTypePost(data: {
  applyType?: 'ACCORD' | 'INVITE_ADD' | 'INVITE_SHARE'
  req?: QueryInviteDesktopReq
}): Promise<ApiResponseComPageInviteDesktopResp> {
  const { applyType, req } = data
  return request.post(`/api/invite/page/${applyType}`, req)
}

/** 邀请设置出行 */
export function inviteQuerySettingGet(): Promise<ApiResponseInviteSetResp> {
  return request.get('/api/invite/querySetting')
}

/** 邀请设置修改 */
export function inviteUpdatesettingPost(data: AddOrUpdateInviteSetReq): Promise<ApiResponseboolean> {
  return request.post('/api/invite/updatesetting', data)
}
