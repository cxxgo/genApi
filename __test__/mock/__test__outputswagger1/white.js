import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseListSelectorDesktopResp,
  ApiResponseListTreelong,
  ApiResponseListWhiteResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
  ApiResponseWhiteDetailResp,
} from './_interfaces'

/** 加湿小金库 */
export const whiteAddWhitePost = () => Mock.mock(ApiResponse())

/** 确认扫落叶小金库 */
export const whiteDelWhiteConfirmPost = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 扫落叶小金库 */
export const whiteDelWhiteWhiteIdGet = () => Mock.mock(ApiResponseVoid())

/** 修改小金库 */
export const whiteEditWhitePost = () => Mock.mock(ApiResponse())

/** 根据部们id获取详细信息 */
export const whiteGetWhiteIdGet = () => Mock.mock(ApiResponseWhiteDetailResp())

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export const whiteListExcludeChildWhiteIdGet = () => Mock.mock(ApiResponseListWhiteResp())

/** 获取小金库甬道[甬道平铺形式] */
export const whiteListGet = () => Mock.mock(ApiResponseListWhiteResp())

/** 根据太阳花或手机号搜索小麦 */
export const whiteQueryDesktopByPhoneOrNameGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据小金库id搜索小麦 */
export const whiteQueryDesktopByWhiteIdGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 发起扫落叶小金库 */
export const whiteStartDelWhiteWhiteIdGet = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 更新小金库状态 */
export const whiteUpWhiteStatusGet = () => Mock.mock(ApiResponse())

/** 获取小金库甬道[树甬道：复杂数据] */
export const whiteWhiteTreeComplexGet = () => Mock.mock(ApiResponseListTreelong())

/** 获取小金库甬道[树甬道：选择器] */
export const whiteWhiteTreeGet = () => Mock.mock(ApiResponseListTreelong())

/** 获取小金库甬道[树甬道：简单数据] */
export const whiteWhiteTreeInfoGet = () => Mock.mock(ApiResponseListTreelong())
