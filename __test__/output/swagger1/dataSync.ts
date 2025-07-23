const request: any = () => {}
import type { ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo } from './_interfaces.ts'

/** 根据流水号出行结果 */
export function dataSyncCheckResultGet(data: {
  // 流水号
  serialNumber?: string
}): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return request.get('/api/dataSync/checkResult', data)
}
