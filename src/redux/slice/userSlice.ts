import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import UserInfo from '../../types/UserInfo'
import LoginResult from '../../types/LoginResult'

const initToken: string = ''

const initUserInfo: UserInfo = {
  id: '',
  name: '',
  email: '',
  signature: '',
  avatar: '',
  role: 1
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: initToken,
    needLogin: true,
    userInfo: initUserInfo
  },
  reducers: {
    login: (state, action: PayloadAction<LoginResult>) => {
      state.token = action.payload.token
      state.userInfo = action.payload.userInfo
      state.needLogin = false
      localStorage.setItem('token', state.token)
      localStorage.setItem('userId', state.userInfo.id)
    },
    logout: state => {
      state.token = initToken
      state.userInfo = initUserInfo
      state.needLogin = true
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  }
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions
