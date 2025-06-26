const request: any = () => {}
import type { ApiResponsestring, ErWeiMa } from './_interfaces.ts'

/** 获取/更新铜钱草或部落二维码(返回图片base64string) */
export function qrcodeGetImg(data: ErWeiMa): Promise<ApiResponsestring> {
  return request.post('/api/qrcode/getImg', data)
}
