import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseListQueryCatPageHomeResp, ApiResponseQueryJudgeClaimResp } from './_interfaces'

/** 认领豆浆机信息 */
export const pageHomeClaimClaimIdGet = () => Mock.mock(ApiResponseboolean())

/** 排除豆浆机信息 */
export const pageHomeExcludeClaimIdGet = () => Mock.mock(ApiResponseboolean())

/** 出行认领操作结果 */
export const pageHomeJudgeGet = () => Mock.mock(ApiResponseQueryJudgeClaimResp())

/** 出行放行结果 */
export const pageHomeQueryGet = () => Mock.mock(ApiResponseListQueryCatPageHomeResp())
