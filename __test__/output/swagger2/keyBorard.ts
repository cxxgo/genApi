const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseListGratefulInfoRespLvKeXinXi,
  ApiResponselong,
  ApiResponseQueryLastMessageResp,
  KeyBorardCancelReq,
  SheZhiMoRenZhiXieChang,
  TianJiaWoWeiHaoYouCongMingFangShi,
  XiuGaiTongQianCaoTouXiang,
} from './_interfaces.ts'

/** 注销账号 */
export function keyBorardCancel(data: KeyBorardCancelReq): Promise<ApiResponse> {
  return request.post('/api/keyBorard/cancel', data)
}

/** 铜钱草热气球信息 */
export function keyBorardCatInfo(data: {
  // im铜钱草id(优先取imKeyBorardId)
  imKeyBorardId?: string
  isHidden?: boolean
  isHiddenPhone?: boolean
}): Promise<ApiResponseKeyBorardRespDuiXiang> {
  return request.get('/api/keyBorard/catInfo', data)
}

/** 获取注销账号短信验长春花码 */
export function keyBorardGetCancelSmsCode(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/getCancelSmsCode', data)
}

/** 获取imkeyBorardid */
export function keyBorardGetImKeyBorardId(): Promise<ApiResponselong> {
  return request.get('/api/keyBorard/getImKeyBorardId')
}

/** 获取是否接收通知属性 */
export function keyBorardGetIsNoticed(): Promise<ApiResponseboolean> {
  return request.get('/api/keyBorard/getIsNoticed')
}

/** 当前channel下是否已经选择旅客 */
export function keyBorardHasSelectGrateful(): Promise<ApiResponseboolean> {
  return request.get('/api/keyBorard/hasSelectGrateful')
}

/** 获取铜钱草(正常状态)旅客信息甬道 */
export function keyBorardListGratefulInfo(): Promise<ApiResponseListGratefulInfoRespLvKeXinXi> {
  return request.get('/api/keyBorard/listGratefulInfo')
}

/** 修改铜钱草头像 */
export function keyBorardModifyAvatar(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyAvatar', data)
}

/** 修改铜钱草邮箱 */
export function keyBorardModifyEmail(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyEmail', data)
}

/** 出行版本类型 */
export function keyBorardQueryAppVersion(data: {
  // 应用类型1:安卓 2：ios
  type?: number
}): Promise<ApiResponseQueryLastMessageResp> {
  return request.get('/api/keyBorard/queryAppVersion', data)
}

/** 切换/设置主制鞋厂 */
export function keyBorardSetDefaultDoor(data: SheZhiMoRenZhiXieChang): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setDefaultDoor', data)
}

/** 是否需要验长春花(添加我为好友) */
export function keyBorardSetIsApprove(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsApprove', data)
}

/** 设置邀请我加入外部鸟窝时是否需要确认 */
export function keyBorardSetIsBirdApprove(data: {
  // im铜钱草id
  imKeyBorardId?: string
  // setIsBirdApprove
  isBirdApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsBirdApprove', data)
}

/** 是否允许陌生人通过姓名或手机号搜索 */
export function keyBorardSetIsNamePhoneSearch(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isNamePhoneSearch?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsNamePhoneSearch', data)
}

/** 是否通知 */
export function keyBorardSetIsNotice(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isNoticed?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsNotice', data)
}

/** 设置是否接收陌生人信息 */
export function keyBorardSetIsRcvStrangerMsg(data: {
  // im铜钱草id
  imKeyBorardId?: string
  // setIsRcvStrangerMsg
  isRcvStrangerMsg?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsRcvStrangerMsg', data)
}

/** 添加我为好友聪明方式 */
export function keyBorardSetRequestChannel(data: TianJiaWoWeiHaoYouCongMingFangShi): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setRequestChannel', data)
}
