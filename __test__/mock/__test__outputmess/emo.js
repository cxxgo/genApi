import Mock from 'better-mock'
import { ApiResponseListTreelong } from './_interfaces'

/** 这个接口出参type是object, 需要处理成any */
export const emoEmoEmployeeTree = () => Mock.mock(ApiResponseListTreelong())
