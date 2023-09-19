import React, { Suspense } from 'react'
import { Button, Col, Layout, Row, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Loading from './Loading'
import { useRoutes } from 'react-router-dom'
import routes from '../routes'
import Login from './Main/Login'
import { useAppDispatch } from '../redux/hooks'
import { setOpenLogin } from '../redux/slice/loginSlice'

const { Text } = Typography

export default function Main() {
  const dispatch = useAppDispatch()

  return (
    <Layout>
      <Content
        style={{ padding: '20px 50px', minHeight: 'calc(100vh - 150px)' }}
      >
        <Row justify='center'>
          <Col md={18} xs={24}>
            <Text strong style={{ fontSize: '1.5rem' }}>
              Main
            </Text>
            <Login />
            <Button type='primary' onClick={() => dispatch(setOpenLogin(true))}>
              登录
            </Button>
            <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
