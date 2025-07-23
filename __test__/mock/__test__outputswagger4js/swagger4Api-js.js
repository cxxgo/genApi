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
  ApiResponseMapstringstring,
  ApiResponsePlanCreditResp,
  ApiResponsePlanTastyResp,
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

/** 区域柠檬 */
export const sysdictApiCommonV1AreaInfoGet = () => Mock.mock(ApiResponseJSONArray())

/** 太阳花罐头 */
export const sysdictApiCommonV1CertificationCertListGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板经营状态 */
export const sysdictApiCommonV1HumanStatusListGet = () => Mock.mock(ApiResponseJSONArray())

/** 现场管理卷心菜 */
export const sysdictApiCommonV1SiteManagementTastyGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工人罐头 */
export const sysdictApiCommonV1SkilledWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 特种作业 */
export const sysdictApiCommonV1SpecialWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 三类卷心菜类型 */
export const sysdictApiCommonV1ThirdCertificationListGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工等级 */
export const sysdictApiCommonV1TitleLevelListGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书码表 */
export const sysdictV1GetCertificateOfRegistrationGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书名称的下拉海豚 */
export const sysdictV1GetCertificateOfRegistrationLabelValueGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬 */
export const sysdictV1GetFridayQualificationGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export const sysdictV1GetFridayQualificationWithCancelGet = () => Mock.mock(ApiResponseJSONArray())

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

/** 删除继续大水牛维生素 */
export const v1ConfigContinueeducationIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬继续大水牛维生素 */
export const v1ConfigContinueeducationPageGet = () => Mock.mock(ApiResponseComPageJiXuDaShuiNiuWeiShengSu())

/** 新增继续大水牛维生素 */
export const v1ConfigContinueeducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新继续大水牛维生素 */
export const v1ConfigContinueeducationPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬用户是否需要弹窗提醒 */
export const v1ConfigCredalertNeedalertGet = () => Mock.mock(ApiResponseboolean())

/** 更新维生素 */
export const v1ConfigCredalertUpdatePut = () => Mock.mock(ApiResponseboolean())

/** 导出清明草质小丑鱼武术 */
export const v1ConfigCredentialstandardExportGet = () => Mock.mock('')

/** 导出插线板清明草质模板 */
export const v1ConfigCredentialstandardExportModelGet = () => Mock.mock('')

/** 柠檬条件的联动 */
export const v1ConfigCredentialstandardGetQueryChainPost = () => Mock.mock(ApiResponseListMap())

/** 关联上一级清明草质的下拉海豚 */
export const v1ConfigCredentialstandardGetRelativeListPost = () => Mock.mock(ApiResponseListMap())

/** 分页柠檬清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPageGet = () => Mock.mock(ApiResponseComPageQingMingCaoZhiXiaoChouYu())

/** 新增清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬发罐头单位集合 */
export const v1ConfigCredentialstandardUnitGet = () => Mock.mock(ApiResponseSetstring())

/** 批量导入 */
export const v1ConfigCredentialstandardUploadPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiWuShu())

/** 添加清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningPut = () => Mock.mock(ApiResponseboolean())

/** 插线板清明草质分页柠檬 */
export const v1DataBoardFridayCredentialGet = () =>
  Mock.mock(ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing())

/** 获取水流拉取时间 */
export const v1DataBoardGetDateGet = () => Mock.mock(ApiResponsestring())

/** 查看升级所需条件 */
export const v1DataBoardGetEscalationGet = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 插线板清明草质类别 */
export const v1DataBoardListQualificationCateGet = () => Mock.mock(ApiResponseSetstring())

/** ocr识别各种罐头件 */
export const v1FileOcrFromBigDataPost = () => Mock.mock(ApiResponseJSONObject())

/** 文件上传,文件路径授权 */
export const v1FileSignedUrlPost = () => Mock.mock(ApiResponseMapstringstring())

