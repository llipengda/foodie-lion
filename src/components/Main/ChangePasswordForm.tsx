import { useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row, message } from 'antd'
import { ChangePasswordFieldType } from '../../types/FormField'
import API from '../../api'

const checkCode = async (email: string, code: string) => {
  const data = await API.EmailCode.postEmailCodeVerifyEmailCode({ code, email })
  return data.code === 200 && data.data
}

export default function ChangePasswordForm() {
  const [loading, setLoading] = useState(false)
  const [sendCodeDiasbled, setSendCodeDisabled] = useState(false)

  const [form] = Form.useForm<ChangePasswordFieldType>()
  const email = Form.useWatch('email', form)

  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    const reg =
      /^[A-Za-z0-9\u4e00-\u9fa5\\.]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
    setSendCodeDisabled(!reg.test(email))
  }, [email])

  const handleSubmit = async (values: {
    email: string
    code: string
    newPassword: string
  }) => {
    setLoading(true)
    try {
      const user = await API.User.getUserGetByEmailEmail({
        email: values.email
      })
      if (user.code === 200) {
        const userId = user.data?.id
        await API.User.putUserUpdateId(
          { id: userId as string },
          { password: values.newPassword }
        )
        localStorage.removeItem('password')
        messageApi.success('密码修改成功')
      }
    } catch (e: any) {
      if (e.data.error) {
        messageApi.error(e.data.error)
      } else {
        messageApi.error('发生了未知错误')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSendCode = async () => {
    setSendCodeDisabled(true)
    await API.EmailCode.postEmailCodeSendEmail({ email })
    setSendCodeDisabled(false)
    messageApi.success('验证码发送成功')
  }

  return (
    <>
      {contextHolder}
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
          rules={[
            { required: true, message: '请输入验证码' },
            ({ getFieldValue }) => ({
              async validator(_, value) {
                if (
                  !value ||
                  (await checkCode(getFieldValue('email'), value))
                ) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('验证码错误'))
              }
            })
          ]}
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
          rules={[
            { required: true, message: '请输入新密码' },
            { min: 6, message: '密码长度至少为6位' }
          ]}
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
    </>
  )
}
