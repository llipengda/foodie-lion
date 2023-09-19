import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import UserInfo from '../../types/UserInfo'
import LoginResult from '../../types/LoginResult'

const initToken: string = ''

const initUserInfo: UserInfo = {
  id: '',
  name: '',
  signature: '',
  avatar: ''
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
    },
    logout: state => {
      state.token = initToken
      state.userInfo = initUserInfo
      state.needLogin = true
    }
  }
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions
