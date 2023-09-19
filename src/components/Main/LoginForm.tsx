import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { LoginFieldType } from '../../types/FormField'

export default function LoginForm({
  onCancel,
  onSwitch
}: {
  onCancel: () => void
  onSwitch: () => void
}) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: {
    username: string
    password: string
    remember: boolean
  }) => {
    if (values.remember) {
      localStorage.setItem('username', btoa(values.username))
      localStorage.setItem('password', btoa(values.password))
    } else {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
    }
    setLoading(true)
    // TODO login
    setTimeout(() => {
      setLoading(false)
      onCancel()
    }, 1000)
  }

  return (
    <Form
      name='login'
      labelAlign='right'
      style={{ maxWidth: '80%', margin: '0 auto' }}
      autoComplete='off'
      onFinish={handleSubmit}
      initialValues={{
        username: atob(localStorage.getItem('username') ?? ''),
        password: atob(localStorage.getItem('password') ?? ''),
        remember: true
      }}
    >
      <Form.Item<LoginFieldType>
        label='用户名'
        name='username'
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder='用户名 / 邮箱' autoComplete='off' />
      </Form.Item>
      <Form.Item<LoginFieldType>
        label='密码'
        name='password'
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder='密码' autoComplete='off' />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a style={{ float: 'right' }} onClick={onSwitch}>
          忘记密码
        </a>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          style={{ width: '100%' }}
          loading={loading}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
