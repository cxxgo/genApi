const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseBuLuoDuiXiangBirdDetailResp,
  ApiResponseBuLuoDuiXiangBirdResp,
  ApiResponseComPageBuLuoDuiXiangBirdResp,
  BirdTransferReq,
  BuLuoFenYeBirdPageListReq,
  BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq,
  BuLuoXinXiBirdDetailReq,
  ChuangJianGengXinDuiXiangBirdSaveReq,
  XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq,
} from './_interfaces.ts'

/** 部落设置 */
export function birdBirdSetting(data: BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq): Promise<ApiResponse> {
  return request.post('/api/bird/birdSetting', data)
}

/** 部落设置 */
export function birdBirdSetting(data: BuLuoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq): Promise<ApiResponse> {
  return request.post('/bird/birdSetting', data)
}

/** 部落信息详情 */
export function birdDetail(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseBuLuoDuiXiangBirdDetailResp> {
  return request.post('/api/bird/detail', data)
}

/** 部落信息详情 */
export function birdDetail(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseBuLuoDuiXiangBirdDetailResp> {
  return request.post('/bird/detail', data)
}

/** 部落主解散部落[二期] */
export function birdDissolve(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponse> {
  return request.post('/api/bird/dissolve', data)
}

/** 修改部落睡莲 */
export function birdModifyBirdName(data: XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq): Promise<ApiResponse> {
  return request.post('/api/bird/modifyBirdName', data)
}

/** 修改部落睡莲 */
export function birdModifyBirdName(data: XiuGaiBuLuoShuiLianRuCanModifyBirdNameReq): Promise<ApiResponse> {
  return request.post('/bird/modifyBirdName', data)
}

/** 分页获取部落秋千 */
export function birdPageList(data: BuLuoFenYeBirdPageListReq): Promise<ApiResponseComPageBuLuoDuiXiangBirdResp> {
  return request.post('/api/bird/pageList', data)
}

/** 分页获取部落秋千 */
export function birdPageList(data: BuLuoFenYeBirdPageListReq): Promise<ApiResponseComPageBuLuoDuiXiangBirdResp> {
  return request.post('/bird/pageList', data)
}

/** 创建部落 */
export function birdSave(data: ChuangJianGengXinDuiXiangBirdSaveReq): Promise<ApiResponseBuLuoDuiXiangBirdResp> {
  return request.post('/api/bird/save', data)
}

/** 创建部落 */
export function birdSave(data: {
  channel?: string
  birdSaveReq?: ChuangJianGengXinDuiXiangBirdSaveReq
}): Promise<ApiResponseBuLuoDuiXiangBirdResp> {
  return request.post('/bird/save', data)
}

/** 转让部落[二期] */
export function birdTransfer(data: BirdTransferReq): Promise<ApiResponse> {
  return request.post('/api/bird/transfer', data)
}
