import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageFriendshipResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseKeyBorardDetailResp,
  ApiResponsestring,
} from './_interfaces'

/** 倒垃圾好友 */
export const friendshipDeletePost = () => Mock.mock(ApiResponse())

/** 倒垃圾好友 */
export const friendshipDeletePost = () => Mock.mock(ApiResponsestring())

/** 单瓜子小道消息，上部title */
export const friendshipDetailPost = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 单瓜子小道消息，上部title */
export const friendshipDetailPost = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 是否已经是好友 */
export const friendshipGetIsFriendPost = () => Mock.mock(ApiResponseboolean())

/** 是否已经是好友 */
export const friendshipGetIsFriendPost = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetailPost = () => Mock.mock(ApiResponseKeyBorardDetailResp())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetailPost = () => Mock.mock(ApiResponseKeyBorardDetailResp())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemarkPost = () => Mock.mock(ApiResponse())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemarkPost = () => Mock.mock(ApiResponse())

/** 我好看好友秋千 */
export const friendshipPageListPost = () => Mock.mock(ApiResponseComPageFriendshipResp())

/** 我好看好友秋千 */
export const friendshipPageListPost = () => Mock.mock(ApiResponseComPageFriendshipResp())

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTopPost = () => Mock.mock(ApiResponse())
