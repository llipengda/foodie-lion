import React, { Suspense } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Loading from './Loading'
import { useRoutes } from 'react-router-dom'
import routes from '../routes'

const { Text } = Typography

export default function Main() {
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
            <Suspense fallback={<Loading />}>
              {useRoutes(routes)}
            </Suspense>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
