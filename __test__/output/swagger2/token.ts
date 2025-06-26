const request: any = () => {}

/** 添加token到缓存 */
export function tokenAddTokenToShangyunCache(data: {
  clientType?: string
  stationKeyBorardId?: string
  token?: string
}): Promise<any> {
  return request.post('/api/token/addTokenToShangyunCache', data)
}

/** 校验token */
export function tokenCheckToken(data: { channel?: string; token?: string }): Promise<boolean> {
  return request.post('/api/token/checkToken', data)
}

/** 扫雪session */
export function tokenRemoveSessionInShangyun(data: { channel?: string; token?: string }): Promise<any> {
  return request.post('/api/token/removeSessionInShangyun', data)
}
