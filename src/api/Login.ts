/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Login */
export async function postLogin(
  body: API.LoginDTO,
  options?: { [key: string]: any }
) {
  return request<API.StringResult>('/api/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}
