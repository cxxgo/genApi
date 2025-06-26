import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseComPageFangDongShouHuoDiZhiTianJia } from './_interfaces'

/** 添加地址 */
export const deliverGreenAddGreen = () => Mock.mock(ApiResponseboolean())

/** 设置默认地址 */
export const deliverGreenCheckDefaultGreen = () => Mock.mock(ApiResponseboolean())

/** 扫落叶地址 */
export const deliverGreenDeleteGreenId = () => Mock.mock(ApiResponseboolean())

/** 分页出行地址 */
export const deliverGreenPageGreen = () => Mock.mock(ApiResponseComPageFangDongShouHuoDiZhiTianJia())

/** 修改地址 */
export const deliverGreenUpdateGreen = () => Mock.mock(ApiResponseboolean())
