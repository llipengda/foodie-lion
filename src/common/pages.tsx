import React from 'react'
import { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

const pages: MenuProps['items'] = [
  { label: (<NavLink to='/home'>首页</NavLink>), key: 'home' },
  { label: (<NavLink to='/dishes'>菜品</NavLink>), key: 'dishes' },
  { label: (<NavLink to='/community'>社区</NavLink>), key: 'community' },
  { label: (<NavLink to='/record'>打卡</NavLink>), key: 'record' },
  { label: (<NavLink to='/me'>个人</NavLink>), key: 'me' }
]

export default pages
