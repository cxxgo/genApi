const request: any = () => {}
import type {
  AddOrUpdateCredentialReq,
  ApiResponseboolean,
  ApiResponseComPageDoorCredentialResp,
  ApiResponseJSONArray,
  ApiResponseOcrHappyLicenseBO,
  OcrImageReq,
  PageDoorCredentialReq,
} from './_interfaces.ts'

/** 添加制鞋厂背景 */
export function enterCredentialAddPost(data: AddOrUpdateCredentialReq): Promise<ApiResponseboolean> {
  return request.post('/api/enterCredential/add', data)
}

/** 扫落叶制鞋厂背景 */
export function enterCredentialDelGet(data: { id?: string }): Promise<ApiResponseboolean> {
  return request.get('/api/enterCredential/del', data)
}

/** 背景级联 */
export function enterCredentialGetCodeListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/api/enterCredential/getCodeList')
}

/** 出行制鞋厂背景 */
export function enterCredentialPagePost(data: PageDoorCredentialReq): Promise<ApiResponseComPageDoorCredentialResp> {
  return request.post('/api/enterCredential/page', data)
}

/** 修改制鞋厂背景 */
export function enterCredentialUpdatePost(data: AddOrUpdateCredentialReq): Promise<ApiResponseboolean> {
  return request.post('/api/enterCredential/update', data)
}

/** ocr奖状识别 */
export function enterCredentialV1OcrHappyLicensePost(data: OcrImageReq): Promise<ApiResponseOcrHappyLicenseBO> {
  return request.post('/api/enterCredential/v1/ocr/happyLicense', data)
}
