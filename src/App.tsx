import React from 'react'
import { ConfigProvider, ThemeConfig, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useAppSelector } from './redux/hooks.ts'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'

function generateTheme(isDark: boolean): ThemeConfig {
  return {
    token: {
      colorPrimary: '#a0c8a5'
    },
    components: {
      Layout: {
        headerBg: isDark ? '#001529' : '#f9f9f9',
        footerBg: isDark ? '#001529' : '#f9f9f9',
        bodyBg: isDark ? '#121212' : '#f5f5f5'
      }
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
  }
}

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
