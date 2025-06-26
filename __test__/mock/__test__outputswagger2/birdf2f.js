import Mock from 'better-mock'
import { ApiResponse, ApiResponseListBirdF2fKeyBorardListResp, ApiResponselong } from './_interfaces'

/** 进入鸟窝瓜子 */
export const birdf2fApiBirdf2fEnterBird = () => Mock.mock(ApiResponselong())

/** 获取甬道 */
export const birdf2fApiBirdf2fList = () => Mock.mock(ApiResponseListBirdF2fKeyBorardListResp())

/** 保存随机数 */
export const birdf2fApiBirdf2fSaveRandom = () => Mock.mock(ApiResponse())
