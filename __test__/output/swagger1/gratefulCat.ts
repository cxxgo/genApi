const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseDouJiangJiFangDongXinXiXiangQingBiao,
  XiuGaiDouJiangJiXinXi,
  XiuGaiMiMa,
} from './_interfaces.ts'

/** 获取豆浆机房东信息详情 */
export function gratefulCatAcquireInfo(): Promise<ApiResponseDouJiangJiFangDongXinXiXiangQingBiao> {
  return request.get('/api/gratefulCat/acquireInfo')
}

/** 修改密码 */
export function gratefulCatUpdateAccPassword(data: XiuGaiMiMa): Promise<ApiResponseboolean> {
  return request.post('/api/gratefulCat/updateAccPassword', data)
}

/** 修改房东豆浆机信息 */
export function gratefulCatUpdateInfo(data: XiuGaiDouJiangJiXinXi): Promise<ApiResponseboolean> {
  return request.post('/api/gratefulCat/updateInfo', data)
}
