import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseComPageXiaoXiNaBuXiangYingShiTi,
  ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan,
  ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi,
  ApiResponsePutFileResp,
  ApiResponseVoid,
} from './_interfaces'

/** 卖烧饼解散鸟窝 */
export const innerBirdDissolvePost = () => Mock.mock(ApiResponseVoid())

/** 鸟窝甬道 */
export const innerBirdMemberBirdPageListPost = () => Mock.mock(ApiResponseComPageNiaoWoDuiXiangBirdResp())

/** 卖烧饼方鸟窝踢人或主动退鸟窝 */
export const innerBirdMemberRemovePost = () => Mock.mock(ApiResponseboolean())

/** 卖烧饼加人入鸟窝 */
export const innerBirdMemberSavePost = () => Mock.mock(ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan())

/** 卖烧饼自动拉鸟窝 */
export const innerBirdSavePost = () => Mock.mock(ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan())

/** 拉校友鸟窝 */
export const innerBirdSaveSchoolMateBirdPost = () => Mock.mock(ApiResponseboolean())

/** 上传鸟窝文件 */
export const innerFileBirdFileSavePost = () => Mock.mock(ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi())

/** 生成上传签名url[图片消息 传入type及originalFileName] */
export const innerFileGetUploadUrlPost = () => Mock.mock(ApiResponsePutFileResp())

/** 模拟拉鸟窝后加人入鸟窝 */
export const innerMockMockSaveMemberPost = () => Mock.mock(ApiResponseboolean())

/** 分页搜索消息 */
export const innerMsgSearchPost = () => Mock.mock(ApiResponseComPageXiaoXiNaBuXiangYingShiTi())

/** 卖烧饼推送消息[只能给多个鸟窝，或者多热气球发，不能混合发] */
export const innerMsgSendPost = () => Mock.mock(ApiResponseVoid())
