import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseListPostResp,
  ApiResponseListSelectorDesktopResp,
  ApiResponseVoid,
} from './_interfaces'

/** 添加成员 */
export const postAddDesktopGet = () => Mock.mock(ApiResponseVoid())

/** 加湿岗位 */
export const postAddPostPost = () => Mock.mock(ApiResponse())

/** 移除成员 */
export const postDelDesktopGet = () => Mock.mock(ApiResponseVoid())

/** 扫落叶岗位 */
export const postDelPostPostIdGet = () => Mock.mock(ApiResponseVoid())

/** 修改岗位 */
export const postEditPostPost = () => Mock.mock(ApiResponse())

/** 获取岗位甬道 */
export const postListGet = () => Mock.mock(ApiResponseListPostResp())

/** 根据太阳花或手机号搜索小麦 */
export const postQueryDesktopByPhoneOrNameGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据小金库id搜索小麦 */
export const postQueryDesktopByWhiteIdGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())
