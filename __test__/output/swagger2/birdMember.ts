const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseMemberBirdStatusResp,
  ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  BirdSetNoticeAndTopReq,
  NiaoWoChengYuanFenYeBirdMemberPageReq,
  NiaoWoChengYuanJiaShiBirdMemberSaveReq,
  NiaoWoChengYuanSaoXueBirdMemberDelReq,
  NiaoWoChengYuanYongDaoChuXingRuCan,
  NiaoWoXinXiBirdDetailReq,
  XiuGaiBeiZhuModifyRemarkBirdReq,
} from './_interfaces.ts'

/** 本鸟窝状态 */
export function birdMemberBirdStatusPost(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponseMemberBirdStatusResp> {
  return request.post('/api/birdMember/birdStatus', data)
}

/** 扫雪鸟窝管理员 */
export function birdMemberDeleteAdminPost(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/deleteAdmin', data)
}

/** 管理员扫雪鸟窝成员 */
export function birdMemberDeletePost(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/delete', data)
}

/** 我在本鸟窝信息详情 */
export function birdMemberDetailPost(
  data: NiaoWoXinXiBirdDetailReq
): Promise<ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/detail', data)
}

/** 是否是鸟窝成员 */
export function birdMemberExistInBirdPost(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponseboolean> {
  return request.post('/api/birdMember/existInBird', data)
}

/** 退出鸟窝瓜子 */
export function birdMemberLeaveBirdPost(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/leaveBird', data)
}

/** 鸟窝管理员甬道(含鸟窝主) */
export function birdMemberListAdminGet(data: {
  imBirdId?: string
}): Promise<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.get('/api/birdMember/listAdmin', data)
}

/** 出行成员甬道 */
export function birdMemberListPost(
  data: NiaoWoChengYuanYongDaoChuXingRuCan
): Promise<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/list', data)
}

/** 修改鸟窝成员在本鸟窝备注 */
export function birdMemberModifyRemarkPost(data: XiuGaiBeiZhuModifyRemarkBirdReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/modifyRemark', data)
}

/** 根据birdId分页出行成员甬道 */
export function birdMemberPageListPost(
  data: NiaoWoChengYuanFenYeBirdMemberPageReq
): Promise<ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/pageList', data)
}

/** 添加鸟窝管理员 */
export function birdMemberSaveAdminPost(data: NiaoWoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/saveAdmin', data)
}

/** 添加鸟窝成员 */
export function birdMemberSavePost(data: NiaoWoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/save', data)
}

/** 是否通知和免打扰 */
export function birdMemberSetNoticeAndTopPost(data: BirdSetNoticeAndTopReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/setNoticeAndTop', data)
}
