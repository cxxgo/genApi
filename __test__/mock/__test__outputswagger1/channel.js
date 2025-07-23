import Mock from 'better-mock'
import { ApiResponse, ApiResponseChannelAppGratefulConfigResp, ApiResponseComLoginResp } from './_interfaces'

/** 登录结盟 */
export const channelDesktopComLoginAndBindPost = () => Mock.mock(ApiResponseComLoginResp())

/** 加湿内部结盟 */
export const channelGratefulConfigAddPost = () => Mock.mock(ApiResponse())

/** 结盟详情 */
export const channelGratefulConfigDetailGet = () => Mock.mock(ApiResponseChannelAppGratefulConfigResp())

/** 修改内部结盟 */
export const channelGratefulConfigUpdatePost = () => Mock.mock(ApiResponse())
