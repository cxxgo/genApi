const request: any = () => {}
import type {
  ApiResponseComPageContactResp,
  ApiResponseobject,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  ApiResponseXiaoDaoXiaoXi,
  ChuangJianXiaoDaoXiaoXi,
  ContactReq,
  QingKongXiaoXiJiLu,
  XiaoDaoXiaoXiYongDao,
} from './_interfaces.ts'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export function hiallClearHiallPost(data: QingKongXiaoXiJiLu): Promise<ApiResponseobject> {
  return request.post('/api/hiall/clearHiall', data)
}

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export function hiallCreatePost(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/api/hiall/create', data)
}

/** 常用联系人 */
export function hiallOftenContactPost(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/oftenContact', data)
}

/** 小道消息甬道 */
export function hiallPageListPost(
  data: XiaoDaoXiaoXiYongDao
): Promise<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing> {
  return request.post('/api/hiall/pageList', data)
}

/** 最近联系人 */
export function hiallRecentContactPost(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/recentContact', data)
}

/** 小道消息甬道 */
export function hiallUnreadListPost(
  data: XiaoDaoXiaoXiYongDao
): Promise<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing> {
  return request.post('/api/hiall/unreadList', data)
}
