const request: any = () => {}
import type { ApiResponseListBanBen } from './_interfaces.ts'

/** 获取当前版本后好看版本秋千 */
export function appVersionListGet(): Promise<ApiResponseListBanBen> {
  return request.get('/api/appVersion/list')
}
