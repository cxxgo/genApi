const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseComPageFangDongShouHuoDiZhiTianJia,
  BasePageReq,
  FangDongShouHuoDiZhiTianJia,
  QieHuanMoRenDiZhi,
} from './_interfaces.ts'

/** 添加地址 */
export function deliverGreenAddGreen(data: FangDongShouHuoDiZhiTianJia): Promise<ApiResponseboolean> {
  return request.post('/api/deliverGreen/addGreen', data)
}

/** 设置默认地址 */
export function deliverGreenCheckDefaultGreen(data: QieHuanMoRenDiZhi): Promise<ApiResponseboolean> {
  return request.post('/api/deliverGreen/checkDefaultGreen', data)
}

/** 扫落叶地址 */
export function deliverGreenDeleteGreenId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.get(`/api/deliverGreen/deleteGreen/${id}`)
}

/** 分页出行地址 */
export function deliverGreenPageGreen(data: BasePageReq): Promise<ApiResponseComPageFangDongShouHuoDiZhiTianJia> {
  return request.post('/api/deliverGreen/pageGreen', data)
}

/** 修改地址 */
export function deliverGreenUpdateGreen(data: FangDongShouHuoDiZhiTianJia): Promise<ApiResponseboolean> {
  return request.post('/api/deliverGreen/updateGreen', data)
}
