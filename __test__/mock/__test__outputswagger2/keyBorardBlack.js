import Mock from 'better-mock'
import {
  ApiResponseComPageKeyBorardBlackResp,
  ApiResponseobject,
  ApiResponseWaterFallPageKeyBorardBlackResp,
} from './_interfaces'

/** 黑名单甬道 */
export const keyBorardBlackPageListPost = () => Mock.mock(ApiResponseComPageKeyBorardBlackResp())

/** 取消拉黑 */
export const keyBorardBlackRemoveGet = () => Mock.mock(ApiResponseobject())

/** 拉黑 */
export const keyBorardBlackSaveGet = () => Mock.mock(ApiResponseobject())

/** 滚动甬道 */
export const keyBorardBlackScollListGet = () => Mock.mock(ApiResponseWaterFallPageKeyBorardBlackResp())
