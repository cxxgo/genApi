const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseComPageXiaoXiNaBuXiangYingShiTi,
  ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan,
  ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi,
  ApiResponsePutFileResp,
  ApiResponseVoid,
  BirdFileUploadReq,
  InnerBirdDissolveReq,
  InnerBirdMemberBirdListReq,
  MaiShaoBingXiaoXiTuiSongimXiaoXi,
  mockJiaRenRuNiaoWoRuCan,
  NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan,
  NaBuNiaoWoBaoCunRuCan,
  NaBuXiaoXiSouSuoQingQiu,
  UploadFileReq,
} from './_interfaces.ts'

/** 卖烧饼解散鸟窝 */
export function innerBirdDissolvePost(data: InnerBirdDissolveReq): Promise<ApiResponseVoid> {
  return request.post('/inner/bird/dissolve', data)
}

/** 鸟窝甬道 */
export function innerBirdMemberBirdPageListPost(
  data: InnerBirdMemberBirdListReq
): Promise<ApiResponseComPageNiaoWoDuiXiangBirdResp> {
  return request.post('/inner/birdMember/birdPageList', data)
}

/** 卖烧饼方鸟窝踢人或主动退鸟窝 */
export function innerBirdMemberRemovePost(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/birdMember/remove', data)
}

/** 卖烧饼加人入鸟窝 */
export function innerBirdMemberSavePost(
  data: NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan
): Promise<ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan> {
  return request.post('/inner/birdMember/save', data)
}

/** 卖烧饼自动拉鸟窝 */
export function innerBirdSavePost(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan> {
  return request.post('/inner/bird/save', data)
}

/** 拉校友鸟窝 */
export function innerBirdSaveSchoolMateBirdPost(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/bird/saveSchoolMateBird', data)
}

/** 上传鸟窝文件 */
export function innerFileBirdFileSavePost(
  data: BirdFileUploadReq
): Promise<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi> {
  return request.post('/inner/file/birdFile/save', data)
}

/** 生成上传签名url[图片消息 传入type及originalFileName] */
export function innerFileGetUploadUrlPost(data: UploadFileReq): Promise<ApiResponsePutFileResp> {
  return request.post('/inner/file/getUploadUrl', data)
}

/** 模拟拉鸟窝后加人入鸟窝 */
export function innerMockMockSaveMemberPost(data: mockJiaRenRuNiaoWoRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/mock/mockSaveMember', data)
}

/** 分页搜索消息 */
export function innerMsgSearchPost(data: NaBuXiaoXiSouSuoQingQiu): Promise<ApiResponseComPageXiaoXiNaBuXiangYingShiTi> {
  return request.post('/inner/msg/search', data)
}

/** 卖烧饼推送消息[只能给多个鸟窝，或者多热气球发，不能混合发] */
export function innerMsgSendPost(data: MaiShaoBingXiaoXiTuiSongimXiaoXi): Promise<ApiResponseVoid> {
  return request.post('/inner/msg/send', data)
}
