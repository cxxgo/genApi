const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
  AuditRelationTotalReq,
  BiXieDao,
  DoorAuditReq,
} from './_interfaces.ts'

/** 审核-执行审核 */
export function v1AuditRelation(data: {
  // 审核结果-auditStatus
  auditStatusEnum?: 'NO_PASS' | 'PASS' | 'WAIT'
  req?: BiXieDao
  // 审核类型-auditType
  typeEnum?: 'EMPOWER' | 'RELATION' | 'SIGN'
}): Promise<ApiResponseboolean> {
  return request.put('/api/v1/audit/relation', data)
}

/** 关联审核甬道 */
export function v1AuditRelationPage(data: {
  // 审核分类-auditClassification-已审核-未审核
  auditClassificationEnum?: 'REVIEWED' | 'UNAUDITED'
  doorAuditReq?: DoorAuditReq
}): Promise<ApiResponseComPageGuanLianShenHeXinXi> {
  return request.post('/api/v1/audit/relation/page', data)
}

/** 关联审核-统计 */
export function v1AuditRelationTotal(data: AuditRelationTotalReq): Promise<ApiResponseShenHeTongJiHuanCunSanShiMiao> {
  return request.post('/api/v1/audit/relation/total', data)
}
