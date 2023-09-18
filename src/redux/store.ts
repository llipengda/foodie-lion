import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import themeSlice from './slice/themeSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
