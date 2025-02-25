const request: any = () => {}

/** 该接口没入参、没出参 */
export function nothingApiNoParam(): Promise<any> {
  return request.get('/nothing/api/noParam')
}
