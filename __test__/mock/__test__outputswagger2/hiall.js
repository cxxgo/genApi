import Mock from 'better-mock'
import {
  ApiResponseComPageContactResp,
  ApiResponseobject,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export const hiallClearHiallPost = () => Mock.mock(ApiResponseobject())

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export const hiallCreatePost = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 常用联系人 */
export const hiallOftenContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息甬道 */
export const hiallPageListPost = () => Mock.mock(ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing())

/** 最近联系人 */
export const hiallRecentContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息甬道 */
export const hiallUnreadListPost = () => Mock.mock(ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing())
