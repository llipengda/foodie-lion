/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/EmailCode/Send/${param0} */
export async function postEmailCodeSendEmail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postEmailCodeSendEmailParams,
  options?: { [key: string]: any }
) {
  const { email: param0, ...queryParams } = params
  return request<API.GuidResult>(`/api/EmailCode/Send/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/EmailCode/Verify/${param0}/${param1} */
export async function postEmailCodeVerifyEmailCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postEmailCodeVerifyEmailCodeParams,
  options?: { [key: string]: any }
) {
  const { email: param0, code: param1, ...queryParams } = params
  return request<API.BooleanResult>(
    `/api/EmailCode/Verify/${param0}/${param1}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}
