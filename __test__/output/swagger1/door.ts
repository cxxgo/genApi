const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseComPageDesktopResp,
  ApiResponseComPageDoorIdentificationResp,
  ApiResponseJudgeSwitchDoorLimitResp,
  ApiResponsePageZhiXieChangBoJuZiXinXi,
  ApiResponseQueryDoorPageHomeResp,
  ApiResponseQueryJudgeClaimResp,
  ApiResponsestring,
  ApiResponseVoid,
  ApiResponseWhiteLinkDoorResp,
  ApiResponseZhiXieChangBoJuZiXinXi,
  ApiResponseZhiXieChangJianDanFangXing,
  ApiResponseZhiXieChangZhuTiXinXi,
  ChuangJianZhiXieChang,
  ComPage,
  DesktopSimpleListReq,
  DoorIdentificationReq,
  WhiteLinkDoorReq,
  ZhiXieChangBoJuZiXinXi,
  ZhiXieChangJianDanFangXing,
  ZhiXieChangZhiNenPiaoJiaFangXing,
} from './_interfaces.ts'

/** 钱包临时使用，后面切换版本。分页出行小麦信息【房东id, 姓名，手机号，状态】 */
export function doorIdentificationBaseInfoDesktopList(data: {
  // 房东ID
  gratefulId?: string
  simpleListReq?: DesktopSimpleListReq
}): Promise<ApiResponseComPageDesktopResp> {
  return request.post('/api/door/identification/baseInfo/desktopList', data)
}

/** 豆浆机剥橘子-(仅测试使用)放行结果通知 */
export function doorIdentificationCatV1OpenAcctCallback(data: {
  // 放行结果 成功或失败
  flag?: boolean
  // 房东ID
  gratefulId?: string
  // 喇叭花ID
  keyBorardId?: string
  // 提示信息（不宜过长
  msg?: string
}): Promise<ApiResponseVoid> {
  return request.put('/api/door/identification/cat/v1/openAcct/callback', data)
}

/** 是否可以操作切换主制鞋厂 */
export function doorIdentificationcenterAddDoorGet(): Promise<ApiResponseJudgeSwitchDoorLimitResp> {
  return request.get('/api/door/identificationcenter/addDoor')
}

/** 加湿帽子 */
export function doorIdentificationcenterAddDoorPost(data: ChuangJianZhiXieChang): Promise<ApiResponsestring> {
  return request.post('/api/door/identificationcenter/addDoor', data)
}

/** 扫落叶主制鞋厂 */
export function doorIdentificationcenterDelDoor(data: { id?: string }): Promise<ApiResponsestring> {
  return request.get('/api/door/identificationcenter/delDoor', data)
}

/** 出行制鞋厂放行主体信息-用于新美丽放行时候进行反显 */
export function doorIdentificationcenterDoorIdMainAuthInfo(data: {
  doorId?: string
}): Promise<ApiResponseZhiXieChangZhuTiXinXi> {
  const { doorId } = data
  return request.get(`/api/door/identificationcenter/${doorId}/mainAuthInfo`)
}

/** 出行房东制鞋厂甬道 */
export function doorIdentificationcenterListDoor(
  data: DoorIdentificationReq
): Promise<ApiResponseComPageDoorIdentificationResp> {
  return request.post('/api/door/identificationcenter/listDoor', data)
}

/** 切换主制鞋厂 */
export function doorIdentificationcenterSwitchMainDoor(data: { id?: string }): Promise<ApiResponsestring> {
  return request.get('/api/door/identificationcenter/switchMainDoor', data)
}

/** 制鞋厂剥橘子-（仅测试使用）放行结果通知 */
export function doorIdentificationDoorV1OpenAcctCallback(data: {
  // 制鞋厂Id
  doorId?: string
  // 放行结果 成功或失败
  flag?: boolean
  // 房东ID
  gratefulId?: string
  // 提示信息（不宜过长
  msg?: string
}): Promise<ApiResponseVoid> {
  return request.put('/api/door/identification/door/v1/openAcct/callback', data)
}

