/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Notification/Create */
export async function postNotificationCreate(
  body: API.NotificationDto,
  options?: { [key: string]: any }
) {
  return request<API.NotificationResult>('/api/Notification/Create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 DELETE /api/Notification/Delete/${param0} */
export async function deleteNotificationDeleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteNotificationDeleteIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.NotificationResult>(`/api/Notification/Delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Notification/GetAll */
export async function getNotificationGetAll(options?: { [key: string]: any }) {
  return request<API.NotificationListResult>('/api/Notification/GetAll', {
    method: 'GET',
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Notification/GetById/${param0} */
export async function getNotificationGetByIdId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNotificationGetByIdIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.NotificationResult>(
    `/api/Notification/GetById/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 PUT /api/Notification/Update/${param0} */
export async function putNotificationUpdateId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putNotificationUpdateIdParams,
  body: API.UpdateNotificationParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.NotificationResult>(`/api/Notification/Update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  })
}
