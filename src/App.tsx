import React, { useEffect, useRef } from 'react'
import { ConfigProvider } from 'antd'
import { useThemeMode } from 'antd-style'
import { useAppDispatch, useAppSelector } from './redux/hooks.ts'
import { setDarkMode } from './redux/slice/themeSlice.ts'
import zhCN from 'antd/locale/zh_CN'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import generateTheme from './utils/generateTheme.ts'
import { login } from './redux/slice/userSlice.ts'
import API from './api'
import './App.css'
import UserInfo from './types/UserInfo.ts'
import { setOpenLogin } from './redux/slice/loginSlice.ts'

export default function App() {
  const { browserPrefers } = useThemeMode()

  const dispatch = useAppDispatch()

  const isDark = useAppSelector(state => state.theme.darkMode)
  const needLogin = useAppSelector(state => state.user.needLogin)

  const isFirst = useRef(true)

  useEffect(() => {
    dispatch(setDarkMode(browserPrefers === 'dark'))
  }, [browserPrefers, dispatch])

  useEffect(() => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('userId') &&
      needLogin
    ) {
      API.User.getUserGetByIdId({
        id: localStorage.getItem('userId') as string
      }).then(data => {
        if (data.code === 200) {
          dispatch(
            login({
              token: localStorage.getItem('token') as string,
              userInfo: {
                ...(data.data as UserInfo)
              }
            })
          )
        }
      })
    }
  }, [dispatch, needLogin])

  useEffect(() => {
    if (!localStorage.getItem('token') && needLogin && isFirst.current) {
      dispatch(setOpenLogin(true))
      isFirst.current = false
    }
  },[dispatch, needLogin])

  return (
    <ConfigProvider locale={zhCN} theme={generateTheme(isDark)}>
      <Header />
      <Main />
      <Footer />
    </ConfigProvider>
  )
}
