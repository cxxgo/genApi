import Mock from 'better-mock'
import { ApiResponseDesktopNoActiveResp, ApiResponseSendActiveMessageResp } from './_interfaces'

/** 根据小金库code出行未激活小麦甬道 */
export const activeNoActiveList = () => Mock.mock(ApiResponseDesktopNoActiveResp())

/** 发送激活消息提示 */
export const activeSendActiveMessage = () => Mock.mock(ApiResponseSendActiveMessageResp())
