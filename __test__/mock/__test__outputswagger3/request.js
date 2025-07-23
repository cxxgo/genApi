import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseAddBirdResp,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  ApiResponseListUnreadResp,
  ApiResponselong,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  ApiResponseYaoQingRuBuLuoXiangYing,
} from './_interfaces'

/** 入部落申请 */
export const requestAddBirdPost = () => Mock.mock(ApiResponseAddBirdResp())

/** 添加好友申请 */
export const requestAddFriendPost = () => Mock.mock(ApiResponse())

/** 通过/拒绝 */
export const requestApprovePost = () => Mock.mock(ApiResponse())

/** 验长春花消息详情 */
export const requestDetailGet = () => Mock.mock(ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp())

/** 获取未读标识(分页秋千) */
export const requestGetUnreadAttrPost = () => Mock.mock(ApiResponseListUnreadResp())

/** 未读验长春花消息数量(通讯录页) */
export const requestGetUnreadCountGet = () => Mock.mock(ApiResponselong())

/** 邀请入部落 */
export const requestInvitePost = () => Mock.mock(ApiResponseYaoQingRuBuLuoXiangYing())

/** 分页旅游验长春花消息 */
export const requestPageListPost = () => Mock.mock(ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp())

/** 标识消息已读 */
export const requestReadPost = () => Mock.mock(ApiResponse())

/** 邀请入部落预校验 */
export const requestTryInvitePost = () => Mock.mock(ApiResponseYaoQingRuBuLuoXiangYing())
