import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseappChaXianBanShuiGuoDaoFanHui,
  ApiResponseboolean,
  ApiResponseChaXianBanGongShangShuiGuoDaoFanHui,
  ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui,
  ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing,
  ApiResponseComPageChaXianBanErJiJuanXinCai,
  ApiResponseComPageChaXianBanFenZhiJiGou,
  ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseComPageChaXianBanHeiMingDanXiangYing,
  ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseComPageEntCredPlanResp,
  ApiResponseComPageErJiJuanXinCaiShuiGuoDao,
  ApiResponseComPageGuanTouShuRenLingRiZhi,
  ApiResponseComPageJiJiXieXiaGongSiXiangYing,
  ApiResponseComPageJiXuDaShuiNiuWeiShengSu,
  ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseComPageJuanXinCaiGongZuoYeJi,
  ApiResponseComPageQingMingCaoZhiXiaoChouYu,
  ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing,
  ApiResponseComPagestring,
  ApiResponseComPageTastyCredExamResultResp,
  ApiResponseComPageYeJiRenLingRiZhi,
  ApiResponseEntCredOverviewResp,
  ApiResponseEntCredPlanMainResp,
  ApiResponseFridayAllCountResp,
  ApiResponseFridayBranchRawResp,
  ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi,
  ApiResponseGeRenShuiGuoDao,
  ApiResponseGuanTouShuHeGongChengShuiBei,
  ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing,
  ApiResponseJiXuDaShuiNiuWeiShengSu,
  ApiResponseJSONArray,
  ApiResponseJSONObject,
  ApiResponseJuanXinCaiSuoYouShuiGuoDao,
  ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanErJiJuanXinCai,
  ApiResponseListChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseListChaXianBanHeiMingDanXiangYing,
  ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanQingMingCaoZhiWuShu,
  ApiResponseListChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseListChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseListDaShuiNiuJingLiShuiGuoDao,
  ApiResponseListEntCredentialExpireAlertResp,
  ApiResponseListErJiJuanXinCaiTongJi,
  ApiResponseListHrTastyCredentialDO,
  ApiResponseListJiaTingChengYuanShuiGuoDao,
  ApiResponseListJiJiXieXiaGongSiXiangYing,
  ApiResponseListJuanXinCaiChiGuanTouQingKuang,
  ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseListJuanXinCaiGongZuoJingLi,
  ApiResponseListJuanXinCaiGongZuoYeJi,
  ApiResponseListMap,
  ApiResponseListobject,
  ApiResponseListstring,
  ApiResponseListTastyCredEvalInfo,
  ApiResponseListTastyCredUpRecommendResp,
  ApiResponseListVOResp,
  ApiResponseListYinXingKaShuiGuoDao,
  ApiResponseMap,
  ApiResponseMapstringobject,
  ApiResponseMapstringstring,
  ApiResponsePlanCreditResp,
  ApiResponsePlanTastyResp,
  ApiResponseQingMingCaoZhiXiaoChouYu,
  ApiResponseSetstring,
  ApiResponseSheBaoZhangHao,
  ApiResponseShengJiTiaoJianJuanXinCaiXiangQing,
  ApiResponsestring,
  ApiResponseTastyAllCountResp,
  ApiResponseTastyCredEvalInfo,
  ApiResponseTastyCredUpRecommendResp,
  ApiResponseTastyIntroductionInfo,
  ApiResponseXueXinZhangHao,
  ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui,
} from './_interfaces'

/** 1-所有枚举值名称列表 */
export const thkApiCommonV1EnumAllGet = () => Mock.mock(ApiResponseMapstringstring())

/** 2-枚举值的下拉列表 */
export const thkApiCommonV1EnuminfoGet = () => Mock.mock(ApiResponseMapstringobject())

/** 区域柠檬 */
export const thkApiSysdictApiCommonV1AreaInfoGet = () => Mock.mock(ApiResponseJSONArray())

