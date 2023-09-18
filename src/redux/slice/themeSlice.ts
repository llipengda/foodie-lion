import { createSlice } from '@reduxjs/toolkit'

const initDarkMode: boolean = false

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: initDarkMode
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
    } 
  }
})

export default themeSlice.reducer
export const { toggleDarkMode } = themeSlice.actions
