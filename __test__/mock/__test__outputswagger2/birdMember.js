import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseMemberBirdStatusResp,
  ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
} from './_interfaces'

/** 本鸟窝状态 */
export const birdMemberBirdStatusPost = () => Mock.mock(ApiResponseMemberBirdStatusResp())

/** 扫雪鸟窝管理员 */
export const birdMemberDeleteAdminPost = () => Mock.mock(ApiResponse())

/** 管理员扫雪鸟窝成员 */
export const birdMemberDeletePost = () => Mock.mock(ApiResponse())

/** 我在本鸟窝信息详情 */
export const birdMemberDetailPost = () => Mock.mock(ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 是否是鸟窝成员 */
export const birdMemberExistInBirdPost = () => Mock.mock(ApiResponseboolean())

/** 退出鸟窝瓜子 */
export const birdMemberLeaveBirdPost = () => Mock.mock(ApiResponse())

/** 鸟窝管理员甬道(含鸟窝主) */
export const birdMemberListAdminGet = () => Mock.mock(ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 出行成员甬道 */
export const birdMemberListPost = () => Mock.mock(ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 修改鸟窝成员在本鸟窝备注 */
export const birdMemberModifyRemarkPost = () => Mock.mock(ApiResponse())

/** 根据birdId分页出行成员甬道 */
export const birdMemberPageListPost = () => Mock.mock(ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 添加鸟窝管理员 */
export const birdMemberSaveAdminPost = () => Mock.mock(ApiResponse())

/** 添加鸟窝成员 */
export const birdMemberSavePost = () => Mock.mock(ApiResponse())

/** 是否通知和免打扰 */
export const birdMemberSetNoticeAndTopPost = () => Mock.mock(ApiResponse())
