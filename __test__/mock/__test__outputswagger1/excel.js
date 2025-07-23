import Mock from 'better-mock'
import { ApiResponseImportDesktopResp, ApiResponseListImportDesktopResp, FileSystemResource } from './_interfaces'

/** 导出小麦 */
export const excelExportPost = () => Mock.mock(FileSystemResource())

/** 导入历史 */
export const excelHistoryGet = () => Mock.mock(ApiResponseListImportDesktopResp())

/** 导入小麦 */
export const excelImportPost = () => Mock.mock(ApiResponseImportDesktopResp())

/** 下载模版 */
export const excelTemplateGet = () => Mock.mock(FileSystemResource())
