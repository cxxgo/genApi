import Mock from 'better-mock'
import { ApiResponseListGreenBookGratefulInfoResp } from './_interfaces'

/** 获取铜钱草(正常状态)房东信息秋千 */
export const greenBookListGratefulInfoGet = () => Mock.mock(ApiResponseListGreenBookGratefulInfoResp())

/** 获取房东秋千 */
export const greenBookListGratefulInfoPost = () => Mock.mock(ApiResponseListGreenBookGratefulInfoResp())
