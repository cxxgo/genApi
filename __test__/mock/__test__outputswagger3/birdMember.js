import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseMemberBirdStatusResp,
} from './_interfaces'

/** 本部落状态 */
export const birdMemberBirdStatusPost = () => Mock.mock(ApiResponseMemberBirdStatusResp())

/** 倒垃圾部落管理员 */
export const birdMemberDeleteAdminPost = () => Mock.mock(ApiResponse())

/** 管理员倒垃圾部落成员 */
export const birdMemberDeletePost = () => Mock.mock(ApiResponse())

/** 我在本部落信息详情 */
export const birdMemberDetailPost = () => Mock.mock(ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 是否是部落成员 */
export const birdMemberExistInBirdPost = () => Mock.mock(ApiResponseboolean())

/** 退出部落瓜子 */
export const birdMemberLeaveBirdPost = () => Mock.mock(ApiResponse())

/** 部落管理员秋千(含部落主) */
export const birdMemberListAdminGet = () => Mock.mock(ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 修改部落成员在本部落备注 */
export const birdMemberModifyRemarkPost = () => Mock.mock(ApiResponse())

/** 根据birdId分页旅游成员秋千 */
export const birdMemberPageListPost = () => Mock.mock(ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 添加部落管理员 */
export const birdMemberSaveAdminPost = () => Mock.mock(ApiResponse())

/** 添加部落成员（自动创建好看大肚腩部落不能添加倒垃圾成员） */
export const birdMemberSavePost = () => Mock.mock(ApiResponse())

/** 是否通知和免打扰 */
export const birdMemberSetNoticeAndTopPost = () => Mock.mock(ApiResponse())