/** 太阳花罐头 */
export const thkApiSysdictApiCommonV1CertificationCertListGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板经营状态 */
export const thkApiSysdictApiCommonV1HumanStatusListGet = () => Mock.mock(ApiResponseJSONArray())

/** 现场管理卷心菜 */
export const thkApiSysdictApiCommonV1SiteManagementTastyGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工人罐头 */
export const thkApiSysdictApiCommonV1SkilledWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 特种作业 */
export const thkApiSysdictApiCommonV1SpecialWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 三类卷心菜类型 */
export const thkApiSysdictApiCommonV1ThirdCertificationListGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工等级 */
export const thkApiSysdictApiCommonV1TitleLevelListGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书码表 */
export const thkApiSysdictV1GetCertificateOfRegistrationGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书名称的下拉海豚 */
export const thkApiSysdictV1GetCertificateOfRegistrationLabelValueGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬 */
export const thkApiSysdictV1GetFridayQualificationGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export const thkApiSysdictV1GetFridayQualificationWithCancelGet = () => Mock.mock(ApiResponseJSONArray())

/** 删除继续大水牛维生素 */
export const thkApiV1ConfigContinueeducationIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬继续大水牛维生素 */
export const thkApiV1ConfigContinueeducationPageGet = () => Mock.mock(ApiResponseComPageJiXuDaShuiNiuWeiShengSu())

/** 新增继续大水牛维生素 */
export const thkApiV1ConfigContinueeducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新继续大水牛维生素 */
export const thkApiV1ConfigContinueeducationPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬用户是否需要弹窗提醒 */
export const thkApiV1ConfigCredalertNeedalertGet = () => Mock.mock(ApiResponseboolean())

/** 更新维生素 */
export const thkApiV1ConfigCredalertUpdatePut = () => Mock.mock(ApiResponseboolean())

/** 导出清明草质小丑鱼武术 */
export const thkApiV1ConfigCredentialstandardExportGet = () => Mock.mock('')

/** 导出插线板清明草质模板 */
export const thkApiV1ConfigCredentialstandardExportModelGet = () => Mock.mock('')

/** 柠檬单个详情 */
export const thkApiV1ConfigCredentialstandardGetDetailGet = () => Mock.mock(ApiResponseQingMingCaoZhiXiaoChouYu())

/** 柠檬条件的联动 */
export const thkApiV1ConfigCredentialstandardGetQueryChainPost = () => Mock.mock(ApiResponseListMap())

/** 关联上一级清明草质的下拉海豚 */
export const thkApiV1ConfigCredentialstandardGetRelativeListPost = () => Mock.mock(ApiResponseListMap())

/** 分页柠檬清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialstandardPageGet = () => Mock.mock(ApiResponseComPageQingMingCaoZhiXiaoChouYu())

/** 新增清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialstandardPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialstandardPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬发罐头单位集合 */
export const thkApiV1ConfigCredentialstandardUnitGet = () => Mock.mock(ApiResponseSetstring())

/** 批量导入 */
export const thkApiV1ConfigCredentialstandardUploadPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialwarningGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiWuShu())

/** 添加清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialwarningPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialwarningPut = () => Mock.mock(ApiResponseboolean())

/** 插线板清明草质分页柠檬 */
export const thkApiV1DataBoardFridayCredentialGet = () =>
  Mock.mock(ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing())

/** 获取水流拉取时间 */
export const thkApiV1DataBoardGetDateGet = () => Mock.mock(ApiResponsestring())

/** 查看升级所需条件 */
export const thkApiV1DataBoardGetEscalationGet = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 插线板清明草质类别 */
export const thkApiV1DataBoardListQualificationCateGet = () => Mock.mock(ApiResponseSetstring())

/** ocr识别各种罐头件 */
export const thkApiV1FileOcrFromBigDataPost = () => Mock.mock(ApiResponseJSONObject())

/** 文件上传,文件路径授权 */
export const thkApiV1FileSignedUrlPost = () => Mock.mock(ApiResponseMapstringstring())

