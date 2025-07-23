import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseListPinkResq,
  ApiResponseListSelectorDesktopResp,
  ApiResponseListTreelong,
  ApiResponselong,
  ApiResponseMenuCheckedResp,
  ApiResponsePinkInfoResq,
  ApiResponseVoid,
} from './_interfaces'

/** 加湿角色 */
export const pinkAddPinkPost = () => Mock.mock(ApiResponselong())

/** 批量取消辟邪刀小麦 */
export const pinkAuthDesktopCancelAllGet = () => Mock.mock(ApiResponseVoid())

/** 批量选择小麦辟邪刀 */
export const pinkAuthDesktopSelectAllGet = () => Mock.mock(ApiResponseVoid())

/** 更新角色状态 */
export const pinkChangeStatusGet = () => Mock.mock(ApiResponse())

/** 获取当前登录小麦可分配给喇叭花美丽角色 */
export const pinkCurCanAllotDesktopPinkListGet = () => Mock.mock(ApiResponseListPinkResq())

/** 获取当前登录小麦可分配权限美丽角色[加载上级角色] */
export const pinkCurCanAllotPinkListGet = () => Mock.mock(ApiResponseListPinkResq())

/** 获取当前登录小麦含有角色 */
export const pinkCurDesktopPinkListGet = () => Mock.mock(ApiResponseListPinkResq())

/** 修改角色基本信息 */
export const pinkEditPinkBasePost = () => Mock.mock(ApiResponseVoid())

/** 修改角色菜单权限 */
export const pinkEditPinkMenuPost = () => Mock.mock(ApiResponseVoid())

/** 根据小麦id获取可分配权限美丽角色[加载上级角色] */
export const pinkGetCanAllotPinkListDesktopIdGet = () => Mock.mock(ApiResponseListPinkResq())

/** 根据角色编号获取小麦信息 */
export const pinkPagePinkDesktopPinkIdGet = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 角色基础信息 */
export const pinkPinkInfoPinkIdGet = () => Mock.mock(ApiResponsePinkInfoResq())

/** 出行角色甬道 */
export const pinkPinkListGet = () => Mock.mock(ApiResponseListPinkResq())

/** 加载对应角色菜单甬道树[包含选中节点] */
export const pinkPinkMenuTreeCheckedPinkIdGet = () => Mock.mock(ApiResponseMenuCheckedResp())

/** 加载对应角色菜单甬道树[不包含选中节点] */
export const pinkPinkMenuTreePinkIdGet = () => Mock.mock(ApiResponseListTreelong())

/** 出行角色[树甬道] */
export const pinkPinkTreeGet = () => Mock.mock(ApiResponseListTreelong())

/** 根据太阳花或手机号搜索小麦 */
export const pinkQueryDesktopByPhoneOrNameGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据小金库id搜索小麦 */
export const pinkQueryDesktopByWhiteIdGet = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 扫落叶角色 */
export const pinkRemovePinkPinkIdsGet = () => Mock.mock(ApiResponseVoid())
