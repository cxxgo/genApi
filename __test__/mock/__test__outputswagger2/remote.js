import Mock from 'better-mock'
import { ApiResponse } from './_interfaces'

/** 模拟大数据建鸟窝 */
export const remoteBigdataAutoBirdPost = () => Mock.mock(ApiResponse())

/** 模拟大数据建鸟窝 */
export const remoteBigdataMockAutoBirdPost = () => Mock.mock(ApiResponse())

/** 处理结构化消息 */
export const remoteMessageProcessPost = () => Mock.mock(ApiResponse())
