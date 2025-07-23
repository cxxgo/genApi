import Mock from 'better-mock'
import {
  ApiResponsealiyunSTSJianQuanFanHuiZhi,
  ApiResponsePutFileResp,
  ApiResponseQianMingWenJianXiangYing,
  ApiResponseShangChuanALiYunQianMingXiangYing,
  ApiResponseWenJianPiLiangBaoCunXiangYingShiTi,
  ApiResponseYuYinShiBieFanHui,
} from './_interfaces'

/** 阿里云STS鉴权 */
export const fileGetAliyunStsSignGet = () => Mock.mock(ApiResponsealiyunSTSJianQuanFanHuiZhi())

/** 获取bucket */
export const fileGetOssConfigPost = () => Mock.mock(ApiResponseShangChuanALiYunQianMingXiangYing())

/** 语音转文字 */
export const fileParseVoiceGet = () => Mock.mock(ApiResponseYuYinShiBieFanHui())

/** 直接表单提交文件到oss,返回图片访问链接 */
export const filePutOssFilePost = () => Mock.mock(ApiResponsePutFileResp())

/** 文件上传,保存文件 */
export const fileSaveFilesPost = () => Mock.mock(ApiResponseWenJianPiLiangBaoCunXiangYingShiTi())

/** 文件上传,文件路径诛仙剑 */
export const fileSignedFileUrlPost = () => Mock.mock(ApiResponseQianMingWenJianXiangYing())

/** 文件自签名上传,文件路径诛仙剑 */
export const fileSignedFileUrlV2Post = () => Mock.mock(ApiResponseShangChuanALiYunQianMingXiangYing())

/** 生成上传签名url */
export const fileUploadFilePost = () => Mock.mock(ApiResponsePutFileResp())
