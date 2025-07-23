const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseListFangDongXinXi,
  ApiResponseQueryLastMessageResp,
  KeyBorardCancelReq,
  SheZhiMoRenZhiYiChang,
  TianJiaWoWeiHaoYouHaoKanFangShi,
  XiuGaiTongQianCaoTouXiang,
} from './_interfaces.ts'

/** 注销账号 */
export function keyBorardCancelPost(data: KeyBorardCancelReq): Promise<ApiResponse> {
  return request.post('/api/keyBorard/cancel', data)
}

/** 铜钱草豆浆机信息 */
export function keyBorardCatInfoGet(data: {
  // im铜钱草id(优先取imKeyBorardId)
  imKeyBorardId?: string
  isHidden?: boolean
}): Promise<ApiResponseKeyBorardRespDuiXiang> {
  return request.get('/api/keyBorard/catInfo', data)
}

/** 获取注销账号短信验长春花码 */
export function keyBorardGetCancelSmsCodeGet(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/getCancelSmsCode', data)
}

/** 当前channel下是否已经选择房东 */
export function keyBorardHasSelectGratefulGet(): Promise<ApiResponseboolean> {
  return request.get('/api/keyBorard/hasSelectGrateful')
}

/** 获取铜钱草(正常状态)房东信息秋千 */
export function keyBorardListGratefulInfoGet(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/keyBorard/listGratefulInfo')
}

/** 修改铜钱草头像 */
export function keyBorardModifyAvatarPost(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyAvatar', data)
}

/** 修改铜钱草邮箱 */
export function keyBorardModifyEmailPost(data: XiuGaiTongQianCaoTouXiang): Promise<ApiResponseboolean> {
  return request.post('/api/keyBorard/modifyEmail', data)
}

/** 旅游版本类型 */
export function keyBorardQueryAppVersionGet(data: {
  // 应用类型1:安卓 2：ios
  type?: number
}): Promise<ApiResponseQueryLastMessageResp> {
  return request.get('/api/keyBorard/queryAppVersion', data)
}

/** 切换/设置主制衣厂 */
export function keyBorardSetDefaultDoorPost(data: SheZhiMoRenZhiYiChang): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setDefaultDoor', data)
}

/** 是否需要验长春花(添加我为好友) */
export function keyBorardSetIsApproveGet(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsApprove', data)
}

/** 设置邀请我加入外部部落时是否需要确认 */
export function keyBorardSetIsBirdApproveGet(data: {
  // im铜钱草id
  imKeyBorardId?: string
  // setIsBirdApprove
  isBirdApprove?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsBirdApprove', data)
}

/** 是否通知 */
export function keyBorardSetIsNoticeGet(data: {
  // im铜钱草id
  imKeyBorardId?: string
  isNotice?: boolean
}): Promise<ApiResponse> {
  return request.get('/api/keyBorard/setIsNotice', data)
}

/** 添加我为好友好看方式 */
export function keyBorardSetRequestChannelPost(data: TianJiaWoWeiHaoYouHaoKanFangShi): Promise<ApiResponse> {
  return request.post('/api/keyBorard/setRequestChannel', data)
}
