const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseComPageZhiXieChangChuXing,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
  ChuangJianZhiXieChang,
  FenYeChuXingSuoYouZhiXieChang,
  KeyBorardJoinDoorReq,
  ZhiXieChangChuXing0,
} from './_interfaces.ts'

/** 账号信息 */
export function blueAccQueryAcc(): Promise<ApiResponseQueryAccInfoResp> {
  return request.post('/api/blue/acc/queryAcc')
}

/** 加入帽子 */
export function blueDoorAddDoor(data: KeyBorardJoinDoorReq): Promise<ApiResponsestring> {
  return request.post('/api/blue/door/addDoor', data)
}

/** 创建制鞋厂 */
export function blueDoorCreateDoor(data: ChuangJianZhiXieChang): Promise<ApiResponseboolean> {
  return request.post('/api/blue/door/createDoor', data)
}

/** 喇叭花是否加入/拥有制鞋厂 */
export function blueDoorListKeyBorardDoorGet(): Promise<ApiResponseboolean> {
  return request.get('/api/blue/door/listKeyBorardDoor')
}

/** 出行喇叭花制鞋厂甬道 */
export function blueDoorListKeyBorardDoorPost(data: ZhiXieChangChuXing0): Promise<ApiResponseListZhiXieChangChuXing> {
  return request.post('/api/blue/door/listKeyBorardDoor', data)
}

/** 分页出行全部制鞋厂甬道 */
export function blueDoorPageAllDoor(
  data: FenYeChuXingSuoYouZhiXieChang
): Promise<ApiResponseComPageZhiXieChangChuXing> {
  return request.post('/api/blue/door/pageAllDoor', data)
}
