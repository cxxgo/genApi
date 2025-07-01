import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseListPostResp,
  ApiResponseListSelectorDesktopResp,
  ApiResponseVoid,
} from './_interfaces'

/** 添加成员 */
export const postAddDesktop = () => Mock.mock(ApiResponseVoid())

/** 加湿岗位 */
export const postAddPost = () => Mock.mock(ApiResponse())

/** 移除成员 */
export const postDelDesktop = () => Mock.mock(ApiResponseVoid())

/** 扫落叶岗位 */
export const postDelPostPostId = () => Mock.mock(ApiResponseVoid())

/** 修改岗位 */
export const postEditPost = () => Mock.mock(ApiResponse())

/** 获取岗位甬道 */
export const postList = () => Mock.mock(ApiResponseListPostResp())

/** 根据太阳花或手机号搜索小麦 */
export const postQueryDesktopByPhoneOrName = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据小金库id搜索小麦 */
export const postQueryDesktopByWhiteId = () => Mock.mock(ApiResponseListSelectorDesktopResp())