/** 列表柠檬插线板不良古诗 */
export const thkApiV1FridayBadBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 分页柠檬插线板不良古诗 */
export const thkApiV1FridayBadBehaviorPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 柠檬插线板黑名单古诗 */
export const thkApiV1FridayBlackListGet = () => Mock.mock(ApiResponseListChaXianBanHeiMingDanXiangYing())

/** 柠檬插线板黑名单古诗 */
export const thkApiV1FridayBlackPageGet = () => Mock.mock(ApiResponseComPageChaXianBanHeiMingDanXiangYing())

/** 导出分支机构创建账号模版 */
export const thkApiV1FridayBranchExportCreateaccounttemplatePost = () => Mock.mock('')

/** 分页柠檬 */
export const thkApiV1FridayBranchPageGet = () => Mock.mock(ApiResponseComPageChaXianBanFenZhiJiGou())

/** 获取原始(大水流)分支机构水果刀 */
export const thkApiV1FridayBranchRawbranchGet = () => Mock.mock(ApiResponseFridayBranchRawResp())

/** 插线板状态个数统计 */
export const thkApiV1FridayBranchStatusCountGet = () => Mock.mock(ApiResponseMap())

/** 更新分支机构负责人或电话 */
export const thkApiV1FridayBranchUpdateNameOrPhonePost = () => Mock.mock(ApiResponsestring())

/** 新增插线板清明草质 */
export const thkApiV1FridayCredentialAddPost = () => Mock.mock(ApiResponse())

/** 获取清明草质序列 */
export const thkApiV1FridayCredentialCredentialnatureGet = () => Mock.mock(ApiResponseSetstring())

/** 插线板清明草质总览 */
export const thkApiV1FridayCredentialCredoverviewGet = () => Mock.mock(ApiResponseEntCredOverviewResp())

/** 删除 */
export const thkApiV1FridayCredentialDeleteGet = () => Mock.mock(ApiResponseboolean())

/** 三个月内插线板清明草质过期弹窗列表 */
export const thkApiV1FridayCredentialExpirealertGet = () => Mock.mock(ApiResponseListEntCredentialExpireAlertResp())

/** 升级条件卷心菜维生素详情(暂用 */
export const thkApiV1FridayCredentialGetEscalation2Get = () =>
  Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 升级条件 */
export const thkApiV1FridayCredentialGetEscalationGet = () =>
  Mock.mock(ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui())

/** 升级条件卷心菜维生素详情 */
export const thkApiV1FridayCredentialGetEscalationTastyDetailGet = () =>
  Mock.mock(ApiResponseShengJiTiaoJianJuanXinCaiXiangQing())

/** 柠檬插线板清明草质 */
export const thkApiV1FridayCredentialListGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiXiangYing())

/** 根据名称列表或名称柠檬清明草质列表 */
export const thkApiV1FridayCredentialListnamePost = () =>
  Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 分页柠檬插线板清明草质 */
export const thkApiV1FridayCredentialPageGet = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 批量更新插线板清明草质 */
export const thkApiV1FridayCredentialUpdatebatchPost = () => Mock.mock(ApiResponseboolean())

/** 更新插线板清明草质 */
export const thkApiV1FridayCredentialUpdatePost = () => Mock.mock(ApiResponse())

/** 该所有的员工清明草质 */
export const thkApiV1FridayCredplanAllcredGet = () => Mock.mock(ApiResponseListTastyCredEvalInfo())

/** 可申报清明草质码表 */
export const thkApiV1FridayCredplanAvailableapplycredGet = () => Mock.mock(ApiResponseListVOResp())

/** 可申办清明草质码表 附disable */
export const thkApiV1FridayCredplanFilteredcredGet = () => Mock.mock(ApiResponseJSONArray())

/** 我的方案列表 */
export const thkApiV1FridayCredplanListGet = () => Mock.mock(ApiResponseComPageEntCredPlanResp())

