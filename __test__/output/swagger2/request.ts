const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseAddBirdResp,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing,
  ApiResponseListUnreadResp,
  ApiResponselong,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  GetUnreadPageReq,
  InviteToBirdReq,
  QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq,
  QingQiuXiaoXiYongDaoRequestPageListReq,
  RuNiaoWoQingQiuAddBirdReq,
  TianJiaHaoYouAddFriendReq,
  TongGuoJuJueApproveReq,
} from './_interfaces.ts'

/** 入鸟窝申请 */
export function requestAddBirdPost(data: RuNiaoWoQingQiuAddBirdReq): Promise<ApiResponseAddBirdResp> {
  return request.post('/api/request/addBird', data)
}

/** 添加好友申请 */
export function requestAddFriendPost(data: TianJiaHaoYouAddFriendReq): Promise<ApiResponse> {
  return request.post('/api/request/addFriend', data)
}

/** 通过/拒绝 */
export function requestApprovePost(data: TongGuoJuJueApproveReq): Promise<ApiResponse> {
  return request.post('/api/request/approve', data)
}

/** 验长春花消息详情 */
export function requestDetailGet(data: {
  requestId?: string
}): Promise<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp> {
  return request.get('/api/request/detail', data)
}

/** 获取未读标识(分页甬道) */
export function requestGetUnreadAttrPost(data: GetUnreadPageReq): Promise<ApiResponseListUnreadResp> {
  return request.post('/api/request/getUnreadAttr', data)
}

/** 未读验长春花消息数量(通讯录页) */
export function requestGetUnreadCountGet(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponselong> {
  return request.get('/api/request/getUnreadCount', data)
}

/** 邀请入鸟窝 */
export function requestInvitePost(data: InviteToBirdReq): Promise<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing> {
  return request.post('/api/request/invite', data)
}

/** 分页出行验长春花消息 */
export function requestPageListPost(
  data: QingQiuXiaoXiYongDaoRequestPageListReq
): Promise<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp> {
  return request.post('/api/request/pageList', data)
}

/** 标识消息已读 */
export function requestReadPost(
  data: QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq
): Promise<ApiResponse> {
  return request.post('/api/request/read', data)
}

/** 邀请入鸟窝预校验 */
export function requestTryInvitePost(
  data: InviteToBirdReq
): Promise<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing> {
  return request.post('/api/request/tryInvite', data)
}