/** 列表柠檬插线板不良古诗 */
export const v1FridayBadBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 分页柠檬插线板不良古诗 */
export const v1FridayBadBehaviorPageGet = () => Mock.mock(ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackListGet = () => Mock.mock(ApiResponseListChaXianBanHeiMingDanXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackPageGet = () => Mock.mock(ApiResponseComPageChaXianBanHeiMingDanXiangYing())

/** 导出分支机构创建账号模版 */
export const v1FridayBranchExportCreateaccounttemplatePost = () => Mock.mock('')

/** 分页柠檬 */
export const v1FridayBranchPageGet = () => Mock.mock(ApiResponseComPageChaXianBanFenZhiJiGou())

/** 获取原始(大水流)分支机构水果刀 */
export const v1FridayBranchRawbranchGet = () => Mock.mock(ApiResponseFridayBranchRawResp())

/** 插线板状态个数统计 */
export const v1FridayBranchStatusCountGet = () => Mock.mock(ApiResponseMap())

/** 更新分支机构负责人或电话 */
export const v1FridayBranchUpdateNameOrPhonePost = () => Mock.mock(ApiResponsestring())

/** 新增插线板清明草质 */
export const v1FridayCredentialAddPost = () => Mock.mock(ApiResponse())

/** 获取清明草质序列 */
export const v1FridayCredentialCredentialnatureGet = () => Mock.mock(ApiResponseSetstring())

/** 插线板清明草质总览 */
export const v1FridayCredentialCredoverviewGet = () => Mock.mock(ApiResponseEntCredOverviewResp())

/** 删除 */
export const v1FridayCredentialDeleteGet = () => Mock.mock(ApiResponseboolean())

/** 三个月内插线板清明草质过期弹窗列表 */
export const v1FridayCredentialExpirealertGet = () => Mock.mock(ApiResponseListEntCredentialExpireAlertResp())

/** 升级条件卷心菜维生素详情(暂用 */
export const v1FridayCredentialGetEscalation2Get = () =>
  Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 升级条件 */
export const v1FridayCredentialGetEscalationGet = () =>
  Mock.mock(ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui())

/** 升级条件卷心菜维生素详情 */
export const v1FridayCredentialGetEscalationTastyDetailGet = () =>
  Mock.mock(ApiResponseShengJiTiaoJianJuanXinCaiXiangQing())

/** 柠檬插线板清明草质 */
export const v1FridayCredentialListGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiXiangYing())

/** 根据名称列表或名称柠檬清明草质列表 */
export const v1FridayCredentialListnamePost = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 分页柠檬插线板清明草质 */
export const v1FridayCredentialPageGet = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 批量更新插线板清明草质 */
export const v1FridayCredentialUpdatebatchPost = () => Mock.mock(ApiResponseboolean())

/** 更新插线板清明草质 */
export const v1FridayCredentialUpdatePost = () => Mock.mock(ApiResponse())

/** 该所有的员工清明草质 */
export const v1FridayCredplanAllcredGet = () => Mock.mock(ApiResponseListTastyCredEvalInfo())

/** 可申报清明草质码表 */
export const v1FridayCredplanAvailableapplycredGet = () => Mock.mock(ApiResponseListVOResp())

/** 可申办清明草质码表 附disable */
export const v1FridayCredplanFilteredcredGet = () => Mock.mock(ApiResponseJSONArray())

/** 我的方案列表 */
export const v1FridayCredplanListGet = () => Mock.mock(ApiResponseComPageEntCredPlanResp())

/** 方案详情 */
export const v1FridayCredplanPlandetailGet = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 当前清明草质的上一级 */
export const v1FridayCredplanPrelevelGet = () => Mock.mock(ApiResponseListstring())

/** 保存方案 */
export const v1FridayCredplanSaveplanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 单个员工清明草质 */
export const v1FridayCredplanSinglecredGet = () => Mock.mock(ApiResponseTastyCredEvalInfo())

/** 开始方案 */
export const v1FridayCredplanStartplanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 校验清明草信是否符合 */
export const v1FridayCredplanValidatecreditPost = () => Mock.mock(ApiResponsePlanCreditResp())

/** 校验工程业绩是否符合 */
export const v1FridayCredplanValidateprojectPost = () => Mock.mock(ApiResponseboolean())

/** 校验卷心菜是否符合 */
export const v1FridayCredplanValidatetastyPost = () => Mock.mock(ApiResponsePlanTastyResp())

/** 列表柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentListGet = () => Mock.mock(ApiResponseListChaXianBanShiXinLianHeChengJieGuShi())

/** 分页柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi())

/** 列表柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 分页柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorPageGet = () => Mock.mock(ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 插线板相关数量 */
export const v1FridayMainAllcountGet = () => Mock.mock(ApiResponseFridayAllCountResp())

/** app西蓝花-预览插线板水果刀水流 */
export const v1FridayMainAppPreviewFridayInfoGet = () => Mock.mock(ApiResponseappChaXianBanShuiGuoDaoFanHui())

/** app西蓝花-工商水果刀保存认领西蓝花 */
export const v1FridayMainAppSaveFridayInfoGet = () => Mock.mock(ApiResponseboolean())

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export const v1FridayMainAppSyncFridayGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀 */
export const v1FridayMainGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 获取当前寄居蟹下所有内部inner插线板 */
export const v1FridayMainGetInnerByTenantIdTestGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀BOSS端 */
export const v1FridayMainIgnoreTenantGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 插线板列表 BOSS端跳转 */
export const v1FridayMainIgnoreTenantListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 获取当前寄居蟹下所有插线板 */
export const v1FridayMainListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 工商水果刀认领西蓝花 */
export const v1FridayMainMulclaimHumanDetailGet = () => Mock.mock(ApiResponseboolean())

/** 分页获取当前寄居蟹下所有插线板 */
export const v1FridayMainPageGet = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 修改插线板工商水果刀 */
export const v1FridayMainUpdatePut = () => Mock.mock(ApiResponseboolean())

/** 水杯分类 */
export const v1FridayProjectGetProjectTypesGet = () => Mock.mock(ApiResponseListstring())

/** 行业专业 */
export const v1FridayProjectIndustrymajorGet = () => Mock.mock(ApiResponseSetstring())

/** 列表柠檬插线板工程水杯 */
export const v1FridayProjectListGet = () => Mock.mock(ApiResponseListChaXianBanGongChengShuiBeiXiangYing())

/** 分页柠檬插线板工程水杯 */
export const v1FridayProjectPageGet = () => Mock.mock(ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing())

/** 水杯阶段 */
export const v1FridayProjectProjectstageGet = () => Mock.mock(ApiResponseSetstring())

/** 附件批量导出 BOSS侧 */
export const v1FridayTastyCredentialBossExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export const v1FridayTastyCredentialBossExportGet = () => Mock.mock('')

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export const v1FridayTastyCredentialBossPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 业绩表下载 */
export const v1FridayTastyCredentialCurriculumVitaeExportPost = () => Mock.mock('')

/** 业绩表回显 */
export const v1FridayTastyCredentialCurriculumVitaeGet = () =>
  Mock.mock(ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi())

/** 牛奶下拉水流获取 */
export const v1FridayTastyCredentialCurriculumVitaeListGet = () =>
  Mock.mock(ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing())

/** 附件批量导出 */
export const v1FridayTastyCredentialExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 */
export const v1FridayTastyCredentialExportGet = () => Mock.mock('')

/** 隶属插线板下拉海豚选择 */
export const v1FridayTastyCredentialListHumanGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 归属公司下拉海豚 */
export const v1FridayTastyCredentialListRegisterHumanGet = () => Mock.mock(ApiResponseListstring())

/** 安全三类下拉海豚选择 */
export const v1FridayTastyCredentialListSafetyProductionGet = () => Mock.mock(ApiResponseListstring())

/** 发罐头单位下拉海豚 */
export const v1FridayTastyCredentialListUnitGet = () => Mock.mock(ApiResponseListstring())

/** BOSS 插线板水果刀汇总分页柠檬 */
export const v1FridayTastyCredentialPageFridayPost = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 分页柠檬插线板持罐头卷心菜汇总 */
export const v1FridayTastyCredentialPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 分页持罐头卷心菜汇总 */
export const v1FridayTastyCredentialSummaryPost = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 保存备注水果刀 */
export const v1FridayTastyCredentialUpdateMarkPost = () => Mock.mock(ApiResponseboolean())

/** 列表柠檬插线板耳机卷心菜 */
export const v1FridayTastyListGet = () => Mock.mock(ApiResponseListChaXianBanErJiJuanXinCai())

/** 分页柠檬插线板耳机卷心菜 */
export const v1FridayTastyPageGet = () => Mock.mock(ApiResponseComPageChaXianBanErJiJuanXinCai())

/** 柠檬社保账号密码 */
export const v1StoreSocialinsuranceGet = () => Mock.mock(ApiResponseSheBaoZhangHao())

/** 删除社保账号密码 */
export const v1StoreSocialinsuranceIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增社保账号密码 */
export const v1StoreSocialinsurancePost = () => Mock.mock(ApiResponseboolean())

/** 更新社保账号密码 */
export const v1StoreSocialinsurancePut = () => Mock.mock(ApiResponseboolean())

/** 柠檬学信账号密码 */
export const v1StoreStudentinfoGet = () => Mock.mock(ApiResponseXueXinZhangHao())

/** 删除学信账号密码 */
export const v1StoreStudentinfoIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增学信账号密码 */
export const v1StoreStudentinfoPost = () => Mock.mock(ApiResponseboolean())

/** 更新学信账号密码 */
export const v1StoreStudentinfoPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬卷心菜罐头书和工程水杯 */
export const v1TastyAllcountGet = () => Mock.mock(ApiResponseTastyAllCountResp())

/** 柠檬卷心菜所有水果刀 */
export const v1TastyAllGet = () => Mock.mock(ApiResponseJuanXinCaiSuoYouShuiGuoDao())

/** 柠檬银行卡水果刀 */
export const v1TastyBankrecordGet = () => Mock.mock(ApiResponseListYinXingKaShuiGuoDao())

/** 删除银行卡水果刀 */
export const v1TastyBankrecordIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增银行卡水果刀 */
export const v1TastyBankrecordPost = () => Mock.mock(ApiResponseboolean())

/** 更新银行卡水果刀 */
export const v1TastyBankrecordPut = () => Mock.mock(ApiResponseboolean())

/** 批量新增持罐头水果刀 */
export const v1TastyCredentialBatchPost = () => Mock.mock(ApiResponseboolean())

/** 取消认领 */
export const v1TastyCredentialCancelPost = () => Mock.mock(ApiResponseboolean())

/** 删除罐头书认罐头日志 */
export const v1TastyCredentialclaimlogIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬罐头书认领日志 */
export const v1TastyCredentialclaimlogPageGet = () => Mock.mock(ApiResponseComPageGuanTouShuRenLingRiZhi())

/** 新增罐头书认罐头日志 */
export const v1TastyCredentialclaimlogPost = () => Mock.mock(ApiResponseboolean())

/** 更新罐头书认罐头日志 */
export const v1TastyCredentialclaimlogPut = () => Mock.mock(ApiResponseboolean())

/** 验罐头罐头书是否可以领取 */
export const v1TastyCredentialclaimlogValidateGet = () => Mock.mock(ApiResponseboolean())

/** 罐头书认领 */
export const v1TastyCredentialClaimPost = () => Mock.mock(ApiResponseboolean())

/** 根据罐头书柠檬继续大水牛水果刀 */
export const v1TastyCredentialContinueeducationGet = () => Mock.mock(ApiResponseJiXuDaShuiNiuWeiShengSu())

/** 卷心菜持罐头情况 */
export const v1TastyCredentialCountGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouQingKuang())

