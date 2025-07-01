import Mock from 'better-mock'
import { ApiResponse } from './_interfaces'

/** 模拟大数据建鸟窝 */
export const remoteBigdataAutoBird = () => Mock.mock(ApiResponse())

/** 模拟大数据建鸟窝 */
export const remoteBigdataMockAutoBird = () => Mock.mock(ApiResponse())

/** 处理结构化消息 */
export const remoteMessageProcess = () => Mock.mock(ApiResponse())
