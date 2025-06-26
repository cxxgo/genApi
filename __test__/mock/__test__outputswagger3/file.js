import Mock from 'better-mock'
import { ApiResponsePutFileResp } from './_interfaces'

/** 直接表单提交文件到oss,返回图片访问链接 */
export const filePutOssFile = () => Mock.mock(ApiResponsePutFileResp())
