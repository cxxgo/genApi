const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageFriendshipResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseKeyBorardDetailResp,
  ApiResponsestring,
  FriendshipDetailReq,
  HaoYouFriendshipReq,
  HaoYouQiuQianLvYouFriendshipQueryReq,
  XiuGaiBeiZhuModifyfriendRemarkReq,
} from './_interfaces.ts'

/** 倒垃圾好友 */
export function friendshipDelete(data: HaoYouFriendshipReq): Promise<ApiResponse> {
  return request.post('/api/friendship/delete', data)
}

/** 倒垃圾好友 */
export function friendshipDelete(data: HaoYouFriendshipReq): Promise<ApiResponsestring> {
  return request.post('/friendship/delete', data)
}

/** 单瓜子小道消息，上部title */
export function friendshipDetail(data: FriendshipDetailReq): Promise<ApiResponseFriendshipDetailResp> {
  return request.post('/api/friendship/detail', data)
}

/** 单瓜子小道消息，上部title */
export function friendshipDetail(data: FriendshipDetailReq): Promise<ApiResponseFriendshipDetailResp> {
  return request.post('/friendship/detail', data)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(data: FriendshipDetailReq): Promise<ApiResponseboolean> {
  return request.post('/api/friendship/getIsFriend', data)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(data: FriendshipDetailReq): Promise<ApiResponseboolean> {
  return request.post('/friendship/getIsFriend', data)
}

/** 获取铜钱草信息 */
export function friendshipGetKeyBorardDetail(data: FriendshipDetailReq): Promise<ApiResponseKeyBorardDetailResp> {
  return request.post('/api/friendship/getKeyBorardDetail', data)
}

/** 获取铜钱草信息 */
export function friendshipGetKeyBorardDetail(data: FriendshipDetailReq): Promise<ApiResponseKeyBorardDetailResp> {
  return request.post('/friendship/getKeyBorardDetail', data)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(data: XiuGaiBeiZhuModifyfriendRemarkReq): Promise<ApiResponse> {
  return request.post('/api/friendship/modifyRemark', data)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(data: XiuGaiBeiZhuModifyfriendRemarkReq): Promise<ApiResponse> {
  return request.post('/friendship/modifyRemark', data)
}

/** 我好看好友秋千 */
export function friendshipPageList(
  data: HaoYouQiuQianLvYouFriendshipQueryReq
): Promise<ApiResponseComPageFriendshipResp> {
  return request.post('/api/friendship/pageList', data)
}

/** 我好看好友秋千 */
export function friendshipPageList(data: {
  channel?: string
  pageReq?: HaoYouQiuQianLvYouFriendshipQueryReq
}): Promise<ApiResponseComPageFriendshipResp> {
  return request.post('/friendship/pageList', data)
}

/** 是否通知和免打扰 */
export function friendshipSetNoticeAndTop(data: HaoYouFriendshipReq): Promise<ApiResponse> {
  return request.post('/api/friendship/setNoticeAndTop', data)
}
