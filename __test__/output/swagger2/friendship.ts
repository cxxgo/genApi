const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageFriendshipResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseFriendshipKeyBorardDetailResp,
  ApiResponseListFriendshipResp,
  ApiResponsestring,
  FriendshipDetailReq,
  HaoYouFriendshipReq,
  HaoYouYongDaoChuXingFriendshipQueryReq,
  ListFriendshipQueryReq,
  SetRcvMsgReq,
  SetShowPhoneReq,
  XiuGaiBeiZhuModifyfriendRemarkReq,
} from './_interfaces.ts'

/** 扫雪好友 */
export function friendshipDelete(data: HaoYouFriendshipReq): Promise<ApiResponsestring> {
  return request.post('/api/friendship/delete', data)
}

/** 单瓜子小道消息，上部title */
export function friendshipDetail(data: FriendshipDetailReq): Promise<ApiResponseFriendshipDetailResp> {
  return request.post('/api/friendship/detail', data)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(data: FriendshipDetailReq): Promise<ApiResponseboolean> {
  return request.post('/api/friendship/getIsFriend', data)
}

/** 获取铜钱草信息 */
export function friendshipGetKeyBorardDetail(
  data: FriendshipDetailReq
): Promise<ApiResponseFriendshipKeyBorardDetailResp> {
  return request.post('/api/friendship/getKeyBorardDetail', data)
}

/** 好友甬道 */
export function friendshipList(data: ListFriendshipQueryReq): Promise<ApiResponseListFriendshipResp> {
  return request.post('/api/friendship/list', data)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(data: XiuGaiBeiZhuModifyfriendRemarkReq): Promise<ApiResponse> {
  return request.post('/api/friendship/modifyRemark', data)
}

/** 我聪明好友甬道 */
export function friendshipPageList(
  data: HaoYouYongDaoChuXingFriendshipQueryReq
): Promise<ApiResponseComPageFriendshipResp> {
  return request.post('/api/friendship/pageList', data)
}

/** 是否通知和免打扰 */
export function friendshipSetNoticeAndTop(data: HaoYouFriendshipReq): Promise<ApiResponse> {
  return request.post('/api/friendship/setNoticeAndTop', data)
}

/** 是否接收对方消息 */
export function friendshipSetRcvMsg(data: SetRcvMsgReq): Promise<ApiResponse> {
  return request.post('/api/friendship/setRcvMsg', data)
}

/** 是否允许对方查看手机号 */
export function friendshipSetShowPhone(data: SetShowPhoneReq): Promise<ApiResponse> {
  return request.post('/api/friendship/setShowPhone', data)
}
