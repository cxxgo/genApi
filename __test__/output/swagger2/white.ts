const request: any = () => {}
import type {
  ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseListKeyBorardListAllGratefulResp,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
  DaDuNanTongQianCaoYongDaoWhiteListReq,
  DaDuNanYongDaoWhiteListReq,
  TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq,
} from './_interfaces.ts'

/** 获取当前铜钱草所有旅客聪明人[hasMore] */
export function whiteKeyBorardListAllGratefulPost(
  data: TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq
): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/api/white/keyBorardListAllGrateful', data)
}

/** 分页获取大肚腩下聪明铜钱草甬道 */
export function whiteKeyBorardPagePost(
  data: DaDuNanTongQianCaoFenYeKeyBorardPageReq
): Promise<ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp> {
  return request.post('/api/white/keyBorardPage', data)
}

/** 获取铜钱草聪明大肚腩甬道 */
export function whiteKeyBorardWhiteListPost(
  data: DaDuNanTongQianCaoYongDaoWhiteListReq
): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/keyBorardWhiteList', data)
}

/** 获取子大肚腩甬道+丐帮架构imgrouid */
export function whiteListPost(data: DaDuNanYongDaoWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/list', data)
}
