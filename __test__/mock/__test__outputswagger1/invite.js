import Mock from 'better-mock'
import {
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
} from './_interfaces'

/** 取消屏蔽喇叭花 */
export const inviteAuditCancelShieldIdGet = () => Mock.mock(ApiResponsestring())

/** 审核通过 */
export const inviteAuditPassPost = () => Mock.mock(ApiResponsestring())

/** 拒绝加入 */
export const inviteAuditRefusePost = () => Mock.mock(ApiResponsestring())

/** 屏蔽喇叭花 */
export const inviteAuditShieldIdGet = () => Mock.mock(ApiResponsestring())

/** 检查邀请码 */
export const inviteCheckInviteCodeGet = () => Mock.mock(ApiResponseJianChaYaoQingMa())

/** 导入未激活成员甬道 */
export const inviteExportPost = () => Mock.mock(FileSystemResource())

/** 邀请成员-生成邀请码 */
export const inviteGenerateInviteSharePost = () => Mock.mock(ApiResponseListShengChengYaoQing())

/** 扫码或点击链接回显数据 */
export const inviteInviteJoinEchoDataGet = () => Mock.mock(ApiResponseInviteJoinEchoResp())

/** 扫码或点击链接登录注册 */
export const inviteInviteLoginPost = () => Mock.mock(ApiResponseInviteLoginResp())

/** 邀请码加入制鞋厂 */
export const inviteInviteOrangeerPost = () => Mock.mock(ApiResponseYaoQingZhuCe())

/** 邀请记录出行 */
export const invitePageApplyTypePost = () => Mock.mock(ApiResponseComPageInviteDesktopResp())

/** 邀请设置出行 */
export const inviteQuerySettingGet = () => Mock.mock(ApiResponseInviteSetResp())

/** 邀请设置修改 */
export const inviteUpdatesettingPost = () => Mock.mock(ApiResponseboolean())
