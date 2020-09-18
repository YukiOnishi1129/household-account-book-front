import React, { FC, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ProtectRoute } from '@/contexts/auth'
import LoginTemplate from '@/components//templates/LoginTemplate'
import Layout from '@/components/Layout'
import { RequestLogin } from '@/types/api/'
import useAuth from '@/contexts/auth'
import { EventType } from '@/types/events'

const Login: FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleChangeEmail: EventType['onChange'] = (event) => {
    setEmail(event.target.value)
  }
  const handleChangPassword: EventType['onChange'] = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmitLogin: EventType['onClickButton'] = async (event) => {
    event.preventDefault()
    const requestParam: RequestLogin = {
      email: email,
      password: password,
    }
    await login(requestParam)
  }

  return <LoginTemplate />
  // <div>
  //   <Layout>
  //     <H1>ログイン</H1>
  //     <form>
  //       <input
  //         type="email"
  //         placeholder="メールアドレスを入力してください"
  //         value={email}
  //         onChange={handleChangeEmail}
  //       />
  //       <input
  //         type="password"
  //         placeholder="passwordを入力してください"
  //         autoComplete="off"
  //         value={password}
  //         onChange={handleChangPassword}
  //       />
  //       <button onClick={handleSubmitLogin}>ログイン</button>
  //     </form>
  //     <Button onClick={() => router.push('/')}>home</Button>
  //   </Layout>
  // </div>
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

export default ProtectRoute(Login)
