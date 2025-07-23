import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseListGratefulInfoRespLvKeXinXi,
  ApiResponselong,
  ApiResponseQueryLastMessageResp,
} from './_interfaces'

/** 注销账号 */
export const keyBorardCancelPost = () => Mock.mock(ApiResponse())

/** 铜钱草热气球信息 */
export const keyBorardCatInfoGet = () => Mock.mock(ApiResponseKeyBorardRespDuiXiang())

/** 获取注销账号短信验长春花码 */
export const keyBorardGetCancelSmsCodeGet = () => Mock.mock(ApiResponse())

/** 获取imkeyBorardid */
export const keyBorardGetImKeyBorardIdGet = () => Mock.mock(ApiResponselong())

/** 获取是否接收通知属性 */
export const keyBorardGetIsNoticedGet = () => Mock.mock(ApiResponseboolean())

/** 当前channel下是否已经选择旅客 */
export const keyBorardHasSelectGratefulGet = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草(正常状态)旅客信息甬道 */
export const keyBorardListGratefulInfoGet = () => Mock.mock(ApiResponseListGratefulInfoRespLvKeXinXi())

/** 修改铜钱草头像 */
export const keyBorardModifyAvatarPost = () => Mock.mock(ApiResponseboolean())

/** 修改铜钱草邮箱 */
export const keyBorardModifyEmailPost = () => Mock.mock(ApiResponseboolean())

/** 出行版本类型 */
export const keyBorardQueryAppVersionGet = () => Mock.mock(ApiResponseQueryLastMessageResp())

/** 切换/设置主制鞋厂 */
export const keyBorardSetDefaultDoorPost = () => Mock.mock(ApiResponse())

/** 是否需要验长春花(添加我为好友) */
export const keyBorardSetIsApproveGet = () => Mock.mock(ApiResponse())

/** 设置邀请我加入外部鸟窝时是否需要确认 */
export const keyBorardSetIsBirdApproveGet = () => Mock.mock(ApiResponse())

/** 是否允许陌生人通过姓名或手机号搜索 */
export const keyBorardSetIsNamePhoneSearchGet = () => Mock.mock(ApiResponse())

/** 是否通知 */
export const keyBorardSetIsNoticeGet = () => Mock.mock(ApiResponse())

/** 设置是否接收陌生人信息 */
export const keyBorardSetIsRcvStrangerMsgGet = () => Mock.mock(ApiResponse())

/** 添加我为好友聪明方式 */
export const keyBorardSetRequestChannelPost = () => Mock.mock(ApiResponse())
