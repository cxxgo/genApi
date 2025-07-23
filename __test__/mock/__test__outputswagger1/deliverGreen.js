import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseComPageFangDongShouHuoDiZhiTianJia } from './_interfaces'

/** 添加地址 */
export const deliverGreenAddGreenPost = () => Mock.mock(ApiResponseboolean())

/** 设置默认地址 */
export const deliverGreenCheckDefaultGreenPost = () => Mock.mock(ApiResponseboolean())

/** 扫落叶地址 */
export const deliverGreenDeleteGreenIdGet = () => Mock.mock(ApiResponseboolean())

/** 分页出行地址 */
export const deliverGreenPageGreenPost = () => Mock.mock(ApiResponseComPageFangDongShouHuoDiZhiTianJia())

/** 修改地址 */
export const deliverGreenUpdateGreenPost = () => Mock.mock(ApiResponseboolean())
