const request: any = () => {}
import type {
  ApiResponseComPageDesktopAddRecordResp,
  FileSystemResource,
  PageDesktopAddRecordReq,
} from './_interfaces.ts'

/** 导出未激活成员甬道 */
export function desktopAddRecordExportPost(data: PageDesktopAddRecordReq): Promise<FileSystemResource> {
  return request.post('/api/desktopAddRecord/export', data)
}

/** 分页出行成员添加记录 */
export function desktopAddRecordPageRecordGet(data: {
  adderName?: string
  // 添加人姓名/手机号
  adderNameOrPhone?: string
  adderPhone?: string
  desktopName?: string
  // 成员姓名或手机号
  desktopNameOrPhone?: string
  desktopPhone?: string
  // 小麦状态
  desktopStatus?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageDesktopAddRecordResp> {
  return request.get('/api/desktopAddRecord/pageRecord', data)
}
