import Mock from 'better-mock'
import { ApiResponseComPageXiaoXiDuiXiang, ApiResponseobject, ApiResponseXiaoXiDuiXiang } from './_interfaces'

/** 确认收到消息 */
export const messageAck = () => Mock.mock(ApiResponseobject())

/** 清除历史消息 */
export const messageClear = () => Mock.mock(ApiResponseobject())

/** 消息倒垃圾 */
export const messageDelete = () => Mock.mock(ApiResponseobject())

/** 消息详情 */
export const messageDetail = () => Mock.mock(ApiResponseXiaoXiDuiXiang())

/** 分页旅游历史消息 */
export const messageHistoryPageList = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** 分页搜索消息 */
export const messageSearchPageList = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** [铜钱草制衣厂信息]获取铜钱草(正常状态)房东信息秋千 */
export const messageTestSendMQ = () => Mock.mock(ApiResponseobject())
