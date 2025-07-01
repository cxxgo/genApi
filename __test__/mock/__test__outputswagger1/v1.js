import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
} from './_interfaces'

/** 审核-执行审核 */
export const v1AuditRelation = () => Mock.mock(ApiResponseboolean())

/** 关联审核甬道 */
export const v1AuditRelationPage = () => Mock.mock(ApiResponseComPageGuanLianShenHeXinXi())

/** 关联审核-统计 */
export const v1AuditRelationTotal = () => Mock.mock(ApiResponseShenHeTongJiHuanCunSanShiMiao())
