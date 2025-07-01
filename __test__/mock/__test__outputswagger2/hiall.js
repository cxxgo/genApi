import Mock from 'better-mock'
import {
  ApiResponseComPageContactResp,
  ApiResponseobject,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export const hiallClearHiall = () => Mock.mock(ApiResponseobject())

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export const hiallCreate = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 常用联系人 */
export const hiallOftenContact = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息甬道 */
export const hiallPageList = () => Mock.mock(ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing())

/** 最近联系人 */
export const hiallRecentContact = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息甬道 */
export const hiallUnreadList = () => Mock.mock(ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing())
