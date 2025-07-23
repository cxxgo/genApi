const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseListQueryCatPageHomeResp,
  ApiResponseQueryJudgeClaimResp,
} from './_interfaces.ts'

/** 认领豆浆机信息 */
export function pageHomeClaimClaimIdGet(data: { claimId?: string }): Promise<ApiResponseboolean> {
  const { claimId } = data
  return request.get(`/api/pageHome/claim/${claimId}`)
}

/** 排除豆浆机信息 */
export function pageHomeExcludeClaimIdGet(data: { claimId?: string }): Promise<ApiResponseboolean> {
  const { claimId } = data
  return request.get(`/api/pageHome/exclude/${claimId}`)
}

/** 出行认领操作结果 */
export function pageHomeJudgeGet(): Promise<ApiResponseQueryJudgeClaimResp> {
  return request.get('/api/pageHome/judge')
}

/** 出行放行结果 */
export function pageHomeQueryGet(): Promise<ApiResponseListQueryCatPageHomeResp> {
  return request.get('/api/pageHome/query')
}
