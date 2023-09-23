/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/User/Create */
export async function postUserCreate(
  body: API.UserDto,
  options?: { [key: string]: any }
) {
  return request<API.UserOutDtoResult>('/api/User/Create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 DELETE /api/User/Delete/${param0} */
export async function deleteUserDeleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserDeleteIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.UserOutDtoResult>(`/api/User/Delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/GetAll */
export async function getUserGetAll(options?: { [key: string]: any }) {
  return request<API.UserOutDtoListResult>('/api/User/GetAll', {
    method: 'GET',
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/GetByEmail/${param0} */
export async function getUserGetByEmailEmail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserGetByEmailEmailParams,
  options?: { [key: string]: any }
) {
  const { email: param0, ...queryParams } = params
  return request<API.UserOutDtoResult>(`/api/User/GetByEmail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/GetById/${param0} */
export async function getUserGetByIdId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserGetByIdIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.UserOutDtoResult>(`/api/User/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/GetByName/${param0} */
export async function getUserGetByNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserGetByNameNameParams,
  options?: { [key: string]: any }
) {
  const { name: param0, ...queryParams } = params
  return request<API.UserOutDtoListResult>(`/api/User/GetByName/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/GetByNameOrEmail/nameOrEmail */
export async function getUserGetByNameOrEmailNameOrEmail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserGetByNameOrEmailNameOrEmailParams,
  options?: { [key: string]: any }
) {
  return request<API.UserOutDtoResult>(
    '/api/User/GetByNameOrEmail/nameOrEmail',
    {
      method: 'GET',
      params: {
        ...params
      },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 PUT /api/User/Update/${param0} */
export async function putUserUpdateId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUserUpdateIdParams,
  body: API.UpdateUserParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.UserOutDtoResult>(`/api/User/Update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/VerifyEmail/${param0} */
export async function getUserVerifyEmailEmail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVerifyEmailEmailParams,
  options?: { [key: string]: any }
) {
  const { email: param0, ...queryParams } = params
  return request<API.BooleanResult>(`/api/User/VerifyEmail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/User/VerifyName/${param0} */
export async function getUserVerifyNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVerifyNameNameParams,
  options?: { [key: string]: any }
) {
  const { name: param0, ...queryParams } = params
  return request<API.BooleanResult>(`/api/User/VerifyName/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}
