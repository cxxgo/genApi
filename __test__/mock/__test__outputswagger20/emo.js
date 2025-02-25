import Mock from 'better-mock'
import { ApiResponseComPageXiLanHuaLieBiao, ApiResponseListTreelong } from './_interfaces'

/** 入参、出参类型丰富多彩 */
export const emoApiColorful = () => Mock.mock(ApiResponseComPageXiLanHuaLieBiao())

/** 这个接口出参type是object, 需要处理成any */
export const emoEmoEmployeeTree = () => Mock.mock(ApiResponseListTreelong())