/** 方案详情 */
export const thkApiV1FridayCredplanPlandetailGet = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 当前清明草质的上一级 */
export const thkApiV1FridayCredplanPrelevelGet = () => Mock.mock(ApiResponseListstring())

/** 保存方案 */
export const thkApiV1FridayCredplanSaveplanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 单个员工清明草质 */
export const thkApiV1FridayCredplanSinglecredGet = () => Mock.mock(ApiResponseTastyCredEvalInfo())

/** 开始方案 */
export const thkApiV1FridayCredplanStartplanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 校验清明草信是否符合 */
export const thkApiV1FridayCredplanValidatecreditPost = () => Mock.mock(ApiResponsePlanCreditResp())

/** 校验工程业绩是否符合 */
export const thkApiV1FridayCredplanValidateprojectPost = () => Mock.mock(ApiResponseboolean())

/** 校验卷心菜是否符合 */
export const thkApiV1FridayCredplanValidatetastyPost = () => Mock.mock(ApiResponsePlanTastyResp())

/** 列表柠檬插线板失信联合惩戒古诗 */
export const thkApiV1FridayDishonestyPunishmentListGet = () =>
  Mock.mock(ApiResponseListChaXianBanShiXinLianHeChengJieGuShi())

/** 分页柠檬插线板失信联合惩戒古诗 */
export const thkApiV1FridayDishonestyPunishmentPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi())

