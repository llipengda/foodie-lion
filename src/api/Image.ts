/* eslint-disable */
import request from './request'

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
