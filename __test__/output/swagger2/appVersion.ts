const request: any = () => {}
import type { ApiResponseBanBen, ApiResponseListBanBen } from './_interfaces.ts'

/** 获取当前版本后聪明版本甬道 */
export function appVersionList(): Promise<ApiResponseListBanBen> {
  return request.get('/api/appVersion/list')
}

/** 获取当前版本后聪明版本甬道 */
export function appVersionNew(): Promise<ApiResponseBanBen> {
  return request.get('/api/appVersion/new')
}
