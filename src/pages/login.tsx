import React, { FC, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { beforeLoginRoute } from '../contexts/auth'
import { RequestLogin } from '../types/api/'
import useAuth from '../contexts/auth'

const Login: FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangPassword = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmitLogin = async () => {
    const requestParam: RequestLogin = {
      email: email,
      password: password,
    }
    await login(requestParam)
  }

  return (
    <div>
      <Head>
        <title>ログイン</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <H1>ログイン</H1>
        <div>
          <input
            type="email"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            placeholder="passwordを入力してください"
            value={password}
            onChange={handleChangPassword}
          />
          <button onClick={handleSubmitLogin}>ログイン</button>
        </div>
        <Button onClick={() => router.push('/')}>home</Button>
      </Layout>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`
const Button = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  font-size: 20px;
`

export default beforeLoginRoute(Login)
