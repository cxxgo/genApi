const request: any = () => {}
import type {
  ApiResponse,
  ApiResponseChannelAppGratefulConfigResp,
  ApiResponseComLoginResp,
  ChannelAppGratefulConfigAddReq,
  ChannelAppGratefulConfigUpReq,
  ChannelComLoginReq,
} from './_interfaces.ts'

/** 登录结盟 */
export function channelDesktopComLoginAndBindPost(data: ChannelComLoginReq): Promise<ApiResponseComLoginResp> {
  return request.post('/api/channel/desktop/comLoginAndBind', data)
}

/** 加湿内部结盟 */
export function channelGratefulConfigAddPost(data: ChannelAppGratefulConfigAddReq): Promise<ApiResponse> {
  return request.post('/api/channel/gratefulConfig/add', data)
}

/** 结盟详情 */
export function channelGratefulConfigDetailGet(data: {
  channelType?: string
  gratefulId?: string
}): Promise<ApiResponseChannelAppGratefulConfigResp> {
  return request.get('/api/channel/gratefulConfig/detail', data)
}

/** 修改内部结盟 */
export function channelGratefulConfigUpdatePost(data: ChannelAppGratefulConfigUpReq): Promise<ApiResponse> {
  return request.post('/api/channel/gratefulConfig/update', data)
}
