/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Window/Create */
export async function postWindowCreate(
  body: API.WindowDto,
  options?: { [key: string]: any }
) {
  return request<API.WindowResult>('/api/Window/Create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/Window/DecreaseFavoriteCount/${param0} */
export async function postWindowDecreaseFavoriteCountId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postWindowDecreaseFavoriteCountIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.Int32Result>(
    `/api/Window/DecreaseFavoriteCount/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 DELETE /api/Window/Delete/${param0} */
export async function deleteWindowDeleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWindowDeleteIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.WindowResult>(`/api/Window/Delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Window/GetAll */
export async function getWindowGetAll(options?: { [key: string]: any }) {
  return request<API.WindowListResult>('/api/Window/GetAll', {
    method: 'GET',
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Window/GetByCanteen/${param0} */
export async function getWindowGetByCanteenCanteen(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWindowGetByCanteenCanteenParams,
  options?: { [key: string]: any }
) {
  const { canteen: param0, ...queryParams } = params
  return request<API.WindowListResult>(`/api/Window/GetByCanteen/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Window/GetById/${param0} */
export async function getWindowGetByIdId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWindowGetByIdIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.WindowResult>(`/api/Window/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/Window/IncreaseFavoriteCount/${param0} */
export async function postWindowIncreaseFavoriteCountId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postWindowIncreaseFavoriteCountIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.Int32Result>(
    `/api/Window/IncreaseFavoriteCount/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 PUT /api/Window/Update/${param0} */
export async function putWindowUpdateId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putWindowUpdateIdParams,
  body: API.UpdateWindowParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.WindowResult>(`/api/Window/Update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  })
}
