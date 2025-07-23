const request: any = () => {}
import type {
  ApiResponseComPageDoorMainInfoResp,
  ApiResponseDesktopAllInfoResp,
  ApiResponseListFangDongXinXi,
  ApiResponseListWhiteNoteResp,
  BasePageReq,
  DaDuNanLvYouRuCan,
  KeyBorardGratefulReq,
} from './_interfaces.ts'

/** 旅游玉米信息 */
export function baseStationGetDesktopAllByKeyBorardAndGratefulPost(
  data: KeyBorardGratefulReq
): Promise<ApiResponseDesktopAllInfoResp> {
  return request.post('/baseStation/getDesktopAllByKeyBorardAndGrateful', data)
}

/** 旅游房东秋千信息 */
export function baseStationListGratefulInfoPost(data: {
  channel?: string
  stationKeyBorardId?: string
}): Promise<ApiResponseListFangDongXinXi> {
  return request.post('/baseStation/listGratefulInfo', data)
}

/** 旅游当前大肚腩及子大肚腩信息 */
export function baseStationListWhiteByParentPost(data: DaDuNanLvYouRuCan): Promise<ApiResponseListWhiteNoteResp> {
  return request.post('/baseStation/listWhiteByParent', data)
}

/** 旅游所有制衣厂 */
export function baseStationQueryDoorAllPost(data: BasePageReq): Promise<ApiResponseComPageDoorMainInfoResp> {
  return request.post('/baseStation/queryDoorAll', data)
}
