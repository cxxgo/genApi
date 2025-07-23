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
export const empowerDoorReAlertAuditGet = () => Mock.mock(ApiResponseVoid())

/** 外部关联码-主动申请同意关联 */
export const empowerDoorReApplyScanAgreeReGet = () => Mock.mock(ApiResponseVoid())

/** 批量辟邪刀 */
export const empowerDoorReBathAuthPost = () => Mock.mock(ApiResponseVoid())

/** 批量取消辟邪刀 */
export const empowerDoorReBathCancelAuthPost = () => Mock.mock(ApiResponseVoid())

/** 批量辟邪刀-小麦同意/拒绝 */
export const empowerDoorReDesktopOperEmTypeGet = () => Mock.mock(ApiResponseVoid())

/** 外部关联码-生成外部关联码 */
export const empowerDoorReDetailGenReLinkOrQrGet = () => Mock.mock(ApiResponsestring())

/** 帽子关联详情 */
export const empowerDoorReDetailGet = () => Mock.mock(ApiResponseGuanLianMaoZiXiangQing())

/** 根据手机号出行创建美丽帽子 */
export const empowerDoorReDetailGetDoorListByPhoneGet = () => Mock.mock(ApiResponseListZhiXieChangFangDongXinXi())

/** 获取平台帽子甬道 */
export const empowerDoorReDetailListDoorGet = () => Mock.mock(ApiResponseListZhiXieChangFangDongXinXi())

/** 关联设置-获取角色甬道 */
export const empowerDoorReEntReSetListPinkGet = () => Mock.mock(ApiResponseListPinkInfo())

/** 邀请关联团建-关联方负责人关联操作 */
export const empowerDoorReFranchiseOperOperGet = () => Mock.mock(ApiResponseVoid())

/** 通过手机号出行金拱门姓名 */
export const empowerDoorReGetAccByMobileGet = () => Mock.mock(ApiResponseAccInfoResp())

/** 批量辟邪刀-获取短信信息 */
export const empowerDoorReGetEmDesktopInfoLinkCodeGet = () => Mock.mock(ApiResponseMapstringstring())

/** 邀请辟邪刀-出行回显信息 */
export const empowerDoorReGetEmpowerInfoGet = () => Mock.mock(ApiResponseHeaderEmpowerSmsInfo())

/** 关联设置-获取帽子关联设置 */
export const empowerDoorReGetEntReSetGet = () => Mock.mock(ApiResponseEntReSetResp())

/** 邀请关联团建-获取邀请信息 */
export const empowerDoorReGetInviteReInfoLinkCodeGet = () => Mock.mock(ApiResponseInviteDoorReInfo())

/** 邀请关联团建-发起邀请 */
export const empowerDoorReInviteRePlateFromOrgPost = () => Mock.mock(ApiResponseVoid())

/** 帽子关联甬道 */
export const empowerDoorReListGet = () => Mock.mock(ApiResponseGuanLianMaoZiYongDao())

/** 获取可辟邪刀美丽角色甬道 */
export const empowerDoorReListPinkListGet = () => Mock.mock(ApiResponseListPinkInfo())

/** 辟邪刀小麦甬道 */
export const empowerDoorRePageDesktopListGet = () => Mock.mock(ApiResponseComPageEpDesktopResp())

/** 关联帽子树 */
export const empowerDoorReReEntTreeGet = () => Mock.mock(ApiResponseListEpEntTreeResp())

/** 重新申请关联 */
export const empowerDoorReRefreshApplyReGet = () => Mock.mock(ApiResponseVoid())

/** 解除关联 */
export const empowerDoorReRelationCancelGet = () => Mock.mock(ApiResponseVoid())

/** 重新关联 */
export const empowerDoorReRelationRefreshGet = () => Mock.mock(ApiResponseVoid())

/** 关联小金库树-帽子甬道 */
export const empowerDoorReReReEntTreeGet = () => Mock.mock(ApiResponseListEpEntTreeResp())

/** 外部关联码-出行团建关联 */
export const empowerDoorReScanGetOrgInfoGet = () => Mock.mock(ApiResponseScanReQrResp())

/** 邀请辟邪刀-发送邀请辟邪刀短信 */
export const empowerDoorReSendEmpowerSmsPost = () => Mock.mock(ApiResponseVoid())

/** 关联设置-修改帽子关联设置 */
export const empowerDoorReUpEntReSetDoorIdPost = () => Mock.mock(ApiResponseVoid())

/** 获取小金库树_全部小金库 */
export const empowerDoorReWhiteTreeGet = () => Mock.mock(ApiResponseListEmpowerWhiteResp())