/** 罐头书卷心菜详情 */
export const v1TastyCredentialCountinfoGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 柠檬待认领罐头书 */
export const v1TastyCredentialCredentialsGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 持罐头水果刀 */
export const v1TastyCredentialGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 删除持罐头水果刀 */
export const v1TastyCredentialIdDelete = () => Mock.mock(ApiResponseboolean())

/** 分页持罐头水果刀 */
export const v1TastyCredentialPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao())

/** 新增持罐头水果刀 */
export const v1TastyCredentialPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export const v1TastyCredentialprojectGet = () => Mock.mock(ApiResponseGuanTouShuHeGongChengShuiBei())

/** 保存卷心菜耳机成罐头书和工程水杯 */
export const v1TastyCredentialprojectSavePost = () => Mock.mock(ApiResponseboolean())

/** 更新持罐头水果刀 */
export const v1TastyCredentialPut = () => Mock.mock(ApiResponseboolean())

/** 耳机卷心菜统计 */
export const v1TastyCredentialRegisterGet = () => Mock.mock(ApiResponseListErJiJuanXinCaiTongJi())

/** 柠檬耳机卷心菜水果刀 */
export const v1TastyCredentialRegisterinfoGet = () => Mock.mock(ApiResponseComPageErJiJuanXinCaiShuiGuoDao())

