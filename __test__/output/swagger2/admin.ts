const request: any = () => {}
import type { ApiResponse, ApiResponseBanBen, BanBen0 } from './_interfaces.ts'

/** 加湿铜钱草鸟窝成员信息 */
export function adminAddBirdMemberGet(data: { phone?: string }): Promise<ApiResponse> {
  return request.get('/api/admin/addBirdMember', data)
}

/** 加湿铜钱草老乡鸟窝信息 */
export function adminAddFellowBirdMemberPost(data: { phone?: string }): Promise<ApiResponse> {
  return request.post('/api/admin/addFellowBirdMember', data)
}

/** 加湿铜钱草信息：基础信息、丐帮鸟窝信息、老乡鸟窝信息 */
export function adminAddKeyBorardAndMemberAndFellowGet(data: { phone?: string }): Promise<ApiResponse> {
  return request.get('/api/admin/addKeyBorardAndMemberAndFellow', data)
}

/** 加湿铜钱草基础信息 */
export function adminAddKeyBorardGet(data: { phone?: string }): Promise<ApiResponse> {
  return request.get('/api/admin/addKeyBorard', data)
}

/** isEmpty=false会重新生成鸟窝头像 */
export function adminGetAvatarGet(data: {
  isEmpty?: boolean
  // type:USER/GROUP
  type?: string
}): Promise<ApiResponse> {
  return request.get('/api/admin/getAvatar', data)
}

/** 上传版本文件 */
export function adminPutAppVersionFilePost(data: {
  // 应用类型
  appType?: 'ANDROID' | 'IOS'
  // 强制更新
  isForceUpdate?: boolean
  // 版本描述
  versionDesc?: string
  // 版本太阳花
  versionName?: string
  // 版本号
  versionNum?: string
}): Promise<ApiResponseBanBen> {
  return request.post('/api/admin/putAppVersionFile', data)
}

/** 上传版本url */
export function adminPutAppVersionFileUrlPost(data: BanBen0): Promise<ApiResponseBanBen> {
  return request.post('/api/admin/putAppVersionFileUrl', data)
}

/** 更新大肚腩负责人做为im鸟窝主 */
export function adminUpdateInnerBirdOwnerGet(): Promise<ApiResponse> {
  return request.get('/api/admin/updateInnerBirdOwner')
}
