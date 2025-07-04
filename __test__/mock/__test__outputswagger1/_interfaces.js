import Mock from 'better-mock'
export function AccInfoResp() {
  return {
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
export function AddOrUpdateCredentialReq() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    credentialTypeCode: '@string(5,50)',
    id: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    scope: '@string(5,50)',
    scopeCode: '@string(5,50)',
    source: '@string(5,50)',
    validDate: '@datetime',
  }
}
export function AddOrUpdateInviteSetReq() {
  return {
    audit: '@boolean',
    'auditorIds|1-20': ['@string(5,50)'],
    id: '@guid',
    open: '@boolean',
    shareType: '@string(5,50)',
  }
}
export function AddOrUpdateJobReq() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentId: '@guid',
  }
}
export function AddVerificationImageReq() {
  return {
    name: '@ctitle(5,10)',
    resource: '@string(5,50)',
    sourceEnum: /RESOURCE|SLIDER/,
  }
}
export function AgentConfigResp() {
  return {
    agentId: '@guid',
    corpId: '@guid',
    nonceStr: '@string(5,50)',
    signature: '@string(5,50)',
    timestamp: '@datetime',
  }
}
export function AliMpLoginReq() {
  return {
    appid: '@guid',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    phoneData: '@integer(13100000000,18999999999)',
    sign: '@string(5,50)',
  }
}
export function ApiResponse() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAccInfoResp() {
  return {
    code: 200,
    data: AccInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseAgentConfigResp() {
  return {
    code: 200,
    data: AgentConfigResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseBiXieDao() {
  return {
    code: 200,
    data: BiXieDao0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseboolean() {
  return {
    code: 200,
    data: '@boolean',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseChannelAppGratefulConfigResp() {
  return {
    code: 200,
    data: ChannelAppGratefulConfigResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseChannelKeyBorardResp() {
  return {
    code: 200,
    data: ChannelKeyBorardResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComLoginResp() {
  return {
    code: 200,
    data: ComLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageBiXieDaoYongDao() {
  return {
    code: 200,
    data: ComPageBiXieDaoYongDao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDesktopAddRecordResp() {
  return {
    code: 200,
    data: ComPageDesktopAddRecordResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDesktopComplexResp() {
  return {
    code: 200,
    data: ComPageDesktopComplexResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDesktopResp() {
  return {
    code: 200,
    data: ComPageDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDoorCredentialResp() {
  return {
    code: 200,
    data: ComPageDoorCredentialResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageDoorIdentificationResp() {
  return {
    code: 200,
    data: ComPageDoorIdentificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageEpDesktopResp() {
  return {
    code: 200,
    data: ComPageEpDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageFangDongShouHuoDiZhiTianJia() {
  return {
    code: 200,
    data: ComPageFangDongShouHuoDiZhiTianJia(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageGuanLianShenHeXinXi() {
  return {
    code: 200,
    data: ComPageGuanLianShenHeXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageInviteDesktopResp() {
  return {
    code: 200,
    data: ComPageInviteDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageLogLoginResp() {
  return {
    code: 200,
    data: ComPageLogLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageTianJiaDouJiangJiBeiJing() {
  return {
    code: 200,
    data: ComPageTianJiaDouJiangJiBeiJing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageXiaoYuanZhuoGuanLi() {
  return {
    code: 200,
    data: ComPageXiaoYuanZhuoGuanLi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseComPageZhiXieChangChuXing() {
  return {
    code: 200,
    data: ComPageZhiXieChangChuXing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCorpWehiallAuthUrlResp() {
  return {
    code: 200,
    data: CorpWehiallAuthUrlResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseCurrentAuthResp() {
  return {
    code: 200,
    data: CurrentAuthResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDescribeFaceVerifyResponse() {
  return {
    code: 200,
    data: DescribeFaceVerifyResponse(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDesktopAllInfoResp() {
  return {
    code: 200,
    data: DesktopAllInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDesktopNoActiveResp() {
  return {
    code: 200,
    data: DesktopNoActiveResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDesktopResp() {
  return {
    code: 200,
    data: DesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    code: 200,
    data: DouJiangJiFangDongXinXiXiangQingBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDouJiangJiFangXingXinXi() {
  return {
    code: 200,
    data: DouJiangJiFangXingXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    code: 200,
    data: DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseEntReSetResp() {
  return {
    code: 200,
    data: EntReSetResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseFangDongXinXi() {
  return {
    code: 200,
    data: FangDongXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseGuanLianMaoZiXiangQing() {
  return {
    code: 200,
    data: GuanLianMaoZiXiangQing(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseGuanLianMaoZiYongDao() {
  return {
    code: 200,
    data: GuanLianMaoZiYongDao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseHeaderEmpowerSmsInfo() {
  return {
    code: 200,
    data: HeaderEmpowerSmsInfo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseImportDesktopResp() {
  return {
    code: 200,
    data: ImportDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseInviteDoorReInfo() {
  return {
    code: 200,
    data: InviteDoorReInfo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseInviteJoinEchoResp() {
  return {
    code: 200,
    data: InviteJoinEchoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseInviteLoginResp() {
  return {
    code: 200,
    data: InviteLoginResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseInviteSetResp() {
  return {
    code: 200,
    data: InviteSetResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseJianChaYaoQingMa() {
  return {
    code: 200,
    data: JianChaYaoQingMa(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseJSONArray() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseJudgeSwitchDoorLimitResp() {
  return {
    code: 200,
    data: JudgeSwitchDoorLimitResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListAuthDoorOrgInfoResp() {
  return {
    code: 200,
    'data|1-20': [AuthDoorOrgInfoResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListEmpowerWhiteResp() {
  return {
    code: 200,
    'data|1-20': [EmpowerWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListEpEntTreeResp() {
  return {
    code: 200,
    'data|1-20': [EpEntTreeResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListExtWhiteResp() {
  return {
    code: 200,
    'data|1-20': [ExtWhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [FangDongXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListFangXingQuDaoZhuangTaiChuXing() {
  return {
    code: 200,
    'data|1-20': [FangXingQuDaoZhuangTaiChuXing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListImportDesktopResp() {
  return {
    code: 200,
    'data|1-20': [ImportDesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListlong() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListMenuResp() {
  return {
    code: 200,
    'data|1-20': [MenuResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListPinkInfo() {
  return {
    code: 200,
    'data|1-20': [PinkInfo()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListPinkResq() {
  return {
    code: 200,
    'data|1-20': [PinkResq()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListPostResp() {
  return {
    code: 200,
    'data|1-20': [PostResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListQueryCatPageHomeResp() {
  return {
    code: 200,
    'data|1-20': [QueryCatPageHomeResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListSelectorDesktopResp() {
  return {
    code: 200,
    'data|1-20': [SelectorDesktopResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListShengChengYaoQing() {
  return {
    code: 200,
    'data|1-20': [ShengChengYaoQing0()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListstring() {
  return {
    code: 200,
    'data|1-20': ['@string(5,50)'],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListSuperManResp() {
  return {
    code: 200,
    'data|1-20': [SuperManResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    'data|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListWenJianShangChuanXiangYing() {
  return {
    code: 200,
    'data|1-20': [WenJianShangChuanXiangYing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListWhiteResp() {
  return {
    code: 200,
    'data|1-20': [WhiteResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListZhiXieChangChuXing() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangChuXing()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseListZhiXieChangFangDongXinXi() {
  return {
    code: 200,
    'data|1-20': [ZhiXieChangFangDongXinXi()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponselong() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMapstringobject() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMapstringstring() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMenuCheckedResp() {
  return {
    code: 200,
    data: MenuCheckedResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseMenuResp() {
  return {
    code: 200,
    data: MenuResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseOcrHappyLicenseBO() {
  return {
    code: 200,
    data: OcrHappyLicenseBO(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseOcrIdCardBackResp() {
  return {
    code: 200,
    data: OcrIdCardBackResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseOcrIdCardFrontResp() {
  return {
    code: 200,
    data: OcrIdCardFrontResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseOrangeerResultResp() {
  return {
    code: 200,
    data: OrangeerResultResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    code: 200,
    data: PageSysDictDuiXiangnullZhiBuXuLieHua(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsePageZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: PageZhiXieChangBoJuZiXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsePinkInfoResq() {
  return {
    code: 200,
    data: PinkInfoResq(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryAccInfoResp() {
  return {
    code: 200,
    data: QueryAccInfoResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryCertFormResp() {
  return {
    code: 200,
    data: QueryCertFormResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryDoorPageHomeResp() {
  return {
    code: 200,
    data: QueryDoorPageHomeResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryJudgeClaimResp() {
  return {
    code: 200,
    data: QueryJudgeClaimResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseQueryWalletBalanceResp() {
  return {
    code: 200,
    data: QueryWalletBalanceResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseScanReQrResp() {
  return {
    code: 200,
    data: ScanReQrResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseSendActiveMessageResp() {
  return {
    code: 200,
    data: SendActiveMessageResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseShenHeTongJiHuanCunSanShiMiao() {
  return {
    code: 200,
    data: ShenHeTongJiHuanCunSanShiMiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseShiftDesktopResp() {
  return {
    code: 200,
    data: ShiftDesktopResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    code: 200,
    data: ShuJuYiZhiXingCaoZuoFanHuiJieGuo(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponsestring() {
  return {
    code: 200,
    data: '@string(5,50)',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseVerificationResp() {
  return {
    code: 200,
    data: VerificationResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: WhiteDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseWhiteLinkDoorResp() {
  return {
    code: 200,
    data: WhiteLinkDoorResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseYaoQingZhuCe() {
  return {
    code: 200,
    data: YaoQingZhuCe(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseZhiXieChangBoJuZiXinXi() {
  return {
    code: 200,
    data: ZhiXieChangBoJuZiXinXi0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseZhiXieChangFangDongXinXiXiangQing() {
  return {
    code: 200,
    data: ZhiXieChangFangDongXinXiXiangQing0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseZhiXieChangJianDanFangXing() {
  return {
    code: 200,
    data: ZhiXieChangJianDanFangXing0(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function ApiResponseZhiXieChangZhuTiXinXi() {
  return {
    code: 200,
    data: ZhiXieChangZhuTiXinXi(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
    traceId: '@guid',
  }
}
export function Attachment() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
    type: '@string(5,50)',
    url: '@url',
  }
}
export function AuditorInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function AuditRelationTotalReq() {
  return {
    endTime: '@datetime',
    startTime: '@datetime',
  }
}
export function AuthDoorOrgInfoResp() {
  return {
    authCount: '',
    authStatus: '@string(5,50)',
    authTypeMap: '',
    chiefly: '@boolean',
    id: '@guid',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    serialNum: '@string(5,50)',
    whiteChildrenDesktopCount: '@string(5,50)',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
  }
}
export function AuthOrgKeyBorardReq() {
  return {
    authFlag: '@boolean',
    certType: /AL_TICKET|COMMON|ESIGN_ALL|ESIGN_ONLY_SIGN|WALLET/,
    'desktopIds|1-20': ['@string(5,50)'],
    doorId: '@guid',
    whiteId: '@guid',
  }
}
export function BasePageReq() {
  return {
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function BiXieDao() {
  return {
    'ids|1-20': ['@string(5,50)'],
    reason: '@string(5,50)',
  }
}
export function BiXieDao0() {
  return {
    list: ComPageBiXieDao(),
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
export function BiXieDao1() {
  return {
    auditName: '@ctitle(5,10)',
    auditStatus: /NO_PASS|PASS|WAIT/,
    auditTime: '@datetime',
    authStatusEnum: /FAIL_AUTH|IN_AUTH|UN_AUTH|WAIT_AUTH/,
    belongDoor: '@string(5,50)',
    id: '@guid',
    initTime: '@datetime',
    mainDep: '@string(5,50)',
    name: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    refuseReason: '@string(5,50)',
    source: /APPLY|BIZ|INVITE/,
  }
}
export function BiXieDaoRuCan() {
  return {
    channelType: /CORP_WEIXIN|DINGDING/,
    code: 200,
    corpId: '@guid',
    redirectUri: '@string(5,50)',
    state: '@string(5,50)',
  }
}
export function BiXieDaoYongDao() {
  return {
    authCount: '@integer(3,1000)',
    branchName: '@ctitle(5,10)',
    branchSerialNo: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    id: '@guid',
    relationStatus: /FAIL_RELATION|IN_RELATION|INVALID_RELATION|UN_RELATION/,
    serialNo: '@string(5,50)',
    waitAuthCount: '@integer(3,1000)',
  }
}
export function BiXieDaoZhongXinChuXingGuoLvTiaoJian() {
  return {
    authFlag: '@boolean',
    certType: /AL_TICKET|COMMON|ESIGN_ALL|ESIGN_ONLY_SIGN|WALLET/,
    'desktopIds|1-20': ['@string(5,50)'],
    desktopMobile: '@string(5,50)',
    desktopName: '@ctitle(5,10)',
    doorId: '@guid',
    page: '@integer(3,1000)',
    size: '20',
    whiteName: '@ctitle(5,10)',
  }
}
export function CatnelCertificate() {
  return {
    allTotalName: '@ctitle(5,10)',
    regEDate: '@datetime',
    reSDate: '@datetime',
    zczyName: '@ctitle(5,10)',
  }
}
export function CatVerifyReq() {
  return {
    cardNo: '@string(5,50)',
    cardValidData: '@string(5,50)',
    idNo: '@string(5,50)',
    metaInfo: '@string(5,50)',
    name: '@ctitle(5,10)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    returnUrl: '@image(200x100, @color, @color)',
    validStatus: '@boolean',
  }
}
export function ChannelAppGratefulConfigAddReq() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    channelType: '@string(5,50)',
    corpId: '@guid',
  }
}
export function ChannelAppGratefulConfigResp() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    appUrl: '@image(200x100, @color, @color)',
    channelType: '@string(5,50)',
    corpId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
    manUrl: '@image(200x100, @color, @color)',
    outIp: '@string(5,50)',
    pcUrl: '@image(200x100, @color, @color)',
    recUrl: '@image(200x100, @color, @color)',
  }
}
export function ChannelAppGratefulConfigUpReq() {
  return {
    aesKey: '@string(5,50)',
    aesToken: '@string(5,50)',
    agentId: '@guid',
    appKey: '@string(5,50)',
    appSecret: '@string(5,50)',
    channelType: '@string(5,50)',
    corpId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
  }
}
export function ChannelComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    channelCorpId: '@guid',
    channelDesktopId: '@guid',
    channelType: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST/,
    uuid: '@guid',
  }
}
export function ChannelKeyBorardResp() {
  return {
    channelCorpId: '@guid',
    channelDesktopId: '@guid',
    channelType: '@string(5,50)',
  }
}
export function CharSequence() {}
export function ChuangJianZhiXieChang() {
  return {
    area: '@string(5,50)',
    city: '@city',
    country: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
export function ComLoginReq() {
  return {
    blue: '@string(5,50)',
    certificate: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    loginModeEnum:
      /CORP_WEIXIN|DINGDING|MOBILE_CODE_FAST|ONE_CLICK|PASSWORD|TOKEN|VERIFICATION_CODE|WECHAT|WECHAT_FAST/,
    uuid: '@guid',
  }
}
export function ComLoginResp() {
  return {
    code: 200,
    newKeyBorard: '@boolean',
    setPassWord: '@boolean',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
export function ComPage() {
  return {
    current: '@string(5,50)',
    'records|1-20': [''],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageBiXieDao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BiXieDao1()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageBiXieDaoYongDao() {
  return {
    current: '@string(5,50)',
    'records|1-20': [BiXieDaoYongDao()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDesktopAddRecordResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopAddRecordResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDesktopComplexResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopComplexResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDoorCredentialResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DoorCredentialResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageDoorIdentificationResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [DoorIdentificationResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageEpDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [EpDesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageFangDongShouHuoDiZhiTianJia() {
  return {
    current: '@string(5,50)',
    'records|1-20': [FangDongShouHuoDiZhiTianJia0()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageGuanLianShenHeXinXi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [GuanLianShenHeXinXi()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageInviteDesktopResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [InviteDesktopResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageLogLoginResp() {
  return {
    current: '@string(5,50)',
    'records|1-20': [LogLoginResp()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageRelationDoorInfo() {
  return {
    current: '@string(5,50)',
    'records|1-20': [RelationDoorInfo()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageTianJiaDouJiangJiBeiJing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [TianJiaDouJiangJiBeiJing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageXiaoYuanZhuoGuanLi() {
  return {
    current: '@string(5,50)',
    'records|1-20': [XiaoYuanZhuoGuanLi0()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function ComPageZhiXieChangChuXing() {
  return {
    current: '@string(5,50)',
    'records|1-20': [ZhiXieChangChuXing()],
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function CompanyInfo() {
  return {
    belongOrg: '@string(5,50)',
    bondType: '@string(5,50)',
    category: '@string(5,50)',
    checkDate: '@datetime',
    city: '@city',
    companyId: '@guid',
    companyName: '@ctitle(5,10)',
    companyScore: '@string(5,50)',
    companyType: '@string(5,50)',
    contributedCapital: '@string(5,50)',
    createTime: '@datetime',
    creditCode: '@string(5,50)',
    district: '@string(5,50)',
    emails: '@email',
    estiblishTime: '@datetime',
    firstPosition: '@string(5,50)',
    happyScope: '@string(5,50)',
    happyTerm: '@string(5,50)',
    labelListV2: '@string(5,50)',
    logo: '@string(5,50)',
    nameen: '@ctitle(5,10)',
    newtestName: '@ctitle(5,10)',
    orgNumber: '@string(5,50)',
    phoneNum: '@integer(13100000000,18999999999)',
    province: '@province',
    regCapital: '@string(5,50)',
    regLocation: '@string(5,50)',
    regNumber: '@string(5,50)',
    regStatus: '@string(5,50)',
    socialStaffNum: '@string(5,50)',
    staffSize: '@string(5,50)',
    taxCode: '@string(5,50)',
    taxpayerQualification: '@string(5,50)',
    updateTime: '@datetime',
    websites: '@string(5,50)',
  }
}
export function Comparableobject() {}
export function CorpWehiallAuthUrlResp() {
  return {
    authUrl: '@image(200x100, @color, @color)',
  }
}
export function CurrentAuthResp() {
  return {
    'menuRoute|1-20': [RouterResp()],
    'permission|1-20': ['@string(5,50)'],
  }
}
export function DescribeFaceVerifyResponse() {
  return {
    code: 200,
    message: '@string(5,50)',
    requestId: '@guid',
    resultObject: DescribeFaceVerifyResponseResultObject(),
  }
}
export function DescribeFaceVerifyResponseResultObject() {
  return {
    deviceToken: '@string(5,50)',
    identityInfo: '@string(5,50)',
    materialInfo: '@string(5,50)',
    passed: '@string(5,50)',
    subCode: '@string(5,50)',
  }
}
export function DesktopAddRecordResp() {
  return {
    adderName: '@ctitle(5,10)',
    adderPhone: '@integer(13100000000,18999999999)',
    addTime: '@datetime',
    desktopName: '@ctitle(5,10)',
    desktopPhone: '@integer(13100000000,18999999999)',
    desktopStatus: /FORBID|NONACTIVATED|NORMAL/,
    email: '@email',
    id: '@guid',
    joinTime: '@datetime',
    'pink|1-20': ['@string(5,50)'],
    refuse: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function DesktopAddReq() {
  return {
    email: '@email',
    keyBorardName: '@ctitle(5,10)',
    mainWhiteId: '@guid',
    mobile: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    'pinkIds|1-20': ['@string(5,50)'],
    relation: '@string(5,50)',
    sex: '@string(5,50)',
  }
}
export function DesktopAllInfoResp() {
  return {
    desktopResp: DesktopResp(),
    'jobRespList|1-20': [JobResp()],
    'pinkRespList|1-20': [PinkResq()],
    'postRespList|1-20': [PostResp()],
    'whiteRespList|1-20': [ExtWhiteResp()],
  }
}
export function DesktopComplexResp() {
  return {
    authStatus: '@boolean',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    'jobRespList|1-20': [DesktopJobResp()],
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    'whiteRespList|1-20': [DesktopWhiteResp()],
  }
}
export function DesktopJobResp() {
  return {
    desktopId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
    jobCode: '@string(5,50)',
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
  }
}
export function DesktopNoActiveResp() {
  return {
    count: '@integer(3,1000)',
    'desktopResp|1-20': [DesktopRespRes()],
  }
}
export function DesktopPostResp() {
  return {
    desktopId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
    postCode: '@string(5,50)',
    postId: '@guid',
    postName: '@ctitle(5,10)',
  }
}
export function DesktopResp() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DesktopRespReq() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DesktopRespRes() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DesktopSelectorReq() {
  return {
    jobId: '@guid',
    whiteId: '@guid',
  }
}
export function DesktopSimpleListReq() {
  return {
    id: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    status: '@string(5,50)',
  }
}
export function DesktopUpReq() {
  return {
    email: '@email',
    id: '@guid',
    'jodIds|1-20': ['@string(5,50)'],
    keyBorardName: '@ctitle(5,10)',
    mainWhiteId: '@guid',
    nickName: '@ctitle(5,10)',
    'postIds|1-20': ['@string(5,50)'],
    sex: '@string(5,50)',
    'whiteIds|1-20': ['@string(5,50)'],
  }
}
export function DesktopWhiteResp() {
  return {
    desktopId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
    mainWhite: '@boolean',
    whiteCode: '@string(5,50)',
    whiteId: '@guid',
    whiteName: '@ctitle(5,10)',
  }
}
export function DoorAuditReq() {
  return {
    endTime: '@datetime',
    franchiseDoorName: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
    startTime: '@datetime',
  }
}
export function DoorBeneficiaryReq() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorAcctId: '@guid',
    doorBeneficiaryConctactPhone: '@integer(13100000000,18999999999)',
    doorBeneficiaryGreen: '@string(5,50)',
    doorBeneficiaryIdCardBackId: '@guid',
    doorBeneficiaryIdCardFileId: '@guid',
    doorBeneficiaryIdCardFrontId: '@guid',
    doorBeneficiaryIdCardNo: '@string(5,50)',
    doorBeneficiaryIdCardType: '@string(5,50)',
    doorBeneficiaryIdCardValidDate: '@datetime',
    doorBeneficiaryIdCardValidStartDate: '@datetime',
    doorBeneficiaryIncomeType: '@string(5,50)',
    doorBeneficiaryName: '@ctitle(5,10)',
    doorBeneficiaryPost: '@string(5,50)',
    doorBeneficiaryShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DoorBeneficiaryResp() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorAcctId: '@guid',
    doorBeneficiaryConctactPhone: '@integer(13100000000,18999999999)',
    doorBeneficiaryGreen: '@string(5,50)',
    doorBeneficiaryIdCardBackId: '@guid',
    doorBeneficiaryIdCardFileId: '@guid',
    doorBeneficiaryIdCardFrontId: '@guid',
    doorBeneficiaryIdCardNo: '@string(5,50)',
    doorBeneficiaryIdCardType: '@string(5,50)',
    doorBeneficiaryIdCardTypeDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorBeneficiaryIdCardValidDate: '@datetime',
    doorBeneficiaryIdCardValidStartDate: '@datetime',
    doorBeneficiaryIncomeType: '@string(5,50)',
    doorBeneficiaryName: '@ctitle(5,10)',
    doorBeneficiaryPost: '@string(5,50)',
    doorBeneficiaryShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DoorCredentialResp() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    credentialTypeCode: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    scope: '@string(5,50)',
    scopeCode: '@string(5,50)',
    source: '@string(5,50)',
    validDate: '@datetime',
  }
}
export function DoorIdentificationReq() {
  return {
    allEInvoiceStatus: '@string(5,50)',
    alTicket: '@string(5,50)',
    authStatus: '@string(5,50)',
    commontStatus: '@string(5,50)',
    esignALlStatus: '@string(5,50)',
    esignOnlySignStatus: '@string(5,50)',
    id: '@guid',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    serialNum: '@string(5,50)',
    size: '20',
    walletStatus: '@string(5,50)',
  }
}
export function DoorIdentificationResp() {
  return {
    authStatus: '@string(5,50)',
    authTypeMap: '',
    'bizAuthType|1-20': [DoorIdentificationType()],
    chiefly: '@boolean',
    id: '@guid',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    serialNum: '@string(5,50)',
    whiteLinkDoorResp: WhiteLinkDoorResp(),
  }
}
export function DoorIdentificationType() {
  return {
    clazz: '@string(5,50)',
    cost: '@string(5,50)',
    function: '@string(5,50)',
    institution: '@string(5,50)',
    interests: '@string(5,50)',
    name: '@ctitle(5,10)',
    status: '@string(5,50)',
    type: '@string(5,50)',
  }
}
export function DoorShareholderReq() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorAcctId: '@guid',
    doorShareholderIdCardBackFileId: '@guid',
    doorShareholderIdCardFileId: '@guid',
    doorShareholderIdCardNo: '@string(5,50)',
    doorShareholderIdCardType: '@string(5,50)',
    doorShareholderIdCardValidDate: '@datetime',
    doorShareholderIdCardValidStartDate: '@datetime',
    doorShareholderName: '@ctitle(5,10)',
    doorShareholderShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DoorShareholderResp() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorAcctId: '@guid',
    doorShareholderIdCardBackFileId: '@guid',
    doorShareholderIdCardFileId: '@guid',
    doorShareholderIdCardNo: '@string(5,50)',
    doorShareholderIdCardType: '@string(5,50)',
    doorShareholderIdCardTypeSysDict: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorShareholderIdCardValidDate: '@datetime',
    doorShareholderIdCardValidStartDate: '@datetime',
    doorShareholderName: '@ctitle(5,10)',
    doorShareholderShareRatio: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function DouJiangJiBeiJingZhuCeZhuanYe() {
  return {
    endDate: '@datetime',
    id: '@guid',
    major: '@string(5,50)',
    majorCode: '@string(5,50)',
    startDate: '@datetime',
  }
}
export function DouJiangJiFangDongXinXiXiangQingBiao() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    country: '@string(5,50)',
    gratefulId: '@guid',
    init: '@boolean',
    keyBorardname: '@ctitle(5,10)',
    location: '@string(5,50)',
    maxNameUpdateNum: '@integer(3,1000)',
    mobile: '@string(5,50)',
    nameUpdateNum: '@integer(3,1000)',
    nickname: '@ctitle(5,10)',
    province: '@province',
    sex: '@string(5,50)',
    xmail: '@string(5,50)',
  }
}
export function DouJiangJiFangXingXinXi() {
  return {
    bankCardNo: '@string(5,50)',
    cardNo: '@string(5,50)',
    cardStartDate: '@datetime',
    cardValidDate: '@datetime',
    green: '@string(5,50)',
    issue: '@string(5,50)',
    keyBorardName: '@ctitle(5,10)',
    nationality: '@string(5,50)',
    ocridCardBack: '@string(5,50)',
    ocridCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    sex: '@string(5,50)',
    validStatus: '@boolean',
  }
}
export function DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu() {
  return {
    birth: '@string(5,50)',
    endDate: '@datetime',
    green: '@string(5,50)',
    idCardNum: '@string(5,50)',
    individualBankCardNo: '@string(5,50)',
    individualCompany: '@string(5,50)',
    individualMail: '@string(5,50)',
    individualReservedPhoneNo: '@integer(13100000000,18999999999)',
    individualVocation: '@string(5,50)',
    issue: '@string(5,50)',
    keyBorardId: '@guid',
    name: '@ctitle(5,10)',
    nationality: '@string(5,50)',
    posUrl: '@image(200x100, @color, @color)',
    revUrl: '@image(200x100, @color, @color)',
    sex: '@string(5,50)',
    startDate: '@datetime',
  }
}
export function EmpowerWhiteResp(n = 2) {
  if (n <= 0) {
    return {
      id: '@guid',
      info: WhiteResp(),
      label: '@string(5,50)',
      parentId: '@guid',
      weight: '@string(5,50)',
    }
  }
  n = n - 1

  return {
    'children|1-20': [EmpowerWhiteResp(n)],
    id: '@guid',
    info: WhiteResp(),
    label: '@string(5,50)',
    parentId: '@guid',
    weight: '@string(5,50)',
  }
}
export function EntInviteConfig() {
  return {
    'auditor|1-20': [AuditorInfo()],
    auditState: '@boolean',
    doorId: '@guid',
    id: '@guid',
    inviteType: '@string(5,50)',
    module: '@string(5,50)',
    openState: '@boolean',
  }
}
export function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
    reInviteConfig: EntInviteConfig(),
  }
}
export function EntReSetResp() {
  return {
    emInviteConfig: EntInviteConfig(),
    pinkConfigInfo: PinkConfigInfo(),
    reInviteConfig: EntInviteConfig(),
  }
}
export function EpDesktopResp() {
  return {
    authStatus: '@boolean',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    jmAuthStatus: '@string(5,50)',
    'jobRespList|1-20': [DesktopJobResp()],
    keyBorardId: '@guid',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    nickName: '@ctitle(5,10)',
    pinkName: '@ctitle(5,10)',
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    refuseReason: '@string(5,50)',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
    sexDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    'whiteRespList|1-20': [DesktopWhiteResp()],
  }
}
export function EpEntTreeResp() {
  return {
    'entMetas|1-20': [ReEntMeta()],
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function ExtWhiteResp() {
  return {
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    desktopId: '@guid',
    email: '@email',
    gratefulId: '@guid',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mainWhite: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function FangDongShouHuoDiZhiTianJia() {
  return {
    area: '@string(5,50)',
    checked: '@boolean',
    city: '@city',
    country: '@string(5,50)',
    location: '@string(5,50)',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
export function FangDongShouHuoDiZhiTianJia0() {
  return {
    area: '@string(5,50)',
    checked: '@boolean',
    city: '@city',
    country: '@string(5,50)',
    id: '@guid',
    location: '@string(5,50)',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
  }
}
export function FangDongXinXi() {
  return {
    authStatus: '@string(5,50)',
    channelBindStatus: '@string(5,50)',
    channelCorpId: '@guid',
    channelType: '@string(5,50)',
    checked: '@boolean',
    clientType: '@string(5,50)',
    desktopStatus: '@string(5,50)',
    gratefulId: '@guid',
    gratefulName: '@ctitle(5,10)',
    init: '@boolean',
    keyBorardId: '@guid',
    kind: '@string(5,50)',
    relation: '@string(5,50)',
    status: '@string(5,50)',
  }
}
export function FangXingQuDaoZhuangTaiChuXing() {
  return {
    certifyId: '@guid',
    clazz: '@string(5,50)',
    cost: '@string(5,50)',
    function: '@string(5,50)',
    institution: '@string(5,50)',
    interests: '@string(5,50)',
    mark: '@string(5,50)',
    name: '@ctitle(5,10)',
    status: '@string(5,50)',
  }
}
export function FenYeChuXingDouJiangJiBeiJing() {
  return {
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function FenYeChuXingSuoYouZhiXieChang() {
  return {
    name: '@ctitle(5,10)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function FileSystemResource() {
  return {
    description: '@string(5,50)',
    file: '',
    filename: '@ctitle(5,10)',
    inputStream: InputStream(),
    open: '@boolean',
    outputStream: OutputStream(),
    path: '@string(5,50)',
    readable: '@boolean',
    uri: '@string(5,50)',
    url: '@url',
    writable: '@boolean',
  }
}
export function GuanLianMaoZiXiangQing() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    authCount: '@integer(3,1000)',
    created: '@datetime',
    id: '@guid',
    preReDoorInfo: ReDoorInfo(),
    reDoorInfo: ReDoorInfo(),
    reDoorSource: /APPLY|BIZ|INVITE/,
    relationAuditInfo: MaoZiGuanLianYouGuanLianShenHeXinXi(),
    relationInfo: MaoZiGuanLianFaQiGuanLianXinXi(),
    relationStatus: /FAIL_RELATION|IN_RELATION|INVALID_RELATION|UN_RELATION/,
    'relationTypeList|1-20': [RelationHappyTypeInfo()],
    syncTime: '@datetime',
    whiteCount: '@integer(3,1000)',
  }
}
export function GuanLianMaoZiYongDao() {
  return {
    inRelateCount: '@integer(3,1000)',
    invalidRelateCount: '@integer(3,1000)',
    list: ComPageRelationDoorInfo(),
    totalCount: '@integer(3,1000)',
    unRelateCount: '@integer(3,1000)',
  }
}
export function GuanLianShenHeXinXi() {
  return {
    auditClassificationEnum: /REVIEWED|UNAUDITED/,
    auditStatus: /NO_PASS|PASS|WAIT/,
    branchName: '@ctitle(5,10)',
    created: '@datetime',
    franchiseDoorName: '@ctitle(5,10)',
    happyLicenseUrl: '@image(200x100, @color, @color)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    id: '@guid',
    relationStatus: /FAIL_RELATION|IN_RELATION|INVALID_RELATION|UN_RELATION/,
    serialNo: '@string(5,50)',
    source: /APPLY|BIZ|INVITE/,
  }
}
export function HeaderEmpowerSmsInfo() {
  return {
    doorId: '@guid',
    gratefulId: '@guid',
    phone: '@integer(13100000000,18999999999)',
  }
}
export function ImportDesktopErrorData() {
  return {
    error: '@string(5,50)',
    id: '@guid',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
  }
}
export function ImportDesktopResp() {
  return {
    'errorDataList|1-20': [ImportDesktopErrorData()],
    errorNum: '@integer(3,1000)',
    errorUrl: '@image(200x100, @color, @color)',
    importDate: '@datetime',
    succNum: '@integer(3,1000)',
  }
}
export function InitAgengConfigReq() {
  return {
    initPage: '@string(5,50)',
  }
}
export function InputStream() {}
export function InviteDesktopResp() {
  return {
    applyReason: '@string(5,50)',
    applyTime: '@datetime',
    desktopStatus: '@string(5,50)',
    id: '@guid',
    inviterName: '@ctitle(5,10)',
    inviterPhone: '@integer(13100000000,18999999999)',
    joinTime: '@datetime',
    proposerId: '@guid',
    proposerName: '@ctitle(5,10)',
    proposerPhone: '@integer(13100000000,18999999999)',
    refuse: '@string(5,50)',
    shareTime: '@datetime',
    shareType: '@string(5,50)',
    status: '@string(5,50)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function InviteDoorReInfo() {
  return {
    doorId: '@guid',
    entName: '@ctitle(5,10)',
    handleStatus: '@boolean',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    inviteCode: '@string(5,50)',
    isHandler: '@boolean',
    reGratefulId: '@guid',
    reId: '@guid',
  }
}
export function InviteJoinEchoResp() {
  return {
    applyType: /ACCORD|INVITE_ADD|INVITE_SHARE/,
    doorCertStatus: '@string(5,50)',
    doorName: '@ctitle(5,10)',
    inviteName: '@ctitle(5,10)',
    joinName: '@ctitle(5,10)',
    key: '@string(5,50)',
    mobile: '@string(5,50)',
  }
}
export function InviteLoginReq() {
  return {
    applyType: /ACCORD|INVITE_ADD|INVITE_SHARE/,
    certificate: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    joinName: '@ctitle(5,10)',
    key: '@string(5,50)',
    mobile: '@string(5,50)',
    uuid: '@guid',
  }
}
export function InviteLoginResp() {
  return {
    gratefulId: '@guid',
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,50)',
    msg: '@string(5,50)',
    newKeyBorard: '@boolean',
    setPassWord: '@boolean',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
export function InviteRePlatFromOrgReq() {
  return {
    doorId: '@guid',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    reGratefulId: '@guid',
  }
}
export function InviteSetResp() {
  return {
    audit: '@boolean',
    'auditorList|1-20': [AuditorInfo()],
    id: '@guid',
    open: '@boolean',
    shareType: '@string(5,50)',
  }
}
export function JianChaYaoQingMa() {
  return {
    gratefulName: '@ctitle(5,10)',
    msg: '@string(5,50)',
  }
}
export function JobAddDesktopReq() {
  return {
    desktopId: '@guid',
    jobCode: '@string(5,50)',
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
  }
}
export function JobResp() {
  return {
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    id: '@guid',
    jobCode: '@string(5,50)',
    modified: '@string(5,50)',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function JudgeSwitchDoorLimitResp() {
  return {
    judge: '@boolean',
    msg: '@string(5,50)',
  }
}
export function KeyBorardJoinDoorReq() {
  return {
    gratefulId: '@guid',
    name: '@ctitle(5,10)',
    reason: '@string(5,50)',
  }
}
export function LogLoginResp() {
  return {
    browser: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    id: '@guid',
    ipaddr: '@string(5,50)',
    loginLocation: '@string(5,50)',
    loginTime: '@datetime',
    mobile: '@string(5,50)',
    modified: '@string(5,50)',
    os: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function MaoZiGuanLianFaQiGuanLianXinXi() {
  return {
    applyName: '@ctitle(5,10)',
    applyPhone: '@integer(13100000000,18999999999)',
    applyTime: '@datetime',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    initTime: '@datetime',
    invitedName: '@ctitle(5,10)',
    invitedPhone: '@integer(13100000000,18999999999)',
    inviteName: '@ctitle(5,10)',
    invitePhone: '@integer(13100000000,18999999999)',
    inviteSource: '@string(5,50)',
    inviteTime: '@datetime',
    sourceEnum: /APPLY|BIZ|INVITE/,
    triggerTime: '@datetime',
  }
}
export function MaoZiGuanLianYouGuanLianShenHeXinXi() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    auditTime: '@datetime',
    name: '@ctitle(5,10)',
    reason: '@string(5,50)',
  }
}
export function MenuCheckedResp() {
  return {
    'checkedKeys|1-20': [MenuDataScopeResp()],
    'menueTree|1-20': [''],
  }
}
export function MenuDataScopeReq() {
  return {
    dataScope: '@integer(3,1000)',
    menuId: '@guid',
    'whiteCodes|1-20': ['@string(5,50)'],
  }
}
export function MenuDataScopeResp() {
  return {
    dataScope: '@integer(3,1000)',
    menuId: '@guid',
    'whiteCodes|1-20': ['@string(5,50)'],
  }
}
export function MenuResp() {
  return {
    appName: '@ctitle(5,10)',
    codeCatalog: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    dataPermissions: '@boolean',
    enable: '@boolean',
    iconUrl: '@image(200x100, @color, @color)',
    id: '@guid',
    level: '@integer(3,1000)',
    loginRequired: '@boolean',
    menuCode: '@string(5,50)',
    menuLargeCategoryName: '@ctitle(5,10)',
    menuName: '@ctitle(5,10)',
    menuOutId: '@guid',
    menuShow: '@boolean',
    menuType: '@integer(3,1000)',
    modified: '@string(5,50)',
    path: '@string(5,50)',
    permIdent: '@string(5,50)',
    pid: '@guid',
    productCode: '@string(5,50)',
    queryParam: '@string(5,50)',
    remarks: '@string(5,50)',
    sort: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function OcrHappyLicenseBO() {
  return {
    capital: '@string(5,50)',
    cat: '@string(5,50)',
    establishDate: '@datetime',
    fake: '@boolean',
    green: '@string(5,50)',
    happy: '@string(5,50)',
    name: '@ctitle(5,10)',
    regNum: '@string(5,50)',
    requestId: '@guid',
    success: '@boolean',
    type: '@string(5,50)',
    validPeriod: '@string(5,50)',
  }
}
export function OcrIdCardBackResp() {
  return {
    endDate: '@datetime',
    fake: '@boolean',
    issue: '@string(5,50)',
    startDate: '@datetime',
    success: '@boolean',
  }
}
export function OcrIdCardFrontResp() {
  return {
    birth: '@string(5,50)',
    fake: '@boolean',
    green: '@string(5,50)',
    name: '@ctitle(5,10)',
    nationality: '@string(5,50)',
    num: '@string(5,50)',
    sex: '@string(5,50)',
    success: '@boolean',
  }
}
export function OcrImageReq() {
  return {
    image: '@string(5,50)',
  }
}
export function OrangeerCertificateInfo() {
  return {
    certificateNumber: '@string(5,50)',
    orangeeredCertificateCompany: '@string(5,50)',
    regNo: '@string(5,50)',
    regTypeName: '@ctitle(5,10)',
    'voList|1-20': [CatnelCertificate()],
  }
}
export function OrangeerResultResp() {
  return {
    mark: '@string(5,50)',
    mobile: '@string(5,50)',
    token: '@string(5,50)',
    tokenTimeOut: '@datetime',
  }
}
export function OrderItem() {
  return {
    asc: '@boolean',
    column: '@string(5,50)',
  }
}
export function OutputStream() {}
export function PageDesktopAddRecordReq() {
  return {
    adderNameOrPhone: '@integer(13100000000,18999999999)',
    desktopNameOrPhone: '@integer(13100000000,18999999999)',
    desktopStatus: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
  }
}
export function PageDoorCredentialReq() {
  return {
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    doorId: '@guid',
    issuingDate: '@datetime',
    office: '@string(5,50)',
    page: '@integer(3,1000)',
    scope: '@string(5,50)',
    size: '20',
    validDate: '@datetime',
  }
}
export function PageInvoiceReq() {
  return {
    dutyNum: '@string(5,50)',
    page: '@integer(3,1000)',
    size: '20',
    title: '@ctitle(5,10)',
  }
}
export function PageSysDictDuiXiangnullZhiBuXuLieHua() {
  return {
    countId: '@guid',
    current: '@string(5,50)',
    maxLimit: '@string(5,50)',
    optimizeCountSql: '@boolean',
    'orders|1-20': [OrderItem()],
    pages: '@string(5,50)',
    'records|1-20': [SysDictDuiXiangnullZhiBuXuLieHua()],
    searchCount: '@boolean',
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function PageZhiXieChangBoJuZiXinXi() {
  return {
    countId: '@guid',
    current: '@string(5,50)',
    maxLimit: '@string(5,50)',
    optimizeCountSql: '@boolean',
    'orders|1-20': [OrderItem()],
    pages: '@string(5,50)',
    'records|1-20': [ZhiXieChangBoJuZiXinXi0()],
    searchCount: '@boolean',
    size: '20',
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function PinkAddReq() {
  return {
    allowAllot: '@boolean',
    'menuDataScopeReqList|1-20': [MenuDataScopeReq()],
    parentId: '@guid',
    pinkName: '@ctitle(5,10)',
    remark: '@string(5,50)',
  }
}
export function PinkBaseUpReq() {
  return {
    id: '@guid',
    pinkName: '@ctitle(5,10)',
    remark: '@string(5,50)',
  }
}
export function PinkConfigInfo() {
  return {
    'desktopPink|1-20': [PinkInfo()],
    'headerPink|1-20': [PinkInfo()],
    id: '@guid',
    pinkRange: '@string(5,50)',
    syncWhiteId: '@guid',
  }
}
export function PinkInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function PinkInfoResq() {
  return {
    allowAllot: '@boolean',
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    id: '@guid',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean',
    menuNames: '@ctitle(5,10)',
    modified: '@string(5,50)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    parentName: '@ctitle(5,10)',
    pinkCode: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
    pinkSort: '@integer(3,1000)',
    remark: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    type: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCheckStrictly: '@boolean',
  }
}
export function PinkMenuUpReq() {
  return {
    'menuDataScopeList|1-20': [MenuDataScopeReq()],
    pinkId: '@guid',
  }
}
export function PinkResq() {
  return {
    allowAllot: '@boolean',
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    id: '@guid',
    level: '@integer(3,1000)',
    menuCheckStrictly: '@boolean',
    menuNames: '@ctitle(5,10)',
    modified: '@string(5,50)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    pinkCode: '@string(5,50)',
    pinkKey: '@string(5,50)',
    pinkName: '@ctitle(5,10)',
    pinkSort: '@integer(3,1000)',
    remark: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    type: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCheckStrictly: '@boolean',
  }
}
export function PostAddOrUpReq() {
  return {
    id: '@guid',
    postName: '@ctitle(5,10)',
    postSort: '@integer(3,1000)',
    workflowKey: '@string(5,50)',
  }
}
export function PostResp() {
  return {
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    id: '@guid',
    modified: '@string(5,50)',
    postCode: '@string(5,50)',
    postName: '@ctitle(5,10)',
    postSort: '@integer(3,1000)',
    status: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function QieHuanMoRenDiZhi() {
  return {
    newGreenId: '@guid',
  }
}
export function QuDaoZhiXieChangJieMengQingQiuRuCan() {
  return {
    channelCorpId: '@guid',
    channelType: /CORP_WEIXIN|DINGDING/,
    desktopId: '@guid',
    dingId: '@guid',
    gratefulId: '@guid',
    keyBorardId: '@guid',
  }
}
export function QueryAccInfoResp() {
  return {
    mobile: '@string(5,50)',
    setPassWord: '@boolean',
    status: '@string(5,50)',
  }
}
export function QueryCatPageHomeResp() {
  return {
    cardNo: '@string(5,50)',
    catRepetitionId: '@guid',
    companyName: '@ctitle(5,10)',
    name: '@ctitle(5,10)',
    sex: '@string(5,50)',
    'vosList|1-20': [OrangeerCertificateInfo()],
  }
}
export function QueryCertFormResp() {
  return {
    cardNo: '@string(5,50)',
    cardValidData: '@string(5,50)',
    idNo: '@string(5,50)',
    name: '@ctitle(5,10)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    validStatus: '@boolean',
  }
}
export function QueryDesktopByPhoneOrNameReq() {
  return {
    jobId: '@guid',
    phoneOrName: '@integer(13100000000,18999999999)',
  }
}
export function QueryDoorPageHomeResp() {
  return {
    companyInfo: CompanyInfo(),
  }
}
export function QueryInviteDesktopReq() {
  return {
    applyTimeEnd: '@datetime',
    applyTimeStart: '@datetime',
    desktopStatus: '@string(5,50)',
    inviterPhoneOrName: '@integer(13100000000,18999999999)',
    joinTimeEnd: '@datetime',
    joinTimeStart: '@datetime',
    page: '@integer(3,1000)',
    proposerPhone: '@integer(13100000000,18999999999)',
    proposerPhoneOrName: '@integer(13100000000,18999999999)',
    shareType: '@string(5,50)',
    size: '20',
    status: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function QueryJobReq() {
  return {
    ancestors: '@string(5,50)',
    jobCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    status: '@string(5,50)',
  }
}
export function QueryJudgeClaimResp() {
  return {
    operResult: '@string(5,50)',
  }
}
export function QueryWalletBalanceResp() {
  return {
    availableAmount: '@string(5,50)',
    bankcardNumber: '@string(5,50)',
    bankName: '@ctitle(5,10)',
    blueId: '@guid',
    blueNumber: '@string(5,50)',
    companyName: '@ctitle(5,10)',
    frozenAmount: '@string(5,50)',
  }
}
export function ReDoorInfo() {
  return {
    doorName: '@ctitle(5,10)',
    happyLicenseCode: '@string(5,50)',
    headerName: '@ctitle(5,10)',
    headerPhone: '@integer(13100000000,18999999999)',
    isAuth: /CERTIFIED|UNCERTIFICATED/,
    serialNo: '@string(5,50)',
  }
}
export function ReEntMeta() {
  return {
    reDoorId: '@guid',
    reName: '@ctitle(5,10)',
    whiteCode: '@string(5,50)',
  }
}
export function RefuseJoinReq() {
  return {
    id: '@guid',
    refuse: '@string(5,50)',
  }
}
export function RelationDoorInfo() {
  return {
    auditStatus: /NO_PASS|PASS|WAIT/,
    authCount: '@integer(3,1000)',
    created: '@datetime',
    happyLicenseCode: '@string(5,50)',
    id: '@guid',
    name: '@ctitle(5,10)',
    preDoorName: '@ctitle(5,10)',
    relationStatus: /FAIL_RELATION|IN_RELATION|INVALID_RELATION|UN_RELATION/,
  }
}
export function RelationHappyTypeInfo() {
  return {
    happyType: '@string(5,50)',
    initTime: '@datetime',
    reSource: /APPLY|BIZ|INVITE/,
  }
}
export function RemoveDesktopReq() {
  return {
    'desktopId|1-20': ['@guid'],
    jobId: '@guid',
  }
}
export function RouterMetaResp() {
  return {
    hideInMenu: '@boolean',
    icon: '@string(5,50)',
    locale: '@string(5,50)',
    menuType: '@integer(3,1000)',
    order: '@integer(3,1000)',
    requiresAuth: '@boolean',
  }
}
export function RouterResp(n = 2) {
  if (n <= 0) {
    return {
      id: '@guid',
      meta: RouterMetaResp(),
      name: '@ctitle(5,10)',
      path: '@string(5,50)',
      query: '@string(5,50)',
      redirect: '@string(5,50)',
    }
  }
  n = n - 1

  return {
    'children|1-20': [RouterResp(n)],
    id: '@guid',
    meta: RouterMetaResp(),
    name: '@ctitle(5,10)',
    path: '@string(5,50)',
    query: '@string(5,50)',
    redirect: '@string(5,50)',
  }
}
export function ScanReQrResp() {
  return {
    auditId: '@guid',
    entName: '@ctitle(5,10)',
    status: /IN_AUDIT|IN_RELATION|INIT/,
  }
}
export function SelectorDesktopResp() {
  return {
    desktopId: '@guid',
    isJoin: '@boolean',
    keyBorardName: '@ctitle(5,10)',
    mobile: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function SendActiveMessageReq() {
  return {
    'sendDesktopList|1-20': [DesktopRespReq()],
  }
}
export function SendActiveMessageResp() {
  return {
    failedCount: '@string(5,50)',
    successCount: '@string(5,50)',
  }
}
export function SetPassWordReq() {
  return {
    checkPassWord: '@string(5,50)',
    passWord: '@string(5,50)',
  }
}
export function ShengChengYaoQing() {
  return {
    audit: '@boolean',
    inviteShareType: /ALL|INCODE|LINK|QRCODE/,
    whiteId: '@guid',
  }
}
export function ShengChengYaoQing0() {
  return {
    batchId: '@guid',
    gratefulName: '@ctitle(5,10)',
    inviterId: '@guid',
    inviterName: '@ctitle(5,10)',
    shareMark: '@string(5,50)',
    shareTime: '@datetime',
    shareType: '@string(5,50)',
    whiteCode: '@string(5,50)',
  }
}
export function ShenHeTongGuo() {
  return {
    id: '@guid',
    'pinkId|1-20': ['@guid'],
    proposerId: '@guid',
    proposerName: '@ctitle(5,10)',
    proposerPhone: '@integer(13100000000,18999999999)',
    whiteId: '@guid',
  }
}
export function ShenHeTongJiHuanCunSanShiMiao() {
  return {
    reviewedNum: '@integer(3,1000)',
    unauditedNum: '@integer(3,1000)',
  }
}
export function ShiftDesktopResp() {
  return {
    desktopId: '@guid',
    desktopName: '@ctitle(5,10)',
    'leaders|1-20': [ShiftLeader()],
  }
}
export function ShiftLeader() {
  return {
    leaderDesktopId: '@guid',
    leaderDesktopName: '@ctitle(5,10)',
  }
}
export function ShuJuYiZhiXingCaoZuoFanHuiJieGuo() {
  return {
    'result|1-20': [XiaoYanJieGuo()],
    serialNumber: '@string(5,50)',
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShu() {
  return {
    dataId: '@guid',
    'dataSyncSystemReqs|1-20': [ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo()],
    serialNumber: '@string(5,50)',
  }
}
export function ShuJuYiZhiXingErCiQueRenCanShuXiTongDuiYingMeiLiCaoZuo() {
  return {
    resultHandleTypeEnum: /DELETE|SHIFT/,
    shiftDataId: '@guid',
    systemName: '@ctitle(5,10)',
  }
}
export function StationDesktopAuthReq() {
  return {
    'desktopIds|1-20': ['@string(5,50)'],
    doorId: '@guid',
    'pinkIds|1-20': ['@string(5,50)'],
  }
}
export function SuperCodeVerifyReq() {
  return {
    certificate: '@string(5,50)',
    mobile: '@string(5,50)',
    toMobile: '@string(5,50)',
    uuid: '@guid',
  }
}
export function SuperManResp() {
  return {
    authRange: '@string(5,50)',
    desktopIsCreator: '@boolean',
    id: '@guid',
    mobile: '@string(5,50)',
    name: '@ctitle(5,10)',
    superPink: '@string(5,50)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function SysDictDuiXiangnullZhiBuXuLieHua(n = 2) {
  if (n <= 0) {
    return {
      'allLevelKindName|1-20': ['@ctitle(5,10)'],
      childFlag: '@integer(3,1000)',
      deleted: '@boolean',
      id: '@guid',
      introduce: '@string(5,50)',
      kindCode: '@string(5,50)',
      kindName: '@ctitle(5,10)',
      parentId: '@guid',
      sortNum: '@integer(3,1000)',
      type: '@integer(3,1000)',
    }
  }
  n = n - 1

  return {
    'allLevelKindName|1-20': ['@ctitle(5,10)'],
    childFlag: '@integer(3,1000)',
    'childList|1-20': [SysDictDuiXiangnullZhiBuXuLieHua(n)],
    deleted: '@boolean',
    id: '@guid',
    introduce: '@string(5,50)',
    kindCode: '@string(5,50)',
    kindName: '@ctitle(5,10)',
    parentId: '@guid',
    sortNum: '@integer(3,1000)',
    type: '@integer(3,1000)',
  }
}
export function TianJiaDouJiangJiBeiJing() {
  return {
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    id: '@guid',
    industryType: '@string(5,50)',
    issueDate: '@datetime',
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: '@string(5,50)',
    orangeerNo: '@string(5,50)',
    scope: '@string(5,50)',
    source: '@string(5,50)',
  }
}
export function TianJiaDouJiangJiBeiJing0() {
  return {
    attachment: '@string(5,50)',
    'attachments|1-20': [Attachment()],
    credentialNo: '@string(5,50)',
    credentialType: '@string(5,50)',
    industryType: '@string(5,50)',
    issueDate: '@datetime',
    'majors|1-20': [DouJiangJiBeiJingZhuCeZhuanYe()],
    office: '@string(5,50)',
    orangeerNo: '@string(5,50)',
    scope: '@string(5,50)',
    source: '@string(5,50)',
  }
}
export function TreeNodeConfig() {
  return {
    childrenKey: '@string(5,50)',
    deep: '@integer(3,1000)',
    idKey: '@string(5,50)',
    nameKey: '@ctitle(5,10)',
    parentIdKey: '@string(5,50)',
    weightKey: '@string(5,50)',
  }
}
export function Type() {
  return {
    typeName: '@ctitle(5,10)',
  }
}
export function VerificationResp() {
  return {
    bankCarkNo: '@string(5,50)',
    cardNo: '@string(5,50)',
    cardVaildDate: '@datetime',
    certifyId: '@guid',
    certifyUrl: '@image(200x100, @color, @color)',
    code: 200,
    keyBorardName: '@ctitle(5,10)',
    message: '@string(5,50)',
    ocrIdCardBack: '@string(5,50)',
    ocrIdCardFront: '@string(5,50)',
    openBank: '@string(5,50)',
    profession: '@string(5,50)',
    requestId: '@guid',
    vaildStatus: '@boolean',
  }
}
export function WenJianShangChuanXiangYing() {
  return {
    cdnDomain: '@string(5,50)',
    errorMsg: '@string(5,50)',
    id: '@guid',
    name: '@ctitle(5,10)',
    objectKey: '@string(5,50)',
    uploadResult: '@boolean',
    url: '@url',
  }
}
export function WhiteAddReq() {
  return {
    leaderDesktopId: '@guid',
    mark: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentId: '@guid',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function WhiteDetailResp() {
  return {
    ancestors: '@string(5,50)',
    channelWhiteName: '@ctitle(5,10)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderDesktopInfo: DesktopComplexResp(),
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    parentName: '@ctitle(5,10)',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function WhiteLinkDoorReq() {
  return {
    doorId: '@guid',
    overFlag: '@boolean',
    whiteId: '@guid',
  }
}
export function WhiteLinkDoorResp() {
  return {
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorId: '@guid',
    email: '@email',
    gratefulId: '@guid',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function WhiteResp() {
  return {
    ancestors: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    email: '@email',
    gratefulId: '@guid',
    id: '@guid',
    leaderDesktopId: '@guid',
    leaderKeyBorardId: '@guid',
    linkStatus: '@boolean',
    mark: '@string(5,50)',
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    orderNum: '@integer(3,1000)',
    parentCode: '@string(5,50)',
    parentId: '@guid',
    phone: '@integer(13100000000,18999999999)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    statusDesc: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    whiteCode: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function WhiteUpReq() {
  return {
    id: '@guid',
    leaderDesktopId: '@guid',
    orderNum: '@integer(3,1000)',
    profile: '@string(5,50)',
    scaleType: '@string(5,50)',
    whiteName: '@ctitle(5,10)',
  }
}
export function XiaoYanJieGuo() {
  return {
    dataSyncHandleTypeEnum: /DELETE|SHIFT|SHIFT_OR_DELETE|SKIP/,
    failedMessage: '@string(5,50)',
    resultFlag: '@boolean',
    skipUrl: '@image(200x100, @color, @color)',
    systemName: '@ctitle(5,10)',
    systemNameStr: '@ctitle(5,10)',
  }
}
export function XiaoYuanZhuoGuanLi() {
  return {
    bank: '@string(5,50)',
    bankAccNo: '@string(5,50)',
    doorGreen: '@string(5,50)',
    doorMobile: '@string(5,50)',
    dutyNum: '@string(5,50)',
    id: '@guid',
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
export function XiaoYuanZhuoGuanLi0() {
  return {
    bank: '@string(5,50)',
    bankAccNo: '@string(5,50)',
    doorGreen: '@string(5,50)',
    doorMobile: '@string(5,50)',
    dutyNum: '@string(5,50)',
    id: '@guid',
    title: '@ctitle(5,10)',
    type: '@string(5,50)',
  }
}
export function XiuGaiDouJiangJiXinXi() {
  return {
    area: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    country: '@string(5,50)',
    keyBorardname: '@ctitle(5,10)',
    location: '@string(5,50)',
    nickname: '@ctitle(5,10)',
    province: '@province',
    sex: '@string(5,50)',
    xmail: '@string(5,50)',
  }
}
export function XiuGaiMiMa() {
  return {
    checkPassWord: '@string(5,50)',
    mobile: '@string(5,50)',
    oldPassword: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
export function YaoQingZhuCe() {
  return {
    inviteCode: '@string(5,50)',
    inviteStatus: '@integer(3,1000)',
    mobile: '@string(5,50)',
    msg: '@string(5,50)',
  }
}
export function YaoQingZhuCe0() {
  return {
    inviteCode: '@string(5,50)',
  }
}
export function ZhaoHuiMiMa() {
  return {
    checkPassWord: '@string(5,50)',
    mobile: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
export function ZhiXieChangBoJuZiXinXi() {
  return {
    authStatus: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorBankCardNo: '@string(5,50)',
    doorBankCode: '@string(5,50)',
    doorBankName: '@ctitle(5,10)',
    doorBasicBlueOpenVoucherId: '@guid',
    'doorBeneficiaryList|1-20': [DoorBeneficiaryReq()],
    doorCaElectronicSignature: '@string(5,50)',
    doorContactIdCardBackId: '@guid',
    doorContactIdCardFrontId: '@guid',
    doorContactName: '@ctitle(5,10)',
    doorContactPhone: '@integer(13100000000,18999999999)',
    doorHappyScope: '@string(5,50)',
    doorId: '@guid',
    doorJoinProtocolId: '@guid',
    doorLegalIdCardBackId: '@guid',
    doorLegalIdCardFrontId: '@guid',
    doorLegalIdCardNo: '@string(5,50)',
    doorLegalIdCardType: '@string(5,50)',
    doorLegalIdCardValidDate: '@datetime',
    doorLegalIdCardValidStartDate: '@datetime',
    doorLegalName: '@ctitle(5,10)',
    doorLegalPhone: '@integer(13100000000,18999999999)',
    doorLicenseFileDuplicateId: '@guid',
    doorLicenseFileId: '@guid',
    doorLicenseName: '@ctitle(5,10)',
    doorLicenseValidDate: '@datetime',
    doorLicenseValidStartDate: '@datetime',
    doorName: '@ctitle(5,10)',
    doorOpenBluePermit: '@string(5,50)',
    doorOpratorAttorneyLetter: '@string(5,50)',
    doorOpratorIdCardNo: '@string(5,50)',
    doorOpratorIdCardType: '@string(5,50)',
    doorOpratorIdCardValidDate: '@datetime',
    doorOpratorIdCardValidStartDate: '@datetime',
    doorRealGreen: '@string(5,50)',
    'doorShareholderList|1-20': [DoorShareholderReq()],
    doorStorePictureId: '@guid',
    doorTrade: '@string(5,50)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,50)',
    doorUpDoorId: '@guid',
    doorUpDoorName: '@ctitle(5,10)',
    doorUpLegalBasicBlueOpenVoucherId: '@guid',
    doorUpLegalDoorUnifiedCode: '@string(5,50)',
    doorUpLegalIdCardBackId: '@guid',
    doorUpLegalIdCardFrontId: '@guid',
    doorUpLegalIdCardNo: '@string(5,50)',
    doorUpLegalIdCardType: '@string(5,50)',
    doorUpLegalLicenseDuplicateFileId: '@guid',
    doorUpLegalLicenseFileId: '@guid',
    doorUpLegalLicenseName: '@ctitle(5,10)',
    doorUpLegalLicenseNo: '@string(5,50)',
    doorUpLegalLicenseType: '@string(5,50)',
    doorUpLegalName: '@ctitle(5,10)',
    green: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    msg: '@string(5,50)',
    stepNum: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function ZhiXieChangBoJuZiXinXi0() {
  return {
    authStatus: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    doorBankCardNo: '@string(5,50)',
    doorBankCode: '@string(5,50)',
    doorBankName: '@ctitle(5,10)',
    doorBasicBlueOpenVoucherId: '@guid',
    'doorBeneficiaryList|1-20': [DoorBeneficiaryResp()],
    doorCaElectronicSignature: '@string(5,50)',
    doorContactIdCardBackId: '@guid',
    doorContactIdCardFrontId: '@guid',
    doorContactName: '@ctitle(5,10)',
    doorContactPhone: '@integer(13100000000,18999999999)',
    doorHappyScope: '@string(5,50)',
    doorId: '@guid',
    doorJoinProtocolId: '@guid',
    doorLegalIdCardBackId: '@guid',
    doorLegalIdCardFrontId: '@guid',
    doorLegalIdCardNo: '@string(5,50)',
    doorLegalIdCardType: '@string(5,50)',
    doorLegalIdCardValidDate: '@datetime',
    doorLegalIdCardValidStartDate: '@datetime',
    doorLegalName: '@ctitle(5,10)',
    doorLegalPhone: '@integer(13100000000,18999999999)',
    doorLicenseFileDuplicateId: '@guid',
    doorLicenseFileId: '@guid',
    doorLicenseName: '@ctitle(5,10)',
    doorLicenseValidDate: '@datetime',
    doorLicenseValidStartDate: '@datetime',
    doorName: '@ctitle(5,10)',
    doorOpenBluePermit: '@string(5,50)',
    doorOpratorAttorneyLetter: '@string(5,50)',
    doorOpratorIdCardNo: '@string(5,50)',
    doorOpratorIdCardType: '@string(5,50)',
    doorOpratorIdCardValidDate: '@datetime',
    doorOpratorIdCardValidStartDate: '@datetime',
    doorRealGreen: '@string(5,50)',
    'doorShareholderList|1-20': [DoorShareholderResp()],
    doorStorePictureId: '@guid',
    doorTrade: '@string(5,50)',
    doorTradeName: SysDictDuiXiangnullZhiBuXuLieHua(),
    doorUnifiedCode: '@string(5,50)',
    doorUpDoorId: '@guid',
    doorUpDoorName: '@ctitle(5,10)',
    doorUpLegalBasicBlueOpenVoucherId: '@guid',
    doorUpLegalDoorUnifiedCode: '@string(5,50)',
    doorUpLegalIdCardBackId: '@guid',
    doorUpLegalIdCardFrontId: '@guid',
    doorUpLegalIdCardNo: '@string(5,50)',
    doorUpLegalIdCardType: '@string(5,50)',
    doorUpLegalLicenseDuplicateFileId: '@guid',
    doorUpLegalLicenseFileId: '@guid',
    doorUpLegalLicenseName: '@ctitle(5,10)',
    doorUpLegalLicenseNo: '@string(5,50)',
    doorUpLegalLicenseType: '@string(5,50)',
    doorUpLegalName: '@ctitle(5,10)',
    green: '@string(5,50)',
    id: '@guid',
    isDelete: '@string(5,50)',
    modified: '@string(5,50)',
    msg: '@string(5,50)',
    stepNum: '@integer(3,1000)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
  }
}
export function ZhiXieChangChuXing() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    firmSize: '@string(5,50)',
    gratefulId: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    joinStatus: /HAS_APPLY|HAS_JOIN|NO_JOIN/,
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    xmail: '@string(5,50)',
  }
}
export function ZhiXieChangChuXing0() {
  return {
    doorName: '@ctitle(5,10)',
    name: '@ctitle(5,10)',
  }
}
export function ZhiXieChangFangDongXinXi() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    chiefly: '@boolean',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    gratefulId: '@guid',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    licenseUnifiedUrl: '@image(200x100, @color, @color)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    xmail: '@string(5,50)',
  }
}
export function ZhiXieChangFangDongXinXiXiangQing() {
  return {
    area: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    xmail: '@string(5,50)',
  }
}
export function ZhiXieChangFangDongXinXiXiangQing0() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    city: '@city',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    firmSize: '@string(5,50)',
    gratefulId: '@guid',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    init: '@boolean',
    introduction: '@string(5,50)',
    legalCat: '@string(5,50)',
    location: '@string(5,50)',
    maxNameUpdateNum: '@integer(3,1000)',
    name: '@ctitle(5,10)',
    nameUpdateNum: '@integer(3,1000)',
    province: '@province',
    xmail: '@string(5,50)',
  }
}
export function ZhiXieChangJianDanFangXing() {
  return {
    adminCardNo: '@string(5,50)',
    adminName: '@ctitle(5,10)',
    certificateAuth: '@string(5,50)',
    certificateAuthStatus: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    institutionLegalCatCertificateUrl: '@image(200x100, @color, @color)',
    legalBankNo: '@string(5,50)',
    legalBankPhone: '@integer(13100000000,18999999999)',
    legalBankPhoneVerificationCode: '@integer(13100000000,18999999999)',
    legalCat: '@string(5,50)',
    legalCatCardNo: '@string(5,50)',
    licenseFileUrl: '@image(200x100, @color, @color)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orgType: '@string(5,50)',
    unifiedSocialCreditCodeCertificateUrl: '@image(200x100, @color, @color)',
  }
}
export function ZhiXieChangJianDanFangXing0() {
  return {
    adminCardNo: '@string(5,50)',
    adminName: '@ctitle(5,10)',
    certificateAuth: '@string(5,50)',
    certificateAuthStatus: '@string(5,50)',
    doorId: '@guid',
    id: '@guid',
    institutionLegalCatCertificateUrl: '@image(200x100, @color, @color)',
    legalBankNo: '@string(5,50)',
    legalBankPhone: '@integer(13100000000,18999999999)',
    legalCat: '@string(5,50)',
    legalCatCardNo: '@string(5,50)',
    licenseFileUrl: '@image(200x100, @color, @color)',
    licenseUnifiedCode: '@string(5,50)',
    name: '@ctitle(5,10)',
    orgType: '@string(5,50)',
    unifiedSocialCreditCodeCertificateUrl: '@image(200x100, @color, @color)',
  }
}
export function ZhiXieChangZhiNenPiaoJiaFangXing() {
  return {
    clerkLoginPassword: '@string(5,50)',
    clerkPhone: '@integer(13100000000,18999999999)',
    clerkPink: '@string(5,50)',
    contactNumber: '@string(5,50)',
    doorId: '@guid',
    gratefulId: '@guid',
    id: '@guid',
    taxNum: '@string(5,50)',
  }
}
export function ZhiXieChangZhuTiXinXi() {
  return {
    area: '@string(5,50)',
    authStatus: '@string(5,50)',
    avatar: '@image(200x100, @color, @color)',
    chiefly: '@boolean',
    city: '@city',
    claimId: '@guid',
    contactNumber: '@string(5,50)',
    country: '@string(5,50)',
    created: '@datetime',
    createId: '@guid',
    createName: '@ctitle(5,10)',
    firmSize: '@string(5,50)',
    gratefulId: '@guid',
    id: '@guid',
    industryInvolved: '@string(5,50)',
    introduction: '@string(5,50)',
    isDelete: '@string(5,50)',
    keyBorardId: '@guid',
    legalCat: '@string(5,50)',
    legalIdCardBack: '@string(5,50)',
    legalIdCardFront: '@string(5,50)',
    legalIdCardNo: '@string(5,50)',
    licenseUnifiedCode: '@string(5,50)',
    licenseUnifiedUrl: '@image(200x100, @color, @color)',
    location: '@string(5,50)',
    modified: '@string(5,50)',
    name: '@ctitle(5,10)',
    province: '@province',
    serialNum: '@string(5,50)',
    updateId: '@guid',
    updateName: '@ctitle(5,10)',
    xmail: '@string(5,50)',
  }
}
export function ZhuCeQingQiu() {
  return {
    checkPassWord: '@string(5,50)',
    clientType: /ALI_MP|ANDROID|DEVICE_END|H5|IOS|MOBILE_END|PC|WECHAT_MP/,
    clientVersion: '@string(5,50)',
    deviceCode: '@string(5,50)',
    deviceManufacturer: '@string(5,50)',
    deviceModel: '@string(5,50)',
    mobile: '@string(5,50)',
    passWord: '@string(5,50)',
    uuid: '@guid',
    verificationCode: '@string(5,50)',
  }
}