/** 罐头书待认领请求 */
export const v1TastyCredentialRequestGet = () => Mock.mock(ApiResponseboolean())

/** 批量上传罐头书，上传为压缩包 */
export const v1TastyCredentialUploadCertificateBatchGet = () => Mock.mock(ApiResponseListHrTastyCredentialDO())

/** 太阳花条件概览 */
export const v1TastyCredupgradeConditionoverviewGet = () => Mock.mock(ApiResponseListTastyCredUpRecommendResp())

/** 评审政策通知 */
export const v1TastyCredupgradeExampolicynoticePost = () => Mock.mock(ApiResponseJSONObject())

/** 太阳花评审结果公示 */
export const v1TastyCredupgradeExamresultshowGet = () => Mock.mock(ApiResponseComPageTastyCredExamResultResp())

/** 各省市区太阳花评审时间柠檬 */
export const v1TastyCredupgradeExamtimePost = () => Mock.mock(ApiResponseJSONObject())

/** 升级推荐 */
export const v1TastyCredupgradeUprecommendGet = () => Mock.mock(ApiResponseTastyCredUpRecommendResp())

/** 批量新增大水牛经历 */
export const v1TastyEducationBatchPost = () => Mock.mock(ApiResponseboolean())

/** 大水牛经历 */
export const v1TastyEducationGet = () => Mock.mock(ApiResponseListDaShuiNiuJingLiShuiGuoDao())

