const request: any = () => {}
import type {
  ApiResponseChannelKeyBorardResp,
  ApiResponseCorpWehiallAuthUrlResp,
  BiXieDaoRuCan,
} from './_interfaces.ts'

/** 获取渠道喇叭花信息 */
export function clientCorpWehiallAuthKeyBorard(data: BiXieDaoRuCan): Promise<ApiResponseChannelKeyBorardResp> {
  return request.post('/api/client/corpWehiall/authKeyBorard', data)
}

/** 喇叭花登陆辟邪刀链接 */
export function clientCorpWehiallOauth2(data: BiXieDaoRuCan): Promise<ApiResponseCorpWehiallAuthUrlResp> {
  return request.post('/api/client/corpWehiall/oauth2', data)
}
