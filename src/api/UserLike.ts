/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/UserLike/Create/${param0}/${param1} */
export async function postUserLikeCreateUserNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postUserLikeCreateUserNameNameParams,
  options?: { [key: string]: any }
) {
  const { userName: param0, name: param1, ...queryParams } = params
  return request<API.UserLikeResult>(
    `/api/UserLike/Create/${param0}/${param1}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 DELETE /api/UserLike/Delete/${param0}/${param1} */
export async function deleteUserLikeDeleteUserNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserLikeDeleteUserNameNameParams,
  options?: { [key: string]: any }
) {
  const { userName: param0, name: param1, ...queryParams } = params
  return request<API.UserLikeResult>(
    `/api/UserLike/Delete/${param0}/${param1}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 GET /api/UserLike/Get/${param0}/${param1} */
export async function getUserLikeGetUserNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLikeGetUserNameNameParams,
  options?: { [key: string]: any }
) {
  const { userName: param0, name: param1, ...queryParams } = params
  return request<API.BooleanResult>(`/api/UserLike/Get/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}
