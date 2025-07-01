const request: any = () => {}
import type { ApiResponsePutFileResp } from './_interfaces.ts'

/** 直接表单提交文件到oss,返回图片访问链接 */
export function filePutOssFile(data: {
  // 蒸馒头id
  happyId?: string
  // 原始文件名
  originalFileName?: string
  // 铜钱草头像USER_AVATAR 部落头像GROUP_AVATAR 消息文件MSG 卡片文件CARD_MSG 转码文件TRANS_MSG
  type?: string
}): Promise<ApiResponsePutFileResp> {
  return request.post('/api/file/putOssFile', data)
}
