import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseNiaoWoDuiXiangBirdDetailResp,
  ApiResponseNiaoWoDuiXiangBirdResp,
} from './_interfaces'

/** 鸟窝设置 */
export const birdBirdSettingPost = () => Mock.mock(ApiResponse())

/** 鸟窝信息详情 */
export const birdDetailPost = () => Mock.mock(ApiResponseNiaoWoDuiXiangBirdDetailResp())

/** 鸟窝主解散鸟窝[二期] */
export const birdDissolvePost = () => Mock.mock(ApiResponse())

/** 修改鸟窝太阳花 */
export const birdModifyBirdNamePost = () => Mock.mock(ApiResponse())

/** 分页获取鸟窝甬道 */
export const birdPageListPost = () => Mock.mock(ApiResponseComPageNiaoWoDuiXiangBirdResp())

/** 创建鸟窝 */
export const birdSavePost = () => Mock.mock(ApiResponseNiaoWoDuiXiangBirdResp())

/** 转让鸟窝[二期] */
export const birdTransferPost = () => Mock.mock(ApiResponse())
