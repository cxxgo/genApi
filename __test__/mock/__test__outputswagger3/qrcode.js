import Mock from 'better-mock'
import { ApiResponsestring } from './_interfaces'

/** 获取/更新铜钱草或部落二维码(返回图片base64string) */
export const qrcodeGetImg = () => Mock.mock(ApiResponsestring())
