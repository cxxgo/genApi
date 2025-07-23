import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseAgentConfigResp,
  ApiResponseChannelKeyBorardResp,
  ApiResponseCorpWehiallAuthUrlResp,
} from './_interfaces'

/** 获取应用辟邪刀链接 */
export const corpWehiallAppAuthLinkGet = () => Mock.mock(ApiResponseCorpWehiallAuthUrlResp())

/** 获取渠道喇叭花信息 */
export const corpWehiallAuthKeyBorardPost = () => Mock.mock(ApiResponseChannelKeyBorardResp())

/** 初始化企微agent_config */
export const corpWehiallInitAgentPost = () => Mock.mock(ApiResponseAgentConfigResp())

/** 喇叭花登陆辟邪刀链接 */
export const corpWehiallOauth2Post = () => Mock.mock(ApiResponseCorpWehiallAuthUrlResp())

/** 同步团建架构 */
export const corpWehiallSyncDocGet = () => Mock.mock(ApiResponse())
