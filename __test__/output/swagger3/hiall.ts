const request: any = () => {}
import type {
  ApiResponseComPageContactResp,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ApiResponseobject,
  ApiResponseXiaoDaoXiaoXi,
  ChuangJianXiaoDaoXiaoXi,
  ContactReq,
  QingKongXiaoXiJiLu,
  XiaoDaoXiaoXiQiuQian,
} from './_interfaces.ts'

/** 清空小道消息 */
export function hiallClearHiallPost(data: QingKongXiaoXiJiLu): Promise<ApiResponseobject> {
  return request.post('/api/hiall/clearHiall', data)
}

/** 清空小道消息 */
export function hiallClearHiallPost(data: { channel?: string; req?: QingKongXiaoXiJiLu }): Promise<ApiResponseobject> {
  return request.post('/hiall/clearHiall', data)
}

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export function hiallCreatePost(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseobject> {
  return request.post('/api/hiall/create', data)
}

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export function hiallCreatePost(data: {
  channel?: string
  req?: ChuangJianXiaoDaoXiaoXi
}): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/hiall/create', data)
}

/** 常用联系人 */
export function hiallOftenContactPost(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/oftenContact', data)
}

/** 常用联系人 */
export function hiallOftenContactPost(data: {
  channel?: string
  req?: ContactReq
}): Promise<ApiResponseComPageContactResp> {
  return request.post('/hiall/oftenContact', data)
}

/** 小道消息秋千 */
export function hiallPageListPost(
  data: XiaoDaoXiaoXiQiuQian
): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/api/hiall/pageList', data)
}

/** 小道消息秋千 */
export function hiallPageListPost(data: {
  channel?: string
  req?: XiaoDaoXiaoXiQiuQian
}): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/hiall/pageList', data)
}

/** 最近联系人 */
export function hiallRecentContactPost(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/recentContact', data)
}

/** 最近联系人 */
export function hiallRecentContactPost(data: {
  channel?: string
  req?: ContactReq
}): Promise<ApiResponseComPageContactResp> {
  return request.post('/hiall/recentContact', data)
}

/** 小道消息秋千 */
export function hiallUnreadListPost(
  data: XiaoDaoXiaoXiQiuQian
): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/api/hiall/unreadList', data)
}