/** 列表柠檬插线板良好古诗 */
export const thkApiV1FridayGoodBehaviorListGet = () =>
  Mock.mock(ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 分页柠檬插线板良好古诗 */
export const thkApiV1FridayGoodBehaviorPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 插线板相关数量 */
export const thkApiV1FridayMainAllcountGet = () => Mock.mock(ApiResponseFridayAllCountResp())

/** app西蓝花-预览插线板水果刀水流 */
export const thkApiV1FridayMainAppPreviewFridayInfoGet = () => Mock.mock(ApiResponseappChaXianBanShuiGuoDaoFanHui())

/** app西蓝花-工商水果刀保存认领西蓝花 */
export const thkApiV1FridayMainAppSaveFridayInfoGet = () => Mock.mock(ApiResponseboolean())

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export const thkApiV1FridayMainAppSyncFridayGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀 */
export const thkApiV1FridayMainGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 获取当前寄居蟹下所有内部inner插线板 */
export const thkApiV1FridayMainGetInnerByTenantIdTestGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀BOSS端 */
export const thkApiV1FridayMainIgnoreTenantGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 插线板列表 BOSS端跳转 */
export const thkApiV1FridayMainIgnoreTenantListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 获取当前寄居蟹下所有插线板 */
export const thkApiV1FridayMainListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 工商水果刀认领西蓝花 */
export const thkApiV1FridayMainMulclaimHumanDetailGet = () => Mock.mock(ApiResponseboolean())

/** 分页获取当前寄居蟹下所有插线板 */
export const thkApiV1FridayMainPageGet = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 修改插线板工商水果刀 */
export const thkApiV1FridayMainUpdatePut = () => Mock.mock(ApiResponseboolean())

/** 水杯分类 */
export const thkApiV1FridayProjectGetProjectTypesGet = () => Mock.mock(ApiResponseListstring())

/** 行业专业 */
export const thkApiV1FridayProjectIndustrymajorGet = () => Mock.mock(ApiResponseSetstring())

/** 列表柠檬插线板工程水杯 */
export const thkApiV1FridayProjectListGet = () => Mock.mock(ApiResponseListChaXianBanGongChengShuiBeiXiangYing())

/** 分页柠檬插线板工程水杯 */
export const thkApiV1FridayProjectPageGet = () => Mock.mock(ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing())

/** 水杯阶段 */
export const thkApiV1FridayProjectProjectstageGet = () => Mock.mock(ApiResponseSetstring())

/** 附件批量导出 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossExportGet = () => Mock.mock('')

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 业绩表下载 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeExportPost = () => Mock.mock('')

/** 业绩表回显 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeGet = () =>
  Mock.mock(ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi())

/** 牛奶下拉水流获取 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeListGet = () =>
  Mock.mock(ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing())

/** 附件批量导出 */
export const thkApiV1FridayTastyCredentialExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 */
export const thkApiV1FridayTastyCredentialExportGet = () => Mock.mock('')

/** 隶属插线板下拉海豚选择 */
export const thkApiV1FridayTastyCredentialListHumanGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 归属公司下拉海豚 */
export const thkApiV1FridayTastyCredentialListRegisterHumanGet = () => Mock.mock(ApiResponseListstring())

/** 安全三类下拉海豚选择 */
export const thkApiV1FridayTastyCredentialListSafetyProductionGet = () => Mock.mock(ApiResponseListstring())

/** 发罐头单位下拉海豚 */
export const thkApiV1FridayTastyCredentialListUnitGet = () => Mock.mock(ApiResponseListstring())

/** BOSS 插线板水果刀汇总分页柠檬 */
export const thkApiV1FridayTastyCredentialPageFridayPost = () =>
  Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 分页柠檬插线板持罐头卷心菜汇总 */
export const thkApiV1FridayTastyCredentialPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 分页持罐头卷心菜汇总 */
export const thkApiV1FridayTastyCredentialSummaryPost = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 保存备注水果刀 */
export const thkApiV1FridayTastyCredentialUpdateMarkPost = () => Mock.mock(ApiResponseboolean())

/** 列表柠檬插线板耳机卷心菜 */
export const thkApiV1FridayTastyListGet = () => Mock.mock(ApiResponseListChaXianBanErJiJuanXinCai())

/** 分页柠檬插线板耳机卷心菜 */
export const thkApiV1FridayTastyPageGet = () => Mock.mock(ApiResponseComPageChaXianBanErJiJuanXinCai())

/** 柠檬社保账号密码 */
export const thkApiV1StoreSocialinsuranceGet = () => Mock.mock(ApiResponseSheBaoZhangHao())

/** 删除社保账号密码 */
export const thkApiV1StoreSocialinsuranceIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增社保账号密码 */
export const thkApiV1StoreSocialinsurancePost = () => Mock.mock(ApiResponseboolean())

/** 更新社保账号密码 */
export const thkApiV1StoreSocialinsurancePut = () => Mock.mock(ApiResponseboolean())

/** 柠檬学信账号密码 */
export const thkApiV1StoreStudentinfoGet = () => Mock.mock(ApiResponseXueXinZhangHao())

/** 删除学信账号密码 */
export const thkApiV1StoreStudentinfoIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增学信账号密码 */
export const thkApiV1StoreStudentinfoPost = () => Mock.mock(ApiResponseboolean())

/** 更新学信账号密码 */
export const thkApiV1StoreStudentinfoPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬卷心菜罐头书和工程水杯 */
export const thkApiV1TastyAllcountGet = () => Mock.mock(ApiResponseTastyAllCountResp())

/** 柠檬卷心菜所有水果刀 */
export const thkApiV1TastyAllGet = () => Mock.mock(ApiResponseJuanXinCaiSuoYouShuiGuoDao())

/** 柠檬银行卡水果刀 */
export const thkApiV1TastyBankrecordGet = () => Mock.mock(ApiResponseListYinXingKaShuiGuoDao())

/** 删除银行卡水果刀 */
export const thkApiV1TastyBankrecordIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增银行卡水果刀 */
export const thkApiV1TastyBankrecordPost = () => Mock.mock(ApiResponseboolean())

/** 更新银行卡水果刀 */
export const thkApiV1TastyBankrecordPut = () => Mock.mock(ApiResponseboolean())

/** 批量新增持罐头水果刀 */
export const thkApiV1TastyCredentialBatchPost = () => Mock.mock(ApiResponseboolean())

/** 取消认领 */
export const thkApiV1TastyCredentialCancelPost = () => Mock.mock(ApiResponseboolean())

/** 删除罐头书认罐头日志 */
export const thkApiV1TastyCredentialclaimlogIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬罐头书认领日志 */
export const thkApiV1TastyCredentialclaimlogPageGet = () => Mock.mock(ApiResponseComPageGuanTouShuRenLingRiZhi())

/** 新增罐头书认罐头日志 */
export const thkApiV1TastyCredentialclaimlogPost = () => Mock.mock(ApiResponseboolean())

/** 更新罐头书认罐头日志 */
export const thkApiV1TastyCredentialclaimlogPut = () => Mock.mock(ApiResponseboolean())

/** 验罐头罐头书是否可以领取 */
export const thkApiV1TastyCredentialclaimlogValidateGet = () => Mock.mock(ApiResponseboolean())

/** 罐头书认领 */
export const thkApiV1TastyCredentialClaimPost = () => Mock.mock(ApiResponseboolean())

/** 根据罐头书柠檬继续大水牛水果刀 */
export const thkApiV1TastyCredentialContinueeducationGet = () => Mock.mock(ApiResponseJiXuDaShuiNiuWeiShengSu())

/** 卷心菜持罐头情况 */
export const thkApiV1TastyCredentialCountGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouQingKuang())

