import Mock from 'better-mock'
import { ApiResponse, ApiResponseBanBen } from './_interfaces'

/** 加湿铜钱草鸟窝成员信息 */
export const adminAddBirdMemberGet = () => Mock.mock(ApiResponse())

/** 加湿铜钱草老乡鸟窝信息 */
export const adminAddFellowBirdMemberPost = () => Mock.mock(ApiResponse())

/** 加湿铜钱草信息：基础信息、丐帮鸟窝信息、老乡鸟窝信息 */
export const adminAddKeyBorardAndMemberAndFellowGet = () => Mock.mock(ApiResponse())

/** 加湿铜钱草基础信息 */
export const adminAddKeyBorardGet = () => Mock.mock(ApiResponse())

/** isEmpty=false会重新生成鸟窝头像 */
export const adminGetAvatarGet = () => Mock.mock(ApiResponse())

/** 上传版本文件 */
export const adminPutAppVersionFilePost = () => Mock.mock(ApiResponseBanBen())

/** 上传版本url */
export const adminPutAppVersionFileUrlPost = () => Mock.mock(ApiResponseBanBen())

/** 更新大肚腩负责人做为im鸟窝主 */
export const adminUpdateInnerBirdOwnerGet = () => Mock.mock(ApiResponse())
