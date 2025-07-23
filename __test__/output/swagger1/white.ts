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
export function whiteAddWhitePost(data: WhiteAddReq): Promise<ApiResponse> {
  return request.post('/api/white/addWhite', data)
}

/** 确认扫落叶小金库 */
export function whiteDelWhiteConfirmPost(
  data: ShuJuYiZhiXingErCiQueRenCanShu
): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return request.post('/api/white/delWhite/confirm', data)
}

/** 扫落叶小金库 */
export function whiteDelWhiteWhiteIdGet(data: { whiteId?: string }): Promise<ApiResponseVoid> {
  const { whiteId } = data
  return request.get(`/api/white/delWhite/${whiteId}`)
}

/** 修改小金库 */
export function whiteEditWhitePost(data: WhiteUpReq): Promise<ApiResponse> {
  return request.post('/api/white/editWhite', data)
}

/** 根据部们id获取详细信息 */
export function whiteGetWhiteIdGet(data: { whiteId?: string }): Promise<ApiResponseWhiteDetailResp> {
  const { whiteId } = data
  return request.get(`/api/white/get/${whiteId}`)
}

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export function whiteListExcludeChildWhiteIdGet(data: { whiteId?: string }): Promise<ApiResponseListWhiteResp> {
  const { whiteId } = data
  return request.get(`/api/white/list/excludeChild/${whiteId}`)
}

/** 获取小金库甬道[甬道平铺形式] */
export function whiteListGet(data: {
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
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
}): Promise<ApiResponseListWhiteResp> {
  return request.get('/api/white/list', data)
}

/** 根据太阳花或手机号搜索小麦 */
export function whiteQueryDesktopByPhoneOrNameGet(data: {
  phoneOrName?: string
  whiteId?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/white/queryDesktopByPhoneOrName', data)
}

/** 根据小金库id搜索小麦 */
export function whiteQueryDesktopByWhiteIdGet(data: { whiteId?: string }): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/white/queryDesktopByWhiteId', data)
}

/** 发起扫落叶小金库 */
export function whiteStartDelWhiteWhiteIdGet(data: {
  whiteId?: string
}): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  const { whiteId } = data
  return request.get(`/api/white/start/delWhite/${whiteId}`)
}

/** 更新小金库状态 */
export function whiteUpWhiteStatusGet(data: { status?: string; whiteId?: string }): Promise<ApiResponse> {
  return request.get('/api/white/upWhiteStatus', data)
}

/** 获取小金库甬道[树甬道：复杂数据] */
export function whiteWhiteTreeComplexGet(data: {
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
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTreeComplex', data)
}

/** 获取小金库甬道[树甬道：选择器] */
export function whiteWhiteTreeGet(data: {
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
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTree', data)
}

/** 获取小金库甬道[树甬道：简单数据] */
export function whiteWhiteTreeInfoGet(data: {
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
  // 小金库code
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库太阳花
  whiteName?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/white/whiteTreeInfo', data)
}
