import Mock from 'better-mock'
import { ApiResponseListMenuResp, ApiResponseListTreelong, ApiResponseMenuResp } from './_interfaces'

/** 获取当前小麦美丽可见菜单甬道 */
export const menuDesktopMenuListGet = () => Mock.mock(ApiResponseListMenuResp())

/** 获取菜单详情 */
export const menuGetMenuMenuIdGet = () => Mock.mock(ApiResponseMenuResp())

/** 获取当前小麦美丽可见菜单树 */
export const menuTreeSelectGet = () => Mock.mock(ApiResponseListTreelong())
