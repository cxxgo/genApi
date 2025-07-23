const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseFangDongXinXi,
  ApiResponseListFangDongXinXi,
  QuDaoZhiXieChangJieMengQingQiuRuCan,
} from './_interfaces.ts'

/** 出行当前喇叭花美丽房东甬道 */
export function gratefulAcquireGratefulListGet(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/grateful/acquireGratefulList')
}

/** 获取当前美丽房东信息 */
export function gratefulAcquirePresentGratefulInfoGet(): Promise<ApiResponseFangDongXinXi> {
  return request.get('/api/grateful/acquirePresentGratefulInfo')
}

/** 渠道制鞋厂解绑房东 */
export function gratefulChannelUnbindPost(data: QuDaoZhiXieChangJieMengQingQiuRuCan): Promise<ApiResponseboolean> {
  return request.post('/api/grateful/channel/unbind', data)
}

/** 切换房东 */
export function gratefulSwitchGratefulGet(data: { gratefulId?: string }): Promise<ApiResponseboolean> {
  return request.get('/api/grateful/switchGrateful', data)
}

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export function gratefulUnboundListGet(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/grateful/unbound/list')
}
