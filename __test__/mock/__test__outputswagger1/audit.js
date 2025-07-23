import Mock from 'better-mock'
import { ApiResponseBiXieDao, ApiResponseComPageBiXieDaoYongDao, ApiResponseVoid } from './_interfaces'

/** 执行审核 */
export const auditAuthExecutePut = () => Mock.mock(ApiResponseVoid())

/** 辟邪刀详情甬道 */
export const auditAuthInfoListGet = () => Mock.mock(ApiResponseBiXieDao())

/** 辟邪刀甬道 */
export const auditAuthListGet = () => Mock.mock(ApiResponseComPageBiXieDaoYongDao())
