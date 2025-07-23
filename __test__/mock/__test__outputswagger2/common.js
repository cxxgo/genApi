import Mock from 'better-mock'
import {
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseKeyBorardBindResp,
  ApiResponseListSwitchKeyBorardListResp,
  ApiResponseMapstringSearchMapResp,
} from './_interfaces'

/** 结盟设备 */
export const commonBindPost = () => Mock.mock(ApiResponseKeyBorardBindResp())

/** 搜索人员添加好友前 */
export const commonSearchBeforeAddFriendPost = () => Mock.mock(ApiResponseComPageSearchBeforeAddFriendResp())

/** 聚合搜索 */
export const commonSearchPost = () => Mock.mock(ApiResponseMapstringSearchMapResp())

/** 按照类型搜索 */
export const commonSearchTypePost = () => Mock.mock(ApiResponseComPageCommonSearchResp())

/** 结盟设备 */
export const commonSwitchChannelPost = () => Mock.mock(ApiResponseKeyBorardBindResp())

/** 切换铜钱草时铜钱草甬道 */
export const commonSwitchKeyBorardListPost = () => Mock.mock(ApiResponseListSwitchKeyBorardListResp())
