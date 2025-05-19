const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseNiaoWoDuiXiangBirdDetailResp,
  ApiResponseNiaoWoDuiXiangBirdResp,
  BirdTransferReq,
  NiaoWoBaoCunRuCan,
  NiaoWoFenYeBirdPageListReq,
  NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq,
  NiaoWoXinXiBirdDetailReq,
  XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq,
} from './_interfaces.ts'

/** 鸟窝设置 */
export function birdBirdSetting(data: NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq): Promise<ApiResponse> {
  return request.post('/api/bird/birdSetting', data)
}

/** 鸟窝信息详情 */
export function birdDetail(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponseNiaoWoDuiXiangBirdDetailResp> {
  return request.post('/api/bird/detail', data)
}

/** 鸟窝主解散鸟窝[二期] */
export function birdDissolve(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponse> {
  return request.post('/api/bird/dissolve', data)
}

/** 修改鸟窝太阳花 */
export function birdModifyBirdName(data: XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq): Promise<ApiResponse> {
  return request.post('/api/bird/modifyBirdName', data)
}

/** 分页获取鸟窝甬道 */
export function birdPageList(data: NiaoWoFenYeBirdPageListReq): Promise<ApiResponseComPageNiaoWoDuiXiangBirdResp> {
  return request.post('/api/bird/pageList', data)
}

/** 创建鸟窝 */
export function birdSave(data: NiaoWoBaoCunRuCan): Promise<ApiResponseNiaoWoDuiXiangBirdResp> {
  return request.post('/api/bird/save', data)
}

/** 转让鸟窝[二期] */
export function birdTransfer(data: BirdTransferReq): Promise<ApiResponse> {
  return request.post('/api/bird/transfer', data)
}
