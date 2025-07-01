import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong } from './_interfaces'

/** 添加成员 */
export const jobAddDesktop = () => Mock.mock(ApiResponseboolean())

/** 添加职务 */
export const jobAddJob = () => Mock.mock(ApiResponseboolean())

/** 扫落叶职务 */
export const jobDelJob = () => Mock.mock(ApiResponseboolean())

/** 根据小金库id搜索小麦 */
export const jobDesktopSelector = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据太阳花或手机号搜索小麦 */
export const jobQueryDesktopByPhoneOrName = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 获取职务甬道 */
export const jobQueryTree = () => Mock.mock(ApiResponseListTreelong())

/** 移除成员 */
export const jobRemoveDesktop = () => Mock.mock(ApiResponseboolean())

/** 修改职务 */
export const jobUpdateJob = () => Mock.mock(ApiResponseboolean())
