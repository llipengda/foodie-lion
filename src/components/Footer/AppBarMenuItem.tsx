import React from 'react'
import Icon, { IconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { NavLink, useLocation } from 'react-router-dom'
import { Col, Row, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks'

interface AppBarMenuItemProps {
  label: string
  route: string
  svg: IconComponentProps['component']
}

const { Text } = Typography

export default function AppBarMenuItem({
  label,
  route,
  svg
}: AppBarMenuItemProps) {
  const location = useLocation()

  const isActive = location.pathname.split('/')[1] === route

  const isDark = useAppSelector(state => state.theme.darkMode)

  return (
    <NavLink to={`/${route}`}>
      <Col>
        <Row>
          <Icon
            component={svg}
            style={{
              fontSize: '34px',
              filter: isActive
                ? 'invert(87%) sepia(9%) saturate(770%) hue-rotate(76deg) brightness(87%) contrast(90%)'
                : isDark
                ? 'invert(100%) sepia(0%) saturate(3358%) hue-rotate(114deg) brightness(93%) contrast(85%)'
                : 'none',
              transition: 'all 0.6s ease-out'
            }}
          />
        </Row>
        <Row justify='center'>
          <Text style={{ fontSize: '16px', margin: '0 0 5px 0', color: 'inherit' }}>
            {label}
          </Text>
        </Row>
      </Col>
    </NavLink>
  )
}
