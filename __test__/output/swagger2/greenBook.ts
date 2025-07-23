const request: any = () => {}
import type {
  ApiResponseComPageWaiBuShuiDaoXiangYing,
  ApiResponseComPageWaiBuZhiXieChangChuCan,
  ApiResponseListGreenBookGratefulInfoResp,
  WaiBuShuiDaoSouSuoRuCan,
  WaiBuZhiXieChangSouSuoRuCan,
} from './_interfaces.ts'

/** 获取旅客甬道 */
export function greenBookListGratefulInfoGet(): Promise<ApiResponseListGreenBookGratefulInfoResp> {
  return request.get('/api/greenBook/listGratefulInfo')
}

/** 外部制鞋厂下内部水稻甬道 */
export function greenBookOuterOuterDesktopListPost(
  data: WaiBuShuiDaoSouSuoRuCan
): Promise<ApiResponseComPageWaiBuShuiDaoXiangYing> {
  return request.post('/api/greenBook/outer/outerDesktopList', data)
}

/** 外部制鞋厂甬道 */
export function greenBookOuterOuterDoorListPost(
  data: WaiBuZhiXieChangSouSuoRuCan
): Promise<ApiResponseComPageWaiBuZhiXieChangChuCan> {
  return request.post('/api/greenBook/outer/outerDoorList', data)
}
