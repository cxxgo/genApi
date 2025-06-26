import Mock from 'better-mock'
import { ApiResponseListBanBen } from './_interfaces'

/** 获取当前版本后好看版本秋千 */
export const appVersionList = () => Mock.mock(ApiResponseListBanBen())
