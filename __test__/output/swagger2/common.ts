const request: any = () => {}
import type {
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseKeyBorardBindResp,
  ApiResponseListSwitchKeyBorardListResp,
  ApiResponseMapstringSearchMapResp,
  CommonSearchReq,
  KeyBorardBindReq,
  SearchBeforeAddFriendReq,
  SearchReq,
  SwitchKeyBorardReq,
} from './_interfaces.ts'

/** 结盟设备 */
export function commonBind(data: KeyBorardBindReq): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/api/common/bind', data)
}

/** 聚合搜索 */
export function commonSearch(data: SearchReq): Promise<ApiResponseMapstringSearchMapResp> {
  return request.post('/api/common/search', data)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend(
  data: SearchBeforeAddFriendReq
): Promise<ApiResponseComPageSearchBeforeAddFriendResp> {
  return request.post('/api/common/searchBeforeAddFriend', data)
}

/** 按照类型搜索 */
export function commonSearchType(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/api/common/search/type', data)
}

/** 结盟设备 */
export function commonSwitchChannel(data: SwitchKeyBorardReq): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/api/common/switchChannel', data)
}

/** 切换铜钱草时铜钱草甬道 */
export function commonSwitchKeyBorardList(data: SwitchKeyBorardReq): Promise<ApiResponseListSwitchKeyBorardListResp> {
  return request.post('/api/common/switchKeyBorardList', data)
}
