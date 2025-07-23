import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong } from './_interfaces'

/** 添加成员 */
export const jobAddDesktopPost = () => Mock.mock(ApiResponseboolean())

/** 添加职务 */
export const jobAddJobPost = () => Mock.mock(ApiResponseboolean())

/** 扫落叶职务 */
export const jobDelJobGet = () => Mock.mock(ApiResponseboolean())

/** 根据小金库id搜索小麦 */
export const jobDesktopSelectorPost = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据太阳花或手机号搜索小麦 */
export const jobQueryDesktopByPhoneOrNamePost = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 获取职务甬道 */
export const jobQueryTreePost = () => Mock.mock(ApiResponseListTreelong())

/** 移除成员 */
export const jobRemoveDesktopPost = () => Mock.mock(ApiResponseboolean())

/** 修改职务 */
export const jobUpdateJobPost = () => Mock.mock(ApiResponseboolean())
