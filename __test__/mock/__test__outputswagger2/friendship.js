import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseComPageFriendshipResp,
  ApiResponseFriendshipDetailResp,
  ApiResponseFriendshipKeyBorardDetailResp,
  ApiResponseListFriendshipResp,
  ApiResponsestring,
} from './_interfaces'

/** 扫雪好友 */
export const friendshipDeletePost = () => Mock.mock(ApiResponsestring())

/** 单瓜子小道消息，上部title */
export const friendshipDetailPost = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 是否已经是好友 */
export const friendshipGetIsFriendPost = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetailPost = () => Mock.mock(ApiResponseFriendshipKeyBorardDetailResp())

/** 好友甬道 */
export const friendshipListPost = () => Mock.mock(ApiResponseListFriendshipResp())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemarkPost = () => Mock.mock(ApiResponse())

/** 我聪明好友甬道 */
export const friendshipPageListPost = () => Mock.mock(ApiResponseComPageFriendshipResp())

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTopPost = () => Mock.mock(ApiResponse())

/** 是否接收对方消息 */
export const friendshipSetRcvMsgPost = () => Mock.mock(ApiResponse())

/** 是否允许对方查看手机号 */
export const friendshipSetShowPhonePost = () => Mock.mock(ApiResponse())
