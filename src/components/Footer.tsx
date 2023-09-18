import React from 'react'
import { Footer as AntdFooter } from 'antd/es/layout/layout'
import { useResponsive } from 'antd-style'
import AppBar from './Footer/AppBar'
import { Link } from 'react-router-dom'
import { author, authorUrl } from '../common/constants'

export default function Footer() {
  const responsive = useResponsive()

  return (
    <>
      {responsive.md ? (
        <AntdFooter style={{ textAlign: 'center' }}>
          吃货小花狮 &copy; {new Date().getFullYear()} <Link to={authorUrl}>{author}</Link>
        </AntdFooter>
      ) : (
        <AppBar />
      )}
    </>
  )
}
