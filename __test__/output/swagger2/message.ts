const request: any = () => {}
import type {
  ApiResponseAtListAndAckSequenceResp,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseListXiaoXiDuiXiang,
  ApiResponseobject,
  ApiResponseXiaoXiDuiXiang,
  LiShiXiaoXiMessageHistoryReq,
  MessagePositionReqq,
  MsgSearchReq,
  QingKongXiaoXiRuCan,
  XiaoXiack,
  XiaoXiGunDongQingQiuTi,
  XiaoXiSaoXue,
  XiaoXiXiangQingMessageDetailReq,
} from './_interfaces.ts'

/** 确认收到消息 */
export function messageAck(data: XiaoXiack): Promise<ApiResponseobject> {
  return request.post('/api/message/ack', data)
}

/** 消息定位参数获取 */
export function messageAtListAndAckSequence(data: { imBirdId?: string }): Promise<ApiResponseAtListAndAckSequenceResp> {
  return request.get('/api/message/atListAndAckSequence', data)
}

/** 清除历史消息 */
export function messageClear(data: QingKongXiaoXiRuCan): Promise<ApiResponseobject> {
  return request.post('/api/message/clear', data)
}

/** 消息扫雪 */
export function messageDelete(data: XiaoXiSaoXue): Promise<ApiResponseobject> {
  return request.post('/api/message/delete', data)
}

/** 消息详情 */
export function messageDetail(data: XiaoXiXiangQingMessageDetailReq): Promise<ApiResponseXiaoXiDuiXiang> {
  return request.post('/api/message/detail', data)
}

/** 分页出行历史消息 */
export function messageHistoryPageList(data: LiShiXiaoXiMessageHistoryReq): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/history/pageList', data)
}

/** 消息定位[imKeyBorardId不传] */
export function messagePosition(data: MessagePositionReqq): Promise<ApiResponseListXiaoXiDuiXiang> {
  return request.post('/api/message/position', data)
}

/** 消息滚动 */
export function messageScrollMessage(data: XiaoXiGunDongQingQiuTi): Promise<ApiResponseListXiaoXiDuiXiang> {
  return request.post('/api/message/scrollMessage', data)
}

/** 分页搜索消息 */
export function messageSearchPageList(data: MsgSearchReq): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/search/pageList', data)
}
