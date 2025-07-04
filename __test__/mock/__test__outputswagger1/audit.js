import Mock from 'better-mock'
import { ApiResponseBiXieDao, ApiResponseComPageBiXieDaoYongDao, ApiResponseVoid } from './_interfaces'

/** 执行审核 */
export const auditAuthExecute = () => Mock.mock(ApiResponseVoid())

/** 辟邪刀详情甬道 */
export const auditAuthInfoList = () => Mock.mock(ApiResponseBiXieDao())

/** 辟邪刀甬道 */
export const auditAuthList = () => Mock.mock(ApiResponseComPageBiXieDaoYongDao())
