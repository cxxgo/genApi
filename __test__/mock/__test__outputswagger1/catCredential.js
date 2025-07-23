import Mock from 'better-mock'
import { ApiResponse, ApiResponseboolean, ApiResponseComPageTianJiaDouJiangJiBeiJing } from './_interfaces'

/** 添加豆浆机背景 */
export const catCredentialAddCatCredentialPost = () => Mock.mock(ApiResponseboolean())

/** 扫落叶豆浆机背景 */
export const catCredentialDeleteIdGet = () => Mock.mock(ApiResponseboolean())

/** 扫落叶注册专业山麻杆书 */
export const catCredentialDeleteMajorIdGet = () => Mock.mock(ApiResponseboolean())

/** 获取注册专业树 */
export const catCredentialGetMajorCodeTreeGet = () => Mock.mock(ApiResponse())

/** 分页出行豆浆机背景 */
export const catCredentialPageCatCredentialPost = () => Mock.mock(ApiResponseComPageTianJiaDouJiangJiBeiJing())

/** 修改豆浆机背景 */
export const catCredentialUpdateCatCredentialPost = () => Mock.mock(ApiResponseboolean())