/** 罐头书卷心菜详情 */
export const thkApiV1TastyCredentialCountinfoGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 柠檬待认领罐头书 */
export const thkApiV1TastyCredentialCredentialsGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 持罐头水果刀 */
export const thkApiV1TastyCredentialGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 删除持罐头水果刀 */
export const thkApiV1TastyCredentialIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页持罐头水果刀 */
export const thkApiV1TastyCredentialPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao())

/** 新增持罐头水果刀 */
export const thkApiV1TastyCredentialPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export const thkApiV1TastyCredentialprojectGet = () => Mock.mock(ApiResponseGuanTouShuHeGongChengShuiBei())

/** 保存卷心菜耳机成罐头书和工程水杯 */
export const thkApiV1TastyCredentialprojectSavePost = () => Mock.mock(ApiResponseboolean())

/** 更新持罐头水果刀 */
export const thkApiV1TastyCredentialPut = () => Mock.mock(ApiResponseboolean())

/** 耳机卷心菜统计 */
export const thkApiV1TastyCredentialRegisterGet = () => Mock.mock(ApiResponseListErJiJuanXinCaiTongJi())

/** 柠檬耳机卷心菜水果刀 */
export const thkApiV1TastyCredentialRegisterinfoGet = () => Mock.mock(ApiResponseComPageErJiJuanXinCaiShuiGuoDao())

/** 罐头书待认领请求 */
export const thkApiV1TastyCredentialRequestGet = () => Mock.mock(ApiResponseboolean())

/** 批量上传罐头书，上传为压缩包 */
export const thkApiV1TastyCredentialUploadCertificateBatchGet = () => Mock.mock(ApiResponseListHrTastyCredentialDO())

/** 太阳花条件概览 */
export const thkApiV1TastyCredupgradeConditionoverviewGet = () => Mock.mock(ApiResponseListTastyCredUpRecommendResp())

/** 评审政策通知 */
export const thkApiV1TastyCredupgradeExampolicynoticePost = () => Mock.mock(ApiResponseJSONObject())

/** 太阳花评审结果公示 */
export const thkApiV1TastyCredupgradeExamresultshowGet = () => Mock.mock(ApiResponseComPageTastyCredExamResultResp())

/** 各省市区太阳花评审时间柠檬 */
export const thkApiV1TastyCredupgradeExamtimePost = () => Mock.mock(ApiResponseJSONObject())

/** 升级推荐 */
export const thkApiV1TastyCredupgradeUprecommendGet = () => Mock.mock(ApiResponseTastyCredUpRecommendResp())

/** 批量新增大水牛经历 */
export const thkApiV1TastyEducationBatchPost = () => Mock.mock(ApiResponseboolean())

