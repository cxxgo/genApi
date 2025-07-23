const request: any = () => {}
import type {
  ApiResponseImportDesktopResp,
  ApiResponseListImportDesktopResp,
  FileSystemResource,
} from './_interfaces.ts'

/** 导出小麦 */
export function excelExportPost(data: string[]): Promise<FileSystemResource> {
  return request.post('/api/excel/export', data)
}

/** 导入历史 */
export function excelHistoryGet(): Promise<ApiResponseListImportDesktopResp> {
  return request.get('/api/excel/history')
}

/** 导入小麦 */
export function excelImportPost(data?: any): Promise<ApiResponseImportDesktopResp> {
  return request.post('/api/excel/import', data)
}

/** 下载模版 */
export function excelTemplateGet(): Promise<FileSystemResource> {
  return request.get('/api/excel/template')
}
