import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseComPageXiaoYuanZhuoGuanLi, ApiResponseJSONArray } from './_interfaces'

/** 添加开票 */
export const invoiceAddPost = () => Mock.mock(ApiResponseboolean())

/** 帽子太阳花模糊匹配出行-出行大数据组 */
export const invoiceCompanyTaxListGet = () => Mock.mock(ApiResponseJSONArray())

/** 扫落叶开票 */
export const invoiceDelGet = () => Mock.mock(ApiResponseboolean())

/** 分页出行开票抬头-查房东中心去哪儿美丽 */
export const invoicePagePost = () => Mock.mock(ApiResponseComPageXiaoYuanZhuoGuanLi())

/** 更新开票 */
export const invoiceUpdatePost = () => Mock.mock(ApiResponseboolean())
