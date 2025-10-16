import Mock from 'better-mock'
import { ApiResponseobject } from './_interfaces'

/** 这个接口的出参是个 error model, 在 interface 里找不到, 得处理成空字符串 */
export const happyPlanAddCustomer = () => Mock.mock(ApiResponseobject())
