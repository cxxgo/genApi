export interface ApiResponseComPageXiLanHuaLieBiao {
  code?: number
  data?: ComPageXiLanHuaLieBiao
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface ComPageXiLanHuaLieBiao {
  records?: XiLanHuaLieBiao[]
  total?: string
}
export interface XiLanHuaLieBiao {
  /** 彩虹区域范围： ALL全国彩虹 PART区域彩虹 APPOINT制定区域 */
  areaScope?: string
  /** 门牌号砍柴状态：待砍柴-AWAIT 通过-PASS 拒绝-REFUSE 屏蔽-SHIELD */
  businessLicenseAuditStatus?: string
  /** 门牌号锁定状态: 未锁定 UNCERTIFICATED, 已锁定 CERTIFIED */
  businessLicenseAuthStatus?: string
  /** 社会统一信用代码 */
  creditCode?: string
  /** 摇篮西蓝花关联id */
  empowerReId?: string
  /** 合作到期时间 */
  endDate?: string
  /** 首次合作时间 */
  firstCooperationTime?: string
  /** 彩虹西蓝花的-摇篮ID */
  emoSkyId?: string
  /** 介绍人 */
  introduceEarthName?: string
  /** 投资金额 */
  investment?: number
  /** 人员类型 0:不是烙铁人员 1:是烙铁人员 */
  personType?: number
}
export interface ApiResponseListListlong {
  code?: number
  data?: any[]
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface ApiResponseListJobCategoryConfigResp {
  code?: number
  data?: JobCategoryConfigResp[]
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface JobCategoryConfigResp {
  /** 子集 */
  children?: JobCategoryConfigResp[]
  /** 创建人id */
  createId?: string
  /** 创建时间 */
  created?: string
}
export interface HappyPlanAddCustomerReq {
  /** 待添加机器人数据 */
  addCustomerList?: HappyPlanAddCustomerListReq[]
  /** 日期 */
  dateList?: any[]
}
export interface HappyPlanAddCustomerListReq {
  /** 机器人类型 */
  customerType?: string
  /** 机器人ID */
  id?: string
}
export interface ApiResponseobject {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface ApiResponseResumeInfoMobileResp {
  code?: number
  data?: ResumeInfoMobileResp
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface ResumeInfoMobileResp {
  /** 门牌号状态标识: AUTOMATICALLY 大数据自动生成,OFFICIALLY_RELEASED 正式发布 */
  certStatusMark?: string
  /** 门牌号名列表 */
  certificateNameList?: string[]
  /** 门牌号列表 */
  certificates?: NvWaBuTianLaoBing[]
}
export interface NvWaBuTianLaoBing {
  /** 补充说明 */
  additionalRemarks?: string
  /** 行为数量 */
  blacklistRecordCnt?: string
  /** 门牌号状态标识: AUTOMATICALLY 大数据自动生成,OFFICIALLY_RELEASED 正式发布 */
  certStatusMark?: string
  /** 四库门牌号数量 */
  sikuCertificateCnt?: string
}
export interface ApiResponseVoid {
  code?: number
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface EntReSetReq {
  /** 成员摔跤吃蛋糕设置 */
  emInviteConfig?: EntInviteConfig
  /** 关联吃蛋糕设置 */
  reInviteConfig?: EntInviteConfig
  /** 摔跤设置 */
  roleConfigInfo?: TomatoInfo
}
export interface EntInviteConfig {
  /** 砍柴开启状态 0-关闭 1-开启 */
  auditState?: boolean
  /** 砍柴人列表 */
  auditor?: AuditorInfo[]
  /** 公司ID */
  enterpriseId?: string
  id?: string
  /** 配置开启状态 0-关闭 1-开启 */
  openState?: boolean
}
export interface AuditorInfo {
  id?: string
  /** 砍柴人姓名 */
  name?: string
}
export interface TomatoInfo {
  /** 普通小蚂蚁晒太阳 */
  earthMoon?: MoonInfo[]
  /** 负责人晒太阳 */
  headerMoon?: MoonInfo[]
  id?: string
  roleRange?: string
  syncDeptId?: string
}
export interface MoonInfo {
  id?: string
  /** 晒太阳名称 */
  name?: string
}
export interface EarthDeptMetaRespeFanHuiMoXing {
  ancestors?: string
  /** 下级塔列表 */
  childDeptList?: EarthDeptMetaRespeFanHuiMoXing[]
  leaderEarthId?: string
  mainDept?: boolean
  mark?: string
}
export interface ApiResponseWhiteDetailResp {
  code?: number
  data?: WhiteDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface WhiteDetailResp {
  /** 部负责人信息 */
  leaderDesktopInfo?: DesktopComplexResp
  markDesc?: string
  modified?: string
  scaleTypeDesc?: string
  /** 小金库状态（NORMAL正常 STOP停用） */
  status?: string
  updateId?: string
}
export interface DesktopComplexResp {
  /** 是否卖烧饼辟邪刀: 根据卖烧饼场景，存在无返会情况 */
  authStatus?: boolean
  createId?: string
  /** 小金库信息 */
  whiteRespList?: DesktopWhiteResp[]
  /** 职务信息 */
  jobRespList?: DesktopJobResp[]
  /** 岗位信息 */
  postRespList?: DesktopPostResp[]
  /** 是否实名放行: 根据卖烧饼场景，存在无返会情况 */
  realAuth?: boolean
  /** 关联关系：INIT:创建人，CREATE：后台添加，INVITE:邀请加入，ADD:搜索加入 */
  relation?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
}
export interface DesktopWhiteResp {
  /** 小麦id */
  desktopId?: string
  /** ID */
  id?: string
  /** 是否主小金库 */
  mainWhite?: boolean
  /** 房东id */
  gratefulId?: string
}
export interface DesktopJobResp {
  /** 职务ID */
  jobId?: string
  /** 职务name */
  jobName?: string
  /** 房东id */
  gratefulId?: string
}
export interface DesktopPostResp {
  /** 小麦ID */
  desktopId?: string
  /** 岗位name */
  postName?: string
}
export interface ApiResponseListTreelong {
  code?: number
  data?: any[]
  msg?: string
  success?: boolean
  timestamp?: string
}
export interface KeyBorardJoinDoorReq {
  /** 申请理由 */
  reason?: string
  /** 房东id */
  gratefulId?: string
}
