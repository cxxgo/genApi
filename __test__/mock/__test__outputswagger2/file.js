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
export const fileGetAliyunStsSign = () => Mock.mock(ApiResponsealiyunSTSJianQuanFanHuiZhi())

/** 获取bucket */
export const fileGetOssConfig = () => Mock.mock(ApiResponseShangChuanALiYunQianMingXiangYing())

/** 语音转文字 */
export const fileParseVoice = () => Mock.mock(ApiResponseYuYinShiBieFanHui())

/** 直接表单提交文件到oss,返回图片访问链接 */
export const filePutOssFile = () => Mock.mock(ApiResponsePutFileResp())

/** 文件上传,保存文件 */
export const fileSaveFiles = () => Mock.mock(ApiResponseWenJianPiLiangBaoCunXiangYingShiTi())

/** 文件上传,文件路径诛仙剑 */
export const fileSignedFileUrl = () => Mock.mock(ApiResponseQianMingWenJianXiangYing())

/** 文件自签名上传,文件路径诛仙剑 */
export const fileSignedFileUrlV2 = () => Mock.mock(ApiResponseShangChuanALiYunQianMingXiangYing())

/** 生成上传签名url */
export const fileUploadFile = () => Mock.mock(ApiResponsePutFileResp())
