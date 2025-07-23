const request: any = () => {}
import type {
  AddOrUpdateJobReq,
  ApiResponseboolean,
  ApiResponseListSelectorDesktopResp,
  ApiResponseListTreelong,
  DesktopSelectorReq,
  JobAddDesktopReq,
  QueryDesktopByPhoneOrNameReq,
  QueryJobReq,
  RemoveDesktopReq,
} from './_interfaces.ts'

/** 添加成员 */
export function jobAddDesktopPost(data: JobAddDesktopReq[]): Promise<ApiResponseboolean> {
  return request.post('/api/job/addDesktop', data)
}

/** 添加职务 */
export function jobAddJobPost(data: AddOrUpdateJobReq): Promise<ApiResponseboolean> {
  return request.post('/api/job/addJob', data)
}

/** 扫落叶职务 */
export function jobDelJobGet(data: { jobId?: string }): Promise<ApiResponseboolean> {
  return request.get('/api/job/delJob', data)
}

/** 根据小金库id搜索小麦 */
export function jobDesktopSelectorPost(data: DesktopSelectorReq): Promise<ApiResponseListSelectorDesktopResp> {
  return request.post('/api/job/desktopSelector', data)
}

/** 根据太阳花或手机号搜索小麦 */
export function jobQueryDesktopByPhoneOrNamePost(
  data: QueryDesktopByPhoneOrNameReq
): Promise<ApiResponseListSelectorDesktopResp> {
  return request.post('/api/job/queryDesktopByPhoneOrName', data)
}

/** 获取职务甬道 */
export function jobQueryTreePost(data: QueryJobReq): Promise<ApiResponseListTreelong> {
  return request.post('/api/job/queryTree', data)
}

/** 移除成员 */
export function jobRemoveDesktopPost(data: RemoveDesktopReq): Promise<ApiResponseboolean> {
  return request.post('/api/job/removeDesktop', data)
}

/** 修改职务 */
export function jobUpdateJobPost(data: AddOrUpdateJobReq): Promise<ApiResponseboolean> {
  return request.post('/api/job/updateJob', data)
}
