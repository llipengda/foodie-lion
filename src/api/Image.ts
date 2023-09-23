/* eslint-disable */
import request from './request'

/** 此处后端没有提供注释 POST /api/Image/AddHomeImage */
export async function postImageAddHomeImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postImageAddHomeImageParams,
  options?: { [key: string]: any }
) {
  return request<API.HomeImageResult>('/api/Image/AddHomeImage', {
    method: 'POST',
    params: {
      ...params
    },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 DELETE /api/Image/DeleteHomeImage/${param0} */
export async function deleteImageDeleteHomeImageId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteImageDeleteHomeImageIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params
  return request<API.HomeImageResult>(`/api/Image/DeleteHomeImage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  })
}

/** 此处后端没有提供注释 GET /api/Image/GetHomeImages */
export async function getImageGetHomeImages(options?: { [key: string]: any }) {
  return request<API.HomeImageListResult>('/api/Image/GetHomeImages', {
    method: 'GET',
    ...(options || {})
  })
}

/** 此处后端没有提供注释 POST /api/Image/Upload */
export async function postImageUpload(
  body: {},
  image?: File,
  options?: { [key: string]: any }
) {
  const formData = new FormData()

  if (image) {
    formData.append('image', image)
  }

  Object.keys(body).forEach(ele => {
    const item = (body as any)[ele]

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach(f => formData.append(ele, f || ''))
        } else {
          formData.append(ele, JSON.stringify(item))
        }
      } else {
        formData.append(ele, item)
      }
    }
  })

  return request<API.StringResult>('/api/Image/Upload', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {})
  })
}
