import Mock from 'better-mock'
import {
  ApiResponseAccInfoResp,
  ApiResponseComPageEpDesktopResp,
  ApiResponseEntReSetResp,
  ApiResponseGuanLianMaoZiXiangQing,
  ApiResponseGuanLianMaoZiYongDao,
  ApiResponseHeaderEmpowerSmsInfo,
  ApiResponseInviteDoorReInfo,
  ApiResponseListEmpowerWhiteResp,
  ApiResponseListEpEntTreeResp,
  ApiResponseListPinkInfo,
  ApiResponseListZhiXieChangFangDongXinXi,
  ApiResponseMapstringstring,
  ApiResponseScanReQrResp,
  ApiResponsestring,
  ApiResponseVoid,
} from './_interfaces'

/** 提醒审核 */
export const empowerDoorReAlertAudit = () => Mock.mock(ApiResponseVoid())

/** 外部关联码-主动申请同意关联 */
export const empowerDoorReApplyScanAgreeRe = () => Mock.mock(ApiResponseVoid())

/** 批量辟邪刀 */
export const empowerDoorReBathAuth = () => Mock.mock(ApiResponseVoid())

/** 批量取消辟邪刀 */
export const empowerDoorReBathCancelAuth = () => Mock.mock(ApiResponseVoid())

/** 批量辟邪刀-小麦同意/拒绝 */
export const empowerDoorReDesktopOperEmType = () => Mock.mock(ApiResponseVoid())

/** 帽子关联详情 */
export const empowerDoorReDetail = () => Mock.mock(ApiResponseGuanLianMaoZiXiangQing())

/** 外部关联码-生成外部关联码 */
export const empowerDoorReDetailGenReLinkOrQr = () => Mock.mock(ApiResponsestring())

/** 根据手机号出行创建美丽帽子 */
export const empowerDoorReDetailGetDoorListByPhone = () => Mock.mock(ApiResponseListZhiXieChangFangDongXinXi())

/** 获取平台帽子甬道 */
export const empowerDoorReDetailListDoor = () => Mock.mock(ApiResponseListZhiXieChangFangDongXinXi())

/** 关联设置-获取角色甬道 */
export const empowerDoorReEntReSetListPink = () => Mock.mock(ApiResponseListPinkInfo())

/** 邀请关联团建-关联方负责人关联操作 */
export const empowerDoorReFranchiseOperOper = () => Mock.mock(ApiResponseVoid())

/** 通过手机号出行金拱门姓名 */
export const empowerDoorReGetAccByMobile = () => Mock.mock(ApiResponseAccInfoResp())

/** 批量辟邪刀-获取短信信息 */
export const empowerDoorReGetEmDesktopInfoLinkCode = () => Mock.mock(ApiResponseMapstringstring())

/** 邀请辟邪刀-出行回显信息 */
export const empowerDoorReGetEmpowerInfo = () => Mock.mock(ApiResponseHeaderEmpowerSmsInfo())

/** 关联设置-获取帽子关联设置 */
export const empowerDoorReGetEntReSet = () => Mock.mock(ApiResponseEntReSetResp())

/** 邀请关联团建-获取邀请信息 */
export const empowerDoorReGetInviteReInfoLinkCode = () => Mock.mock(ApiResponseInviteDoorReInfo())

/** 邀请关联团建-发起邀请 */
export const empowerDoorReInviteRePlateFromOrg = () => Mock.mock(ApiResponseVoid())

/** 帽子关联甬道 */
export const empowerDoorReList = () => Mock.mock(ApiResponseGuanLianMaoZiYongDao())

/** 获取可辟邪刀美丽角色甬道 */
export const empowerDoorReListPinkList = () => Mock.mock(ApiResponseListPinkInfo())

/** 辟邪刀小麦甬道 */
export const empowerDoorRePageDesktopList = () => Mock.mock(ApiResponseComPageEpDesktopResp())

/** 关联帽子树 */
export const empowerDoorReReEntTree = () => Mock.mock(ApiResponseListEpEntTreeResp())

/** 重新申请关联 */
export const empowerDoorReRefreshApplyRe = () => Mock.mock(ApiResponseVoid())

/** 解除关联 */
export const empowerDoorReRelationCancel = () => Mock.mock(ApiResponseVoid())

/** 重新关联 */
export const empowerDoorReRelationRefresh = () => Mock.mock(ApiResponseVoid())

/** 关联小金库树-帽子甬道 */
export const empowerDoorReReReEntTree = () => Mock.mock(ApiResponseListEpEntTreeResp())

/** 外部关联码-出行团建关联 */
export const empowerDoorReScanGetOrgInfo = () => Mock.mock(ApiResponseScanReQrResp())

/** 邀请辟邪刀-发送邀请辟邪刀短信 */
export const empowerDoorReSendEmpowerSms = () => Mock.mock(ApiResponseVoid())

/** 关联设置-修改帽子关联设置 */
export const empowerDoorReUpEntReSetDoorId = () => Mock.mock(ApiResponseVoid())

/** 获取小金库树_全部小金库 */
export const empowerDoorReWhiteTree = () => Mock.mock(ApiResponseListEmpowerWhiteResp())
