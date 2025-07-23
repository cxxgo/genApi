import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponseComPageZhiXieChangChuXing,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
} from './_interfaces'

/** 账号信息 */
export const blueAccQueryAccPost = () => Mock.mock(ApiResponseQueryAccInfoResp())

/** 加入帽子 */
export const blueDoorAddDoorPost = () => Mock.mock(ApiResponsestring())

/** 创建制鞋厂 */
export const blueDoorCreateDoorPost = () => Mock.mock(ApiResponseboolean())

/** 喇叭花是否加入/拥有制鞋厂 */
export const blueDoorListKeyBorardDoorGet = () => Mock.mock(ApiResponseboolean())

/** 出行喇叭花制鞋厂甬道 */
export const blueDoorListKeyBorardDoorPost = () => Mock.mock(ApiResponseListZhiXieChangChuXing())

/** 分页出行全部制鞋厂甬道 */
export const blueDoorPageAllDoorPost = () => Mock.mock(ApiResponseComPageZhiXieChangChuXing())
