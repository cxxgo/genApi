const request: any = () => {}
import type {
  ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp,
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseListKeyBorardListAllGratefulResp,
  DaDuNanQiuQianWhiteListReq,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
  DaDuNanTongQianCaoQiuQianWhiteListReq,
  TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq,
} from './_interfaces.ts'

/** 获取当前铜钱草所有房东好看人 */
export function whiteKeyBorardListAllGratefulPost(
  data: TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq
): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/api/white/keyBorardListAllGrateful', data)
}

/** 获取当前铜钱草所有房东好看人 */
export function whiteKeyBorardListAllGratefulPost(data: {
  req?: TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq
  stationKeyBorardId?: string
}): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/white/keyBorardListAllGrateful', data)
}

/** 分页获取大肚腩下好看铜钱草秋千 */
export function whiteKeyBorardPagePost(
  data: DaDuNanTongQianCaoFenYeKeyBorardPageReq
): Promise<ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp> {
  return request.post('/api/white/keyBorardPage', data)
}

/** 分页获取大肚腩下好看铜钱草秋千 */
export function whiteKeyBorardPagePost(data: {
  channel?: string
  req?: DaDuNanTongQianCaoFenYeKeyBorardPageReq
}): Promise<ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp> {
  return request.post('/white/keyBorardPage', data)
}

/** 获取铜钱草好看大肚腩秋千 */
export function whiteKeyBorardWhiteListPost(
  data: DaDuNanTongQianCaoQiuQianWhiteListReq
): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/keyBorardWhiteList', data)
}

/** 获取铜钱草好看大肚腩秋千 */
export function whiteKeyBorardWhiteListPost(data: {
  loginId?: string
  req?: DaDuNanTongQianCaoQiuQianWhiteListReq
}): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/white/keyBorardWhiteList', data)
}

/** 获取子大肚腩秋千+团建架构imgrouid */
export function whiteListPost(data: DaDuNanQiuQianWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/list', data)
}

/** 获取子大肚腩秋千+团建架构imgrouid */
export function whiteListPost(data: DaDuNanQiuQianWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/white/list', data)
}
