import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useAppSelector } from './redux/hooks.ts'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import generateTheme from './utils/generateTheme.ts'

export default function App() {
  const isDark = useAppSelector(state => state.theme.darkMode)

  return (
    <ConfigProvider locale={zhCN} theme={generateTheme(isDark)}>
      <Header />
      <Main />
      <Footer />
    </ConfigProvider>
  )
}
