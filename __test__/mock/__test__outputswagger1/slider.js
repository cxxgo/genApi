import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseMapstringobject } from './_interfaces'

/** 添加验山麻杆图片 */
export const sliderAddImagePost = () => Mock.mock(ApiResponseboolean())

/** 获取校验对象 */
export const sliderCreateVerificationEnumGet = () => Mock.mock(ApiResponseMapstringobject())

/** 验山麻杆码预校验 */
export const sliderPreCheckVerificationEnumGet = () => Mock.mock(ApiResponseboolean())
