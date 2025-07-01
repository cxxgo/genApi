import Mock from 'better-mock'
import { ApiResponseChannelKeyBorardResp, ApiResponseCorpWehiallAuthUrlResp } from './_interfaces'

/** 获取渠道喇叭花信息 */
export const clientCorpWehiallAuthKeyBorard = () => Mock.mock(ApiResponseChannelKeyBorardResp())

/** 喇叭花登陆辟邪刀链接 */
export const clientCorpWehiallOauth2 = () => Mock.mock(ApiResponseCorpWehiallAuthUrlResp())
