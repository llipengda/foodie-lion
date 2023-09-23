import { extend } from 'umi-request'
import { baseUrl } from '../common/constants'
import { useAppDispatch } from '../redux/hooks'
import { setOpenLogin } from '../redux/slice/loginSlice'

const request = extend({
  prefix: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        ...options.headers
      },
      ...options
    }
  }
})

request.interceptors.response.use(response => {
  if (response.status == 401) {
    useAppDispatch()(setOpenLogin(true))
  }
  return response
})

export default request
