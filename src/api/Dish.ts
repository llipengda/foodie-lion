/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Dish/Create */
export async function postDishCreate(
  body: API.DishDto,
  options?: { [key: string]: any }
) {
  return request<API.DishResult>('/api/Dish/Create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/Dish/DecreaseFavoriteCount/${param0} */
export async function postDishDecreaseFavoriteCountId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postDishDecreaseFavoriteCountIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.Int32Result>(`/api/Dish/DecreaseFavoriteCount/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 DELETE /api/Dish/Delete/${param0} */
export async function deleteDishDeleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDishDeleteIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.DishResult>(`/api/Dish/Delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Dish/GetAll */
export async function getDishGetAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDishGetAllParams,
  options?: { [key: string]: any }
) {
  return request<API.DishListResult>('/api/Dish/GetAll', {
    method: 'GET',
    params: {
      // order has a default value: favoriteCount
      order: 'favoriteCount',
      // desending has a default value: true
      desending: 'true',
      ...params
    },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Dish/GetByCanteen/${param0} */
export async function getDishGetByCanteenCanteen(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDishGetByCanteenCanteenParams,
  options?: { [key: string]: any }
) {
  const { canteen: param0, ...queryParams } = params
  return request<API.DishListResult>(`/api/Dish/GetByCanteen/${param0}`, {
    method: 'GET',
    params: {
      // order has a default value: favoriteCount
      order: 'favoriteCount',
      // desending has a default value: true
      desending: 'true',
      ...queryParams
    },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Dish/GetByCanteenAndWindow/${param0}/${param1} */
export async function getDishGetByCanteenAndWindowCanteenWindow(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDishGetByCanteenAndWindowCanteenWindowParams,
  options?: { [key: string]: any }
) {
  const { canteen: param0, window: param1, ...queryParams } = params
  return request<API.DishListResult>(
    `/api/Dish/GetByCanteenAndWindow/${param0}/${param1}`,
    {
      method: 'GET',
      params: {
        // order has a default value: favoriteCount
        order: 'favoriteCount',
        // desending has a default value: true
        desending: 'true',
        ...queryParams
      },
      ...(options || {})
    }
  )
}

/** 此处后端没有提供注释 GET /api/Dish/GetById/${param0} */
export async function getDishGetByIdId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDishGetByIdIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.DishResult>(`/api/Dish/GetById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Dish/GetByName/${param0} */
export async function getDishGetByNameName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDishGetByNameNameParams,
  options?: { [key: string]: any }
) {
  const { name: param0, ...queryParams } = params
  return request<API.DishListResult>(`/api/Dish/GetByName/${param0}`, {
    method: 'GET',
    params: {
      // order has a default value: favoriteCount
      order: 'favoriteCount',
      // desending has a default value: true
      desending: 'true',
      ...queryParams
    },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/Dish/IncreaseFavoriteCount/${param0} */
export async function postDishIncreaseFavoriteCountId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postDishIncreaseFavoriteCountIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.Int32Result>(`/api/Dish/IncreaseFavoriteCount/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 PUT /api/Dish/Update/${param0} */
export async function putDishUpdateId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putDishUpdateIdParams,
  body: API.UpdateDishParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.DishResult>(`/api/Dish/Update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  })
}
