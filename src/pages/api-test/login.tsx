import React, { FC, useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import RouteButton from '../../components/api-test/RouteButton'
import { User, RequestLogin } from '../../types/api/api'
import styled from 'styled-components'
import ApiClient from '../../network/ApiClient'

const LoginPage: FC = () => {
  const [loginUser, setLoginUser] = useState(initialUser)
  useEffect(() => {
    let unmounted = false
    const loginFunc = async () => {
      const res = await ApiClient.user.login(requestLoginParameter)
      if (!unmounted) {
        setLoginUser(res.data)
      }
    }

    loginFunc()
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <div>
      <Layout>
        <H1>login</H1>
        <RouteButton />
        <p>{loginUser && loginUser.id}</p>
      </Layout>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default LoginPage

export const initialUser: User = {
  id: 0,
  name: '',
  email: '',
  user_type: 0,
  main_user_id: 0,
}

export const requestLoginParameter: RequestLogin = {
  email: 'test@gmail.com',
  password: 'password123',
}
