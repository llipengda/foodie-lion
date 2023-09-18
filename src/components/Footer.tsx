import React from 'react'
import { Footer as AntdFooter } from 'antd/es/layout/layout'
import { useResponsive } from 'antd-style'
import AppBar from './Footer/AppBar'

export default function Footer() {
  const responsive = useResponsive()

  return (
    <>
      {responsive.md ? (
        <AntdFooter style={{ textAlign: 'center' }}>
          &copy; 2023 PDLi
        </AntdFooter>
      ) : (
        <AppBar />
      )}
    </>
  )
}
