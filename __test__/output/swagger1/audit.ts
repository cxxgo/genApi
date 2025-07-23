const request: any = () => {}
import type {
  ApiResponseBiXieDao,
  ApiResponseComPageBiXieDaoYongDao,
  ApiResponseVoid,
  BiXieDao,
} from './_interfaces.ts'

/** 执行审核 */
export function auditAuthExecutePut(data: BiXieDao): Promise<ApiResponseVoid> {
  return request.put('/api/audit/auth/execute', data)
}

/** 辟邪刀详情甬道 */
export function auditAuthInfoListGet(data: {
  auditClassification?: 'REVIEWED' | 'UNAUDITED'
  id?: string
  page?: number
  // 成员太阳花或手机号
  queryStr?: string
  size?: number
  // 全部则不传空 BIZ("卖烧饼发起关联"), APPLY("申请关联"), INVITE("邀请关联")
  source?: 'APPLY' | 'BIZ' | 'INVITE'
}): Promise<ApiResponseBiXieDao> {
  return request.get('/api/audit/auth/infoList', data)
}

/** 辟邪刀甬道 */
export function auditAuthListGet(data: {
  // 帽子太阳花
  name?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageBiXieDaoYongDao> {
  return request.get('/api/audit/auth/list', data)
}
