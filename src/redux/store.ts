import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import themeSlice from './slice/themeSlice'
import loginSlice from './slice/loginSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
    login: loginSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
