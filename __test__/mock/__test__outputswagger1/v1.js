import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
} from './_interfaces'

/** 关联审核甬道 */
export const v1AuditRelationPagePost = () => Mock.mock(ApiResponseComPageGuanLianShenHeXinXi())

/** 审核-执行审核 */
export const v1AuditRelationPut = () => Mock.mock(ApiResponseboolean())

/** 关联审核-统计 */
export const v1AuditRelationTotalPost = () => Mock.mock(ApiResponseShenHeTongJiHuanCunSanShiMiao())
