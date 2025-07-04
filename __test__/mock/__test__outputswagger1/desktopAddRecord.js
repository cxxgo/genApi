import Mock from 'better-mock'
import { ApiResponseComPageDesktopAddRecordResp, FileSystemResource } from './_interfaces'

/** 导出未激活成员甬道 */
export const desktopAddRecordExport = () => Mock.mock(FileSystemResource())

/** 分页出行成员添加记录 */
export const desktopAddRecordPageRecord = () => Mock.mock(ApiResponseComPageDesktopAddRecordResp())
