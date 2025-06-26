import Mock from 'better-mock'
import {
  ApiResponseComPageCommonSearchResp,
  ApiResponseListForwardListResp,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'

/** 转发前 [获取单瓜子鸟窝id(会对单瓜子进行去重处理),鸟窝瓜子id会直接加入并集] */
export const forwardCheckAndCreate = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 甬道(仅5个) */
export const forwardList = () => Mock.mock(ApiResponseListForwardListResp())

/** 转发搜索甬道 */
export const forwardSearch = () => Mock.mock(ApiResponseComPageCommonSearchResp())
