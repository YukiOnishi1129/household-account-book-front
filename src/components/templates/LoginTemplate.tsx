import React, { FC, useState } from 'react'
import AuthForm from '@/components/organisms/common/AuthForm'
import LinkButtonField from '@/components/molcules/LinkButtonField'
import LoginForm from '@/components/molcules/LoginFrom'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { RequestLogin } from '@/types/api/'

const LoginTemplate: FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeEmail: EventType['onChange'] = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword: EventType['onChange'] = (event) => {
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
    <AuthForm>
      <LinkButtonField status={LinkStatus.SIGNUP} />
      <LoginForm
        status={LinkStatus.LOGIN}
        email={email}
        password={password}
        changeEmail={handleChangeEmail}
        changePassword={handleChangePassword}
        submit={handleSubmitLogin}
      />
      <LinkButtonField status={LinkStatus.PARTNER_LOGIN} />
    </AuthForm>
  )
}

export default LoginTemplate
