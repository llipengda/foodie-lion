import React from 'react'
import { Menu } from 'antd'
import appBarPages from '../../common/appBarPages'
import { Footer } from 'antd/es/layout/layout'
import { useLocation } from 'react-router-dom'

export default function AppBar() {
  const location = useLocation()

  return (
    <Footer
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        bottom: 0,
        zIndex: 1
      }}
    >
      <Menu
        mode='horizontal'
        style={{
          textAlign: 'center',
          backgroundColor: 'inherit',
          width: '100%',
          justifyContent: 'center'
        }}
        items={appBarPages}
        selectedKeys={[location.pathname.split('/')[1]]}
      />
    </Footer>
  )
}
