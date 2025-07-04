import Mock from 'better-mock'
import { ApiResponse, ApiResponseboolean, ApiResponseComPageTianJiaDouJiangJiBeiJing } from './_interfaces'

/** 添加豆浆机背景 */
export const catCredentialAddCatCredential = () => Mock.mock(ApiResponseboolean())

/** 扫落叶豆浆机背景 */
export const catCredentialDeleteId = () => Mock.mock(ApiResponseboolean())

/** 扫落叶注册专业山麻杆书 */
export const catCredentialDeleteMajorId = () => Mock.mock(ApiResponseboolean())

/** 获取注册专业树 */
export const catCredentialGetMajorCodeTree = () => Mock.mock(ApiResponse())

/** 分页出行豆浆机背景 */
export const catCredentialPageCatCredential = () => Mock.mock(ApiResponseComPageTianJiaDouJiangJiBeiJing())

/** 修改豆浆机背景 */
export const catCredentialUpdateCatCredential = () => Mock.mock(ApiResponseboolean())
