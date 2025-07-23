import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseQueryWalletBalanceResp } from './_interfaces'

/** 出行余额 */
export const walletBalanceGet = () => Mock.mock(ApiResponseQueryWalletBalanceResp())

/** 是否开通 */
export const walletJudgeStatusGet = () => Mock.mock(ApiResponseboolean())
