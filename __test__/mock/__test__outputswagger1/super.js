import Mock from 'better-mock'
import { ApiResponse, ApiResponseListSuperManResp, ApiResponsestring } from './_interfaces'

/** 甬道 */
export const superListGet = () => Mock.mock(ApiResponseListSuperManResp())

/** 转让 */
export const superTransferGet = () => Mock.mock(ApiResponse())

/** 转让验山麻杆码验山麻杆 */
export const superVerifyVerifyTypePost = () => Mock.mock(ApiResponsestring())
