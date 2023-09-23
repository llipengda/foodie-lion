import React, { useState } from 'react'
import API from '../../api'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { LoginFieldType } from '../../types/FormField'
import { useAppDispatch } from '../../redux/hooks'
import { login } from '../../redux/slice/userSlice'
import UserInfo from '../../types/UserInfo'

export default function LoginForm({
  onCancel,
  onSwitch
}: {
  onCancel: () => void
  onSwitch: () => void
}) {
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async (values: {
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
    try {
      const tokenData = await API.Login.postLogin({
        userNameOrEmail: values.username,
        password: values.password
      })
      setLoading(false)
      if (tokenData.code === 200) {
        const userData = await API.User.getUserGetByNameOrEmailNameOrEmail({
          nameOrEmail: values.username
        })
        dispatch(
          login({
            token: tokenData.data as string,
            userInfo: userData.data as UserInfo
          })
        )
        messageApi.success('登录成功')
        onCancel()
      }
    } catch (e: any) {
      setLoading(false)
      if (e.data.error) {
        messageApi.error(e.data.error)
      } else {
        messageApi.error('发生了未知错误')
      }
    }
  }

  return (
    <>
      {contextHolder}
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
          label='用户名/邮箱'
          name='username'
          rules={[{ required: true, message: '请输入用户名/邮箱' }]}
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
    </>
  )
}
