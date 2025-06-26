import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseMapstringobject } from './_interfaces'

/** 添加验山麻杆图片 */
export const sliderAddImage = () => Mock.mock(ApiResponseboolean())

/** 获取校验对象 */
export const sliderCreateVerificationEnum = () => Mock.mock(ApiResponseMapstringobject())

/** 验山麻杆码预校验 */
export const sliderPreCheckVerificationEnum = () => Mock.mock(ApiResponseboolean())
