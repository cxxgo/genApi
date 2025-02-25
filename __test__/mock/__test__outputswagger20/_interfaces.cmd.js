function ApiResponseComPageXiLanHuaLieBiao() {
  return {
    code: 200,
    data: ComPageXiLanHuaLieBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function ComPageXiLanHuaLieBiao() {
  return {
    'records|1-20': [XiLanHuaLieBiao()],
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
function XiLanHuaLieBiao() {
  return {
    areaScope: '@string(5,50)',
    businessLicenseAuditStatus: '@string(5,50)',
    businessLicenseAuthStatus: '@string(5,50)',
    creditCode: '@string(5,50)',
    empowerReId: '@guid',
    endDate: '@datetime',
    firstCooperationTime: '@datetime',
    emoSkyId: '@guid',
    introduceEarthName: '@ctitle(5,10)',
    investment: '@integer(3,1000)',
    personType: '@integer(3,1000)',
  }
}
function ApiResponseListListlong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function ApiResponseListJobCategoryConfigResp() {
  return {
    code: 200,
    'data|1-20': [JobCategoryConfigResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function JobCategoryConfigResp(n = 2) {
  if (n <= 0) {
    return {
      createId: '@guid',
      created: '@datetime',
    }
  }
  n = n - 1

  return {
    'children|1-20': [JobCategoryConfigResp(n)],
    createId: '@guid',
    created: '@datetime',
  }
}
function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [''],
  }
}
function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
  }
}
function ApiResponseobject() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function ApiResponseResumeInfoMobileResp() {
  return {
    code: 200,
    data: ResumeInfoMobileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function ResumeInfoMobileResp() {
  return {
    certStatusMark: '@string(5,50)',
    'certificateNameList|1-20': ['@ctitle(5,10)'],
    'certificates|1-20': [NvWaBuTianLaoBing()],
  }
}
function NvWaBuTianLaoBing() {
  return {
    additionalRemarks: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    certStatusMark: '@string(5,50)',
    sikuCertificateCnt: '@string(5,50)',
  }
}
function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    roleConfigInfo: TomatoInfo(),
  }
}
function EntInviteConfig() {
  return {
    auditState: '@boolean',
    'auditor|1-20': [AuditorInfo()],
    enterpriseId: '@guid',
    id: '@guid',
    openState: '@boolean',
  }
}
function AuditorInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
function TomatoInfo() {
  return {
    'earthMoon|1-20': [MoonInfo()],
    'headerMoon|1-20': [MoonInfo()],
    id: '@guid',
    roleRange: '@string(5,50)',
    syncDeptId: '@guid',
  }
}
function MoonInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
function EarthDeptMetaRespeFanHuiMoXing(n = 2) {
  if (n <= 0) {
    return {
      ancestors: '@string(5,50)',
      leaderEarthId: '@guid',
      mainDept: '@boolean',
      mark: '@string(5,50)',
    }
  }
  n = n - 1

  return {
    ancestors: '@string(5,50)',
    'childDeptList|1-20': [EarthDeptMetaRespeFanHuiMoXing(n)],
    leaderEarthId: '@guid',
    mainDept: '@boolean',
    mark: '@string(5,50)',
  }
}
function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: WhiteDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function WhiteDetailResp() {
  return {
    leaderDesktopInfo: DesktopComplexResp(),
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
  }
}
function DesktopComplexResp() {
  return {
    authStatus: '@boolean',
    createId: '@guid',
    'whiteRespList|1-20': [DesktopWhiteResp()],
    'jobRespList|1-20': [DesktopJobResp()],
    'postRespList|1-20': [DesktopPostResp()],
    realAuth: '@boolean',
    relation: '@string(5,50)',
    sex: '@string(5,50)',
  }
}
function DesktopWhiteResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    mainWhite: '@boolean',
    gratefulId: '@guid',
  }
}
function DesktopJobResp() {
  return {
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
function DesktopPostResp() {
  return {
    desktopId: '@guid',
    postName: '@ctitle(5,10)',
  }
}
function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
function KeyBorardJoinDoorReq() {
  return {
    reason: '@string(5,50)',
    gratefulId: '@guid',
  }
}
module.exports = {
  ApiResponseComPageXiLanHuaLieBiao,
  ComPageXiLanHuaLieBiao,
  XiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
  JobCategoryConfigResp,
  HappyPlanAddCustomerReq,
  HappyPlanAddCustomerListReq,
  ApiResponseobject,
  ApiResponseResumeInfoMobileResp,
  ResumeInfoMobileResp,
  NvWaBuTianLaoBing,
  ApiResponseVoid,
  EntReSetReq,
  EntInviteConfig,
  AuditorInfo,
  TomatoInfo,
  MoonInfo,
  EarthDeptMetaRespeFanHuiMoXing,
  ApiResponseWhiteDetailResp,
  WhiteDetailResp,
  DesktopComplexResp,
  DesktopWhiteResp,
  DesktopJobResp,
  DesktopPostResp,
  ApiResponseListTreelong,
  KeyBorardJoinDoorReq,
}
