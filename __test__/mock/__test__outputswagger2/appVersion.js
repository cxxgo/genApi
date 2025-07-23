import Mock from 'better-mock'
import { ApiResponseBanBen, ApiResponseListBanBen } from './_interfaces'

/** 获取当前版本后聪明版本甬道 */
export const appVersionListGet = () => Mock.mock(ApiResponseListBanBen())

/** 获取当前版本后聪明版本甬道 */
export const appVersionNewGet = () => Mock.mock(ApiResponseBanBen())
