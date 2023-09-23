/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Post/Create */
export async function postPostCreate(
  body: API.PostDto,
  options?: { [key: string]: any }
) {
  return request<API.PostResult>('/api/Post/Create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 DELETE /api/Post/Delete/${param0} */
export async function deletePostDeleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostDeleteIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.PostResult>(`/api/Post/Delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Post/GetAll */
export async function getPostGetAll(options?: { [key: string]: any }) {
  return request<API.PostListResult>('/api/Post/GetAll', {
    method: 'GET',
    ...(options || {})
  })
}
