import { useState } from 'react'
import { Col, Menu, Modal } from 'antd'
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { setOpenLogin } from '../../redux/slice/loginSlice'
import loginPages from '../../common/menu_pages/loginPages'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import ChangePasswordForm from './ChangePasswordForm'

export default function Login() {
  const openLogin = useAppSelector(state => state.login.openLogin)

  const dispatch = useDispatch()

  const [selected, setSelected] = useState('login')

  const handleCancel = () => {
    dispatch(setOpenLogin(false))
  }

  const handleSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelected(selectedKeys[0])
  }

  const switchToChangePassword = () => {
    setSelected('changePassword')
  }

  return (
    <Modal
      title='登录以使用更多功能'
      open={openLogin}
      onCancel={handleCancel}
      centered
      footer={null}
    >
      <Col span={24} offset={7}>
        <Menu
          mode='horizontal'
          items={loginPages}
          onSelect={handleSelect}
          selectedKeys={[selected]}
          style={{
            width: '220px',
            margin: '10px 0 30px 0',
            alignSelf: 'center'
          }}
        />
      </Col>
      {selected === 'register' ? (
        <RegisterForm onCancel={handleCancel} />
      ) : selected === 'changePassword' ? (
        <ChangePasswordForm onCancel={handleCancel} />
      ) : (
        <LoginForm onCancel={handleCancel} onSwitch={switchToChangePassword} />
      )}
    </Modal>
  )
}
