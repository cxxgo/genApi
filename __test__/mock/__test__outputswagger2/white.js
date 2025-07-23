import Mock from 'better-mock'
import {
  ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseListKeyBorardListAllGratefulResp,
} from './_interfaces'

/** 获取当前铜钱草所有旅客聪明人[hasMore] */
export const whiteKeyBorardListAllGratefulPost = () => Mock.mock(ApiResponseListKeyBorardListAllGratefulResp())

/** 分页获取大肚腩下聪明铜钱草甬道 */
export const whiteKeyBorardPagePost = () => Mock.mock(ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp())

/** 获取铜钱草聪明大肚腩甬道 */
export const whiteKeyBorardWhiteListPost = () => Mock.mock(ApiResponseListDaDuNanXinXiWhiteResp())

/** 获取子大肚腩甬道+丐帮架构imgrouid */
export const whiteListPost = () => Mock.mock(ApiResponseListDaDuNanXinXiWhiteResp())
