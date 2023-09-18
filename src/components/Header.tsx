import React from 'react'
import { Header as AntdHeader } from 'antd/es/layout/layout'
import {
  Avatar,
  Button,
  Col,
  Menu,
  Row,
  Space,
  Tooltip,
  Typography
} from 'antd'
import pages from '../common/pages'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleDarkMode } from '../redux/slice/themeSlice'
import { Link, useLocation } from 'react-router-dom'
import { useResponsive } from 'antd-style'
import { GithubOutlined } from '@ant-design/icons'
import { githubUrl } from '../common/constants'

const { Title } = Typography

export default function Header() {
  const isDark = useAppSelector(state => state.theme.darkMode)

  const dispatch = useAppDispatch()

  const location = useLocation()

  const responsive = useResponsive()

  const [themeIcon, setThemeIcon] = React.useState('🌒')

  const handleChangeTheme = () => {
    dispatch(toggleDarkMode())
    setThemeIcon(isDark ? '🌒' : '☀️')
  }

  return (
    <AntdHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '0 10px'
      }}
    >
      <Row
        gutter={16}
        style={{ width: '100%' }}
        align='middle'
        justify='center'
      >
        <Col md={1} sm={4} xs={4}>
          <Link to='/'>
            <Avatar
              size={{ xs: 40, sm: 40, md: 40, lg: 48, xl: 48, xxl: 48 }}
              shape='square'
              src='/favicon.ico'
            />
          </Link>
        </Col>
        <Col md={9} sm={11} xs={15}>
          <Link to='/'>
            <Title
              level={4}
              style={{
                padding: '0',
                color: '#7cb305',
                margin: '15px',
                textAlign: responsive.xs ? 'center' : 'start'
              }}
            >
              吃货小花狮
            </Title>
          </Link>
        </Col>
        <Col md={6} xs={3}>
          <Menu
            mode='horizontal'
            style={{ backgroundColor: 'inherit' }}
            items={pages}
            selectedKeys={[location.pathname.split('/')[1]]}
          />
        </Col>
        <Col md={2} xs={0}>
          <Space>
            <Tooltip
              placement='bottom'
              title={`切换至${isDark ? '浅色' : '深色'}主题`}
            >
              <Button
                type='dashed'
                onClick={handleChangeTheme}
                style={{ padding: '4px 8px' }}
              >
                {themeIcon}
              </Button>
            </Tooltip>
            <Tooltip placement='bottom' title='GitHub仓库'>
              <Button
                type='dashed'
                href={githubUrl}
                style={{ padding: '4px 10px' }}
              >
                <GithubOutlined />
              </Button>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </AntdHeader>
  )
}
