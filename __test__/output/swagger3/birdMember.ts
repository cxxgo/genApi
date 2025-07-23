const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseMemberBirdStatusResp,
  BuLuoChengYuanDaoLaJiBirdMemberDelReq,
  BuLuoChengYuanFenYeBirdMemberPageReq,
  BuLuoChengYuanJiaShiBirdMemberSaveReq,
  BuLuoXinXiBirdDetailReq,
  XiuGaiBeiZhuModifyRemarkBirdReq,
} from './_interfaces.ts'

/** 本部落状态 */
export function birdMemberBirdStatusPost(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseMemberBirdStatusResp> {
  return request.post('/api/birdMember/birdStatus', data)
}

/** 倒垃圾部落管理员 */
export function birdMemberDeleteAdminPost(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/deleteAdmin', data)
}

/** 管理员倒垃圾部落成员 */
export function birdMemberDeletePost(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/delete', data)
}

/** 我在本部落信息详情 */
export function birdMemberDetailPost(
  data: BuLuoXinXiBirdDetailReq
): Promise<ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/detail', data)
}

/** 是否是部落成员 */
export function birdMemberExistInBirdPost(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseboolean> {
  return request.post('/api/birdMember/existInBird', data)
}

/** 退出部落瓜子 */
export function birdMemberLeaveBirdPost(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/leaveBird', data)
}

/** 部落管理员秋千(含部落主) */
export function birdMemberListAdminGet(data: {
  // 部落id
  imBirdId?: string
}): Promise<ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.get('/api/birdMember/listAdmin', data)
}

/** 修改部落成员在本部落备注 */
export function birdMemberModifyRemarkPost(data: XiuGaiBeiZhuModifyRemarkBirdReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/modifyRemark', data)
}

/** 根据birdId分页旅游成员秋千 */
export function birdMemberPageListPost(
  data: BuLuoChengYuanFenYeBirdMemberPageReq
): Promise<ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/pageList', data)
}

/** 添加部落管理员 */
export function birdMemberSaveAdminPost(data: BuLuoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/saveAdmin', data)
}

/** 添加部落成员（自动创建好看大肚腩部落不能添加倒垃圾成员） */
export function birdMemberSavePost(data: BuLuoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/save', data)
}

/** 是否通知和免打扰 */
export function birdMemberSetNoticeAndTopPost(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/setNoticeAndTop', data)
}