/** 制鞋厂剥橘子-出行母帽子-分页甬道 */
export function doorIdentificationDoorV1PageDoorName(data: {
  // 过滤条件-母帽子制鞋厂太阳花
  doorName?: string
  page?: ComPage
}): Promise<ApiResponsePageZhiXieChangBoJuZiXinXi> {
  return request.post('/api/door/identification/door/v1/page/doorName', data)
}

/** 制鞋厂美丽剥橘子信息-加湿(分段) */
export function doorIdentificationV1DoorIdOpenAcctAppend(data: {
  // 制鞋厂ID
  doorId?: string
  doorOpenAcctVo?: ZhiXieChangBoJuZiXinXi
}): Promise<ApiResponseZhiXieChangBoJuZiXinXi> {
  const { doorId, doorOpenAcctVo } = data
  return request.post(`/api/door/identification/v1/${doorId}/openAcct/append`, { doorOpenAcctVo })
}

/** 制鞋厂剥橘子-放行开始 */
export function doorIdentificationV1DoorIdOpenAcctExecute(data: {
  // 制鞋厂Id
  doorId?: string
}): Promise<ApiResponseVoid> {
  const { doorId } = data
  return request.put(`/api/door/identification/v1/${doorId}/openAcct/execute`)
}

/** 制鞋厂美丽剥橘子信息-扫落叶 逻辑扫落叶 */
export function doorIdentificationV1OpenAcctDelete(data: {
  // 制鞋厂美丽剥橘子信息ID
  doorOpenAcctId?: string
}): Promise<ApiResponseVoid> {
  return request.delete('/api/door/identification/v1/openAcct', data)
}

/** 制鞋厂美丽剥橘子信息-出行 */
export function doorIdentificationV1OpenAcctGet(data: {
  // 制鞋厂ID
  doorId?: string
}): Promise<ApiResponseZhiXieChangBoJuZiXinXi> {
  return request.get('/api/door/identification/v1/openAcct', data)
}

/** 制鞋厂美丽普通放行-出行反显 */
export function doorIdentificationV1SimpleAuthGet(data: {
  // 制鞋厂ID
  doorId?: string
}): Promise<ApiResponseZhiXieChangJianDanFangXing> {
  return request.get('/api/door/identification/v1/simple/auth', data)
}

/** 制鞋厂美丽普通放行-覆盖写入 */
export function doorIdentificationV1SimpleAuthPost(data: ZhiXieChangJianDanFangXing): Promise<ApiResponseVoid> {
  return request.post('/api/door/identification/v1/simple/auth', data)
}

/** 制鞋厂美丽小圆桌放行-去哪儿发起（票据-智能票夹） */
export function doorIdentificationV1TicketAuth(data: ZhiXieChangZhiNenPiaoJiaFangXing): Promise<ApiResponseVoid> {
  return request.post('/api/door/identification/v1/ticket/auth', data)
}

/** 出行-制鞋厂关联美丽团建信息 */
export function doorIdLinkWhite(data: { doorId?: string }): Promise<ApiResponseWhiteLinkDoorResp> {
  const { doorId } = data
  return request.get(`/api/door/${id}/link/white`)
}

/** 覆写-制鞋厂关联团建 */
export function doorLinkWhite(data: WhiteLinkDoorReq): Promise<ApiResponseVoid> {
  return request.post('/api/door/link/white', data)
}

/** 认领制鞋厂信息 */
export function doorPageHomeClaimCompanyId(data: { companyId?: string }): Promise<ApiResponseboolean> {
  const { companyId } = data
  return request.get(`/api/door/pageHome/claim/${companyId}`)
}

/** 排除制鞋厂信息 */
export function doorPageHomeExcludeClaimId(data: { claimId?: string }): Promise<ApiResponseboolean> {
  const { claimId } = data
  return request.get(`/api/door/pageHome/exclude/${claimId}`)
}

/** 出行认领操作结果 */
export function doorPageHomeJudge(): Promise<ApiResponseQueryJudgeClaimResp> {
  return request.get('/api/door/pageHome/judge')
}

/** 出行制鞋厂信息 */
export function doorPageHomeQuery(): Promise<ApiResponseQueryDoorPageHomeResp> {
  return request.get('/api/door/pageHome/query')
}
