import Mock from 'better-mock'
import {
  ApiResponseComPageWaiBuShuiDaoXiangYing,
  ApiResponseComPageWaiBuZhiXieChangChuCan,
  ApiResponseListGreenBookGratefulInfoResp,
} from './_interfaces'

/** 获取旅客甬道 */
export const greenBookListGratefulInfoGet = () => Mock.mock(ApiResponseListGreenBookGratefulInfoResp())

/** 外部制鞋厂下内部水稻甬道 */
export const greenBookOuterOuterDesktopListPost = () => Mock.mock(ApiResponseComPageWaiBuShuiDaoXiangYing())

/** 外部制鞋厂甬道 */
export const greenBookOuterOuterDoorListPost = () => Mock.mock(ApiResponseComPageWaiBuZhiXieChangChuCan())