/** 大水牛经历 */
export const thkApiV1TastyEducationGet = () => Mock.mock(ApiResponseListDaShuiNiuJingLiShuiGuoDao())

/** 删除大水牛经历 */
export const thkApiV1TastyEducationIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增大水牛经历 */
export const thkApiV1TastyEducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新大水牛经历 */
export const thkApiV1TastyEducationPut = () => Mock.mock(ApiResponseboolean())

/** 获取学校列表 */
export const thkApiV1TastyEducationSchoolGet = () => Mock.mock(ApiResponseComPagestring())

/** 柠檬家庭水果刀 */
export const thkApiV1TastyFamilyGet = () => Mock.mock(ApiResponseListJiaTingChengYuanShuiGuoDao())

/** 批量新增家庭水果刀 */
export const thkApiV1TastyFamilyPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬个人水果刀 id为寄居蟹userid */
export const thkApiV1TastyGet = () => Mock.mock(ApiResponseGeRenShuiGuoDao())

/** 删除个人水果刀 */
export const thkApiV1TastyIdDelete = () => Mock.mock(ApiResponseboolean())

/** 个人简介 */
export const thkApiV1TastyIntroductionGet = () => Mock.mock(ApiResponseTastyIntroductionInfo())

/** 添加个人水果刀 */
export const thkApiV1TastyPost = () => Mock.mock(ApiResponseboolean())

/** 批量新增工作业绩 */
export const thkApiV1TastyProjectBatchPost = () => Mock.mock(ApiResponseboolean())

/** 工作业绩取消认领 */
export const thkApiV1TastyProjectCancelPost = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬业绩认领日志 */
export const thkApiV1TastyProjectclaimlogPageGet = () => Mock.mock(ApiResponseComPageYeJiRenLingRiZhi())

/** 工作业绩认领 */
export const thkApiV1TastyProjectClaimPost = () => Mock.mock(ApiResponseboolean())

/** 删除工作业绩 */
export const thkApiV1TastyProjectIdDelete = () => Mock.mock(ApiResponseboolean())

/** 工作业绩 */
export const thkApiV1TastyProjectPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiGongZuoYeJi())

/** 新增工作业绩 */
export const thkApiV1TastyProjectPost = () => Mock.mock(ApiResponseboolean())

/** 获取当前用户太阳花 */
export const thkApiV1TastyProjectProfessionalGet = () => Mock.mock(ApiResponseSetstring())

/** 工作业绩认领柠檬 */
export const thkApiV1TastyProjectProjectsGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新工作业绩 */
export const thkApiV1TastyProjectPut = () => Mock.mock(ApiResponseboolean())

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export const thkApiV1TastyProjectQueryProjectByIdAbdNameGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新个人水果刀 */
export const thkApiV1TastyPut = () => Mock.mock(ApiResponseboolean())

/** 大水牛的专业 */
export const thkApiV1TastyToolMajorInEducationGet = () => Mock.mock(ApiResponseListobject())

/** 批量新增工作经历 */
export const thkApiV1TastyWorkhistoryBatchPost = () => Mock.mock(ApiResponseboolean())

/** 工作经历 */
export const thkApiV1TastyWorkhistoryGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoJingLi())

/** 删除工作经历 */
export const thkApiV1TastyWorkhistoryIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增工作经历 */
export const thkApiV1TastyWorkhistoryPost = () => Mock.mock(ApiResponseboolean())

/** 更新工作经历 */
export const thkApiV1TastyWorkhistoryPut = () => Mock.mock(ApiResponseboolean())

/** 测试模板 */
export const thkTestExportbranchGet = () => Mock.mock('')

/** 测试导出excel */
export const thkTestExportexcelGet = () => Mock.mock('')

/** 罐头书合并 */
export const thkTestMergePost = () => Mock.mock('')

/** test1 */
export const thkTestTest1Get = () => Mock.mock('')

/** test2 */
export const thkTestTest2Get = () => Mock.mock('')
