import React, { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import { useThemeMode } from 'antd-style'
import { useAppDispatch, useAppSelector } from './redux/hooks.ts'
import { setDarkMode } from './redux/slice/themeSlice.ts'
import zhCN from 'antd/locale/zh_CN'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import generateTheme from './utils/generateTheme.ts'
import './App.css'

export default function App() {
  const { browserPrefers } = useThemeMode()

  const isDark = useAppSelector(state => state.theme.darkMode)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setDarkMode(browserPrefers === 'dark'))
  },[browserPrefers, dispatch])

  return (
    <ConfigProvider locale={zhCN} theme={generateTheme(isDark)}>
      <Header />
      <Main />
      <Footer />
    </ConfigProvider>
  )
}
