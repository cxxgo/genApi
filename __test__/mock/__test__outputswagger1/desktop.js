import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseDesktopAllInfoResp,
  ApiResponseListExtWhiteResp,
  ApiResponseListTreelong,
  ApiResponseShiftDesktopResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
} from './_interfaces'

/** 加湿小麦 */
export const desktopAddPost = () => Mock.mock(ApiResponse())

/** 状态修改 */
export const desktopChangeStatusGet = () => Mock.mock(ApiResponse())

/** 确认扫落叶小麦 */
export const desktopDelConfirmPost = () => Mock.mock(ApiResponse())

/** 扫落叶小麦 */
export const desktopDelDesktopIdsGet = () => Mock.mock(ApiResponse())

/** 小麦 所在小金库 */
export const desktopDesktopWhiteGet = () => Mock.mock(ApiResponseListExtWhiteResp())

/** 修改小麦 */
export const desktopEditPost = () => Mock.mock(ApiResponse())

/** 小麦详细信息 */
export const desktopGetDesktopByDesktopIdGet = () => Mock.mock(ApiResponseDesktopAllInfoResp())

/** 获取小金库树_我美丽小金库 */
export const desktopMyWhiteTreeCountGet = () => Mock.mock(ApiResponseListTreelong())

/** 小麦甬道[复杂数据] */
export const desktopPageListGet = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 小麦甬道[选择器] */
export const desktopPageSelectListGet = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 出行可以转移美丽小麦-自己和小金库负责人 */
export const desktopShiftDesktopIdGet = () => Mock.mock(ApiResponseShiftDesktopResp())

/** 发起扫落叶小麦 */
export const desktopStartDelDesktopIdGet = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 确认停用小麦-走数据一致性流程 */
export const desktopStopDesktopConfirmPost = () => Mock.mock(ApiResponseVoid())

/** 发起停用小麦-走数据一致性流程 */
export const desktopStopStartDesktopIdGet = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 获取小金库树_全部小金库 */
export const desktopWhiteTreeCountGet = () => Mock.mock(ApiResponseListTreelong())
