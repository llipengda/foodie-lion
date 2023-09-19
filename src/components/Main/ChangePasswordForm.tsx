import { useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { ChangePasswordFieldType } from '../../types/FormField'

export default function ChangePasswordForm({
  onCancel
}: {
  onCancel: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [sendCodeDiasbled, setSendCodeDisabled] = useState(false)

  const [form] = Form.useForm<ChangePasswordFieldType>()
  const email = Form.useWatch('email', form)

  useEffect(() => {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5\\.]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
    setSendCodeDisabled(!reg.test(email))
  }, [email])

  const handleSubmit = (values: {
    email: string
    code: string
    newPassword: string
  }) => {
    setLoading(true)
    // TODO login
    console.log(values)
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

  return (
    <Form
      name='changePassword'
      labelAlign='right'
      style={{ maxWidth: '80%', margin: '0 auto' }}
      autoComplete='off'
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item<ChangePasswordFieldType>
        label='邮箱'
        name='email'
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱地址非法' }
        ]}
      >
        <Input placeholder='邮箱' autoComplete='off' />
      </Form.Item>
      <Form.Item<ChangePasswordFieldType>
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
      <Form.Item<ChangePasswordFieldType>
        label='新密码'
        name='newPassword'
        rules={[{ required: true, message: '请输入新密码' }]}
      >
        <Input.Password placeholder='密码' autoComplete='off' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          style={{ width: '100%' }}
          loading={loading}
        >
          重置密码
        </Button>
      </Form.Item>
    </Form>
  )
}
