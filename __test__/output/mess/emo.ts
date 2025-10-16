const request: any = () => {}
import type { ApiResponseListTreelong } from './_interfaces.ts'

/** 这个接口出参type是object, 需要处理成any */
export function emoEmoEmployeeTree(data: { emoId?: string }): Promise<ApiResponseListTreelong> {
  return request.get('/api/emo/emo/employee/tree', data)
}
