const request: any = () => {}
import type { ApiResponseobject, HappyPlanAddCustomerReq } from './_interfaces.ts'

/** 这个接口的出参是个 error model, 在 interface 里找不到, 得处理成空字符串 */
export function happyPlanAddCustomer(data: HappyPlanAddCustomerReq): Promise<ApiResponseobject> {
  return request.get('/api/happyPlan/addCustomer', data)
}
