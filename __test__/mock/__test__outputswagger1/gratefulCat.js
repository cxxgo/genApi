import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseDouJiangJiFangDongXinXiXiangQingBiao } from './_interfaces'

/** 获取豆浆机房东信息详情 */
export const gratefulCatAcquireInfoGet = () => Mock.mock(ApiResponseDouJiangJiFangDongXinXiXiangQingBiao())

/** 修改密码 */
export const gratefulCatUpdateAccPasswordPost = () => Mock.mock(ApiResponseboolean())

/** 修改房东豆浆机信息 */
export const gratefulCatUpdateInfoPost = () => Mock.mock(ApiResponseboolean())
