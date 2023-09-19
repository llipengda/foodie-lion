import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import { RegisterFieldType } from '../../types/FormField'
import { useEffect, useState } from 'react'

export default function RegisterForm({ onCancel }: { onCancel: () => void }) {
  const [loading, setLoading] = useState(false)
  const [sendCodeDiasbled, setSendCodeDisabled] = useState(false)

  const [form] = Form.useForm<RegisterFieldType>()
  const email = Form.useWatch('email', form)

  const handleSubmit = (values: {
    username: string
    password: string
    email: string
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
    // TODO register
    setTimeout(() => {
      setLoading(false)
      onCancel()
    }, 1000)
  }

  const handleSendCode = () => {
    setSendCodeDisabled(true)
    // TODO send code
    setTimeout(() => {
      setSendCodeDisabled(false)
    }, 1000 * 30)
  }

  useEffect(() => {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5\\.]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
    setSendCodeDisabled(!reg.test(email))
  }, [email])

  return (
    <Form
      name='login'
      labelAlign='right'
      style={{ maxWidth: '80%', margin: '0 auto' }}
      autoComplete='off'
      onFinish={handleSubmit}
      form={form}
      initialValues={{
        remember: true
      }}
    >
      <Form.Item<RegisterFieldType>
        label='用户名'
        name='username'
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder='用户名' autoComplete='off' />
      </Form.Item>
      <Form.Item<RegisterFieldType>
        label='邮箱'
        name='email'
        rules={[
          { required: true, message: '请输入邮箱' },
          {
            type: 'email',
            message: '邮箱地址非法'
          }
        ]}
      >
        <Input placeholder='邮箱' autoComplete='off' />
      </Form.Item>
      <Form.Item<RegisterFieldType>
        label='验证码'
        name='code'
        dependencies={['email']}
        rules={[{ required: true, message: '请输入验证码' }]}
      >
        <Row gutter={8}>
          <Col span={16}>
            <Input placeholder='验证码' autoComplete='off' />
          </Col>
          <Col span={8}>
            <Button
              type='primary'
              onClick={handleSendCode}
              disabled={sendCodeDiasbled}
            >
              发送验证码
            </Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item<RegisterFieldType>
        label='密码'
        name='password'
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码长度至少为6位' }
        ]}
      >
        <Input.Password placeholder='确认密码' autoComplete='off' />
      </Form.Item>
      <Form.Item<RegisterFieldType>
        label='确认密码'
        name='confirmPassword'
        dependencies={['password']}
        rules={[
          { required: true, message: '请确认密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('两次输入的密码不一致'))
            }
          })
        ]}
      >
        <Input.Password placeholder='密码' autoComplete='off' />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          style={{ width: '100%' }}
          loading={loading}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}
