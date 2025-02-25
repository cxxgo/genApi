import Mock from 'better-mock'
export function ApiResponseComPageXiLanHuaLieBiao() {
  return {
    code: 200,
    data: ComPageXiLanHuaLieBiao(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function ComPageXiLanHuaLieBiao() {
  return {
    'records|1-20': [XiLanHuaLieBiao()],
    total: () => {
      return +this.size * 10 || 100
    },
  }
}
export function XiLanHuaLieBiao() {
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
export function ApiResponseListListlong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function ApiResponseListJobCategoryConfigResp() {
  return {
    code: 200,
    'data|1-20': [JobCategoryConfigResp()],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function JobCategoryConfigResp(n = 2) {
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
export function HappyPlanAddCustomerReq() {
  return {
    'addCustomerList|1-20': [HappyPlanAddCustomerListReq()],
    'dateList|1-20': [''],
  }
}
export function HappyPlanAddCustomerListReq() {
  return {
    customerType: '@string(5,50)',
    id: '@guid',
  }
}
export function ApiResponseobject() {
  return {
    code: 200,
    data: '',
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function ApiResponseResumeInfoMobileResp() {
  return {
    code: 200,
    data: ResumeInfoMobileResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function ResumeInfoMobileResp() {
  return {
    certStatusMark: '@string(5,50)',
    'certificateNameList|1-20': ['@ctitle(5,10)'],
    'certificates|1-20': [NvWaBuTianLaoBing()],
  }
}
export function NvWaBuTianLaoBing() {
  return {
    additionalRemarks: '@string(5,50)',
    blacklistRecordCnt: '@string(5,50)',
    certStatusMark: '@string(5,50)',
    sikuCertificateCnt: '@string(5,50)',
  }
}
export function ApiResponseVoid() {
  return {
    code: 200,
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function EntReSetReq() {
  return {
    emInviteConfig: EntInviteConfig(),
    reInviteConfig: EntInviteConfig(),
    roleConfigInfo: TomatoInfo(),
  }
}
export function EntInviteConfig() {
  return {
    auditState: '@boolean',
    'auditor|1-20': [AuditorInfo()],
    enterpriseId: '@guid',
    id: '@guid',
    openState: '@boolean',
  }
}
export function AuditorInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function TomatoInfo() {
  return {
    'earthMoon|1-20': [MoonInfo()],
    'headerMoon|1-20': [MoonInfo()],
    id: '@guid',
    roleRange: '@string(5,50)',
    syncDeptId: '@guid',
  }
}
export function MoonInfo() {
  return {
    id: '@guid',
    name: '@ctitle(5,10)',
  }
}
export function EarthDeptMetaRespeFanHuiMoXing(n = 2) {
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
export function ApiResponseWhiteDetailResp() {
  return {
    code: 200,
    data: WhiteDetailResp(),
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function WhiteDetailResp() {
  return {
    leaderDesktopInfo: DesktopComplexResp(),
    markDesc: '@string(5,50)',
    modified: '@string(5,50)',
    scaleTypeDesc: '@string(5,50)',
    status: '@string(5,50)',
    updateId: '@guid',
  }
}
export function DesktopComplexResp() {
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
export function DesktopWhiteResp() {
  return {
    desktopId: '@guid',
    id: '@guid',
    mainWhite: '@boolean',
    gratefulId: '@guid',
  }
}
export function DesktopJobResp() {
  return {
    jobId: '@guid',
    jobName: '@ctitle(5,10)',
    gratefulId: '@guid',
  }
}
export function DesktopPostResp() {
  return {
    desktopId: '@guid',
    postName: '@ctitle(5,10)',
  }
}
export function ApiResponseListTreelong() {
  return {
    code: 200,
    'data|1-20': [''],
    msg: '@string(5,50)',
    success: '@boolean',
    timestamp: '@datetime',
  }
}
export function KeyBorardJoinDoorReq() {
  return {
    reason: '@string(5,50)',
    gratefulId: '@guid',
  }
}
