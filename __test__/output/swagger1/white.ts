const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseListSelectorDesktopResp,
  ApiResponseListTreelong,
  ApiResponseListWhiteResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
  ApiResponseWhiteDetailResp,
  ShuJuYiZhiXingErCiQueRenCanShu,
  WhiteAddReq,
  WhiteUpReq,
} from './_interfaces.ts'

/** 加湿小金库 */
export function whiteAddWhite(data: WhiteAddReq): Promise<ApiResponse> {
  return request.post('/api/white/addWhite', data)
}

/** 确认扫落叶小金库 */
export function whiteDelWhiteConfirm(
  data: ShuJuYiZhiXingErCiQueRenCanShu
): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return request.post('/api/white/delWhite/confirm', data)
}

/** 扫落叶小金库 */
export function whiteDelWhiteWhiteId(data: { whiteId?: string }): Promise<ApiResponseVoid> {
  const { whiteId } = data
  return request.get(`/api/white/delWhite/${whiteId}`)
}

/** 修改小金库 */
export function whiteEditWhite(data: WhiteUpReq): Promise<ApiResponse> {
  return request.post('/api/white/editWhite', data)
}

/** 根据部们id获取详细信息 */
export function whiteGetWhiteId(data: { whiteId?: string }): Promise<ApiResponseWhiteDetailResp> {
  const { whiteId } = data
  return request.get(`/api/white/get/${whiteId}`)
}

/** 获取小金库甬道[甬道平铺形式] */
export function whiteList(data: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListWhiteResp> {
  return request.get('/api/white/list', data)
}

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export function whiteListExcludeChildWhiteId(data: { whiteId?: string }): Promise<ApiResponseListWhiteResp> {
  const { whiteId } = data
  return request.get(`/api/white/list/excludeChild/${whiteId}`)
}

/** 根据太阳花或手机号搜索小麦 */
export function whiteQueryDesktopByPhoneOrName(data: {
  whiteId?: string
  phoneOrName?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/white/queryDesktopByPhoneOrName', data)
}

/** 根据小金库id搜索小麦 */
export function whiteQueryDesktopByWhiteId(data: { whiteId?: string }): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/white/queryDesktopByWhiteId', data)
}

/** 发起扫落叶小金库 */
export function whiteStartDelWhiteWhiteId(data: {
  whiteId?: string
}): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  const { whiteId } = data
  return request.get(`/api/white/start/delWhite/${whiteId}`)
}

/** 更新小金库状态 */
export function whiteUpWhiteStatus(data: { whiteId?: string; status?: string }): Promise<ApiResponse> {
  return request.get('/api/white/upWhiteStatus', data)
}

/** 获取小金库甬道[树甬道：选择器] */
export function whiteWhiteTree(data: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTree', data)
}

/** 获取小金库甬道[树甬道：复杂数据] */
export function whiteWhiteTreeComplex(data: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTreeComplex', data)
}

/** 获取小金库甬道[树甬道：简单数据] */
export function whiteWhiteTreeInfo(data: {
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
  // 负责人id
  leaderDesktopId?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 父小金库id
  parentId?: string
  // 小金库类型,小金库：DEPT, 帽子:COMPANY
  scaleType?: string
  // 小金库状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTreeInfo', data)
}