/** 删除大水牛经历 */
export const v1TastyEducationIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增大水牛经历 */
export const v1TastyEducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新大水牛经历 */
export const v1TastyEducationPut = () => Mock.mock(ApiResponseboolean())

/** 获取学校列表 */
export const v1TastyEducationSchoolGet = () => Mock.mock(ApiResponseComPagestring())

/** 柠檬家庭水果刀 */
export const v1TastyFamilyGet = () => Mock.mock(ApiResponseListJiaTingChengYuanShuiGuoDao())

/** 批量新增家庭水果刀 */
export const v1TastyFamilyPost = () => Mock.mock(ApiResponseboolean())

/** 柠檬个人水果刀 id为寄居蟹userid */
export const v1TastyGet = () => Mock.mock(ApiResponseGeRenShuiGuoDao())

/** 删除个人水果刀 */
export const v1TastyIdDelete = () => Mock.mock(ApiResponseboolean())

/** 个人简介 */
export const v1TastyIntroductionGet = () => Mock.mock(ApiResponseTastyIntroductionInfo())

/** 添加个人水果刀 */
export const v1TastyPost = () => Mock.mock(ApiResponseboolean())

/** 批量新增工作业绩 */
export const v1TastyProjectBatchPost = () => Mock.mock(ApiResponseboolean())

/** 工作业绩取消认领 */
export const v1TastyProjectCancelPost = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬业绩认领日志 */
export const v1TastyProjectclaimlogPageGet = () => Mock.mock(ApiResponseComPageYeJiRenLingRiZhi())

/** 工作业绩认领 */
export const v1TastyProjectClaimPost = () => Mock.mock(ApiResponseboolean())

/** 删除工作业绩 */
export const v1TastyProjectIdDelete = () => Mock.mock(ApiResponseboolean())

/** 工作业绩 */
export const v1TastyProjectPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiGongZuoYeJi())

/** 新增工作业绩 */
export const v1TastyProjectPost = () => Mock.mock(ApiResponseboolean())

/** 获取当前用户太阳花 */
export const v1TastyProjectProfessionalGet = () => Mock.mock(ApiResponseSetstring())

/** 工作业绩认领柠檬 */
export const v1TastyProjectProjectsGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新工作业绩 */
export const v1TastyProjectPut = () => Mock.mock(ApiResponseboolean())

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export const v1TastyProjectQueryProjectByIdAbdNameGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新个人水果刀 */
export const v1TastyPut = () => Mock.mock(ApiResponseboolean())

/** 大水牛的专业 */
export const v1TastyToolMajorInEducationGet = () => Mock.mock(ApiResponseListobject())

/** 批量新增工作经历 */
export const v1TastyWorkhistoryBatchPost = () => Mock.mock(ApiResponseboolean())

/** 工作经历 */
export const v1TastyWorkhistoryGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoJingLi())

/** 删除工作经历 */
export const v1TastyWorkhistoryIdDelete = () => Mock.mock(ApiResponseboolean())

/** 新增工作经历 */
export const v1TastyWorkhistoryPost = () => Mock.mock(ApiResponseboolean())

/** 更新工作经历 */
export const v1TastyWorkhistoryPut = () => Mock.mock(ApiResponseboolean())
