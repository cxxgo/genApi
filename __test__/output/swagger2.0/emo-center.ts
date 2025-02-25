const request: any = () => {}
import type {
  ApiResponseComPageXiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
  ApiResponseVoid,
  EntReSetReq,
  EarthDeptMetaRespeFanHuiMoXing,
  ApiResponseWhiteDetailResp,
} from './_interfaces.ts'

/** 这个接口注释、入参注释、出参注释 有特殊字符 ， 等，入参有枚举 */
export function emocenterApiEnterpriseList(data: {
  // UN_COOPERATE("未合作"), IN_COOPERATE("合作中"), EXPIRE_COOPERATE("合作到期"), TERMINATE_COOPERATING("终止合作中"), TERMINATE_LOG_OFF("终止待注销"), FORWARD_LOG_OFF("终止已注销"), EXPIRE_LOG_OFF("到期已注销"),
  cooperateStatus?: string
  // 西蓝花类型  * 合作种类一级分类
  cooperateTypeFirst?: string
  // 西蓝花性质 合作 *种类二级分类
  cooperateTypeSecond?: string
  // //西蓝花性质 合作种类三级分类\
  cooperateTypeThird?: string
}): Promise<ApiResponseComPageXiLanHuaLieBiao> {
  return request.get('/emo-center/api/enterprise/list', data)
}

/** 这个接口处理后的 parsedData 里的type为空，导致出现形如 'data|1-20': [()] 的错误mock数据 */
export function emocenterApiFeeRuleGetCooperateTypeIdsByFeeId(data: {
  feeId?: string
}): Promise<ApiResponseListListlong> {
  return request.get('/emo-center/api/feeRule/getCooperateTypeIdsByFeeId', data)
}

/** 这个接口出参树形结构，同样的children 结构导致 mock 函数死循环了 */
export function emocenterApiAdminJobCategoryByParentIds(data: {
  parentIds?: string[]
}): Promise<ApiResponseListJobCategoryConfigResp> {
  return request.get('/emo-center/api/admin/jobCategory/byParentIds', data)
}

/** 这个接口的入参既有 in query,又有 in body */
export function emocenterApiSearchRecordDeleteByKeywords(data: {
  groupCode?: string
  keywords?: string[]
}): Promise<ApiResponseVoid> {
  return request.post('/emo-center/api/searchRecord/deleteByKeywords', data)
}

/** 这个接口的入参既有 in path, 又有 in body, 还有 in header */
export function emocenterApiEmpowerEnterpriseReUpEntReSetEnterpriseId(data: {
  enterpriseId?: string
  req?: EntReSetReq
}): Promise<ApiResponseVoid> {
  const { enterpriseId, req } = data
  return request.post(`/emo-center/api/empower/enterpriseRe/upEntReSet/${enterpriseId}`, { req })
}

/** 返回数值是个数组而非对象 */
export function emocenterEffectiveDept(): Promise<EarthDeptMetaRespeFanHuiMoXing[]> {
  return request.get('/api/emo-center/effective/dept')
}

/** 参数在路径上 */
export function emocenterWhiteGetWhiteId(data: { whiteId?: string }): Promise<ApiResponseWhiteDetailResp> {
  const { whiteId } = data
  return request.get(`/api/emo-center/white/get/${whiteId}`)
}

/** 这是一个 put 请求 */
export function emocenterAuthExecute(data: any): Promise<ApiResponseVoid> {
  return request.put('/api/emo-center/auth/execute', data)
}

/** 这是一个 delete 请求 */
export function emocenterApiV1TastyWorkhistoryId(data: { id?: string }): Promise<any> {
  const { id } = data
  return request.delete(`/emo-center/api/v1/tasty/work-history/${id}`)
}
