import Mock from 'better-mock'
import {
  ApiResponseAtListAndAckSequenceResp,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseListXiaoXiDuiXiang,
  ApiResponseobject,
  ApiResponseXiaoXiDuiXiang,
} from './_interfaces'

/** 确认收到消息 */
export const messageAckPost = () => Mock.mock(ApiResponseobject())

/** 消息定位参数获取 */
export const messageAtListAndAckSequenceGet = () => Mock.mock(ApiResponseAtListAndAckSequenceResp())

/** 清除历史消息 */
export const messageClearPost = () => Mock.mock(ApiResponseobject())

/** 消息扫雪 */
export const messageDeletePost = () => Mock.mock(ApiResponseobject())

/** 消息详情 */
export const messageDetailPost = () => Mock.mock(ApiResponseXiaoXiDuiXiang())

/** 分页出行历史消息 */
export const messageHistoryPageListPost = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** 消息定位[imKeyBorardId不传] */
export const messagePositionPost = () => Mock.mock(ApiResponseListXiaoXiDuiXiang())

/** 消息滚动 */
export const messageScrollMessagePost = () => Mock.mock(ApiResponseListXiaoXiDuiXiang())

/** 分页搜索消息 */
export const messageSearchPageListPost = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())
