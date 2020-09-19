import React, { FC, useState } from 'react'
import AuthForm from '@/components/organisms/common/AuthForm'
import LinkButtonField from '@/components/molcules/LinkButtonField'
import LoginForm from '@/components/molcules/LoginFrom'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { LoginValidError } from '@/types/errors'
import { RequestLogin } from '@/types/api/'
import {
  RequiredValidation,
  EmailValidation,
  MaxLengthValidation,
  AlphanumericValidation,
  ValueLengthValidation,
} from '@/utils/validations'

const PartnerLoginTemplate: FC = () => {
  const { partnerLogin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState<LoginValidError>({
    email: '',
    password: '',
  })

  /**
   * メールアドレス入力処理
   * @param event
   */
  const handleChangeEmail: EventType['onChange'] = (event) => {
    setEmail(event.target.value)
  }

  /**
   * パスワード入力処理
   * @param event
   */
  const handleChangePassword: EventType['onChange'] = (event) => {
    setPassword(event.target.value)
  }

  /**
   * ログイン処理
   */
  const handleSubmitLogin = async () => {
    if (isValid(email, password, setLoginError)) {
      const requestParam: RequestLogin = {
        email: email,
        password: password,
      }
      await partnerLogin(requestParam)
    }
  }
  return (
    <AuthForm>
      <LinkButtonField status={LinkStatus.SIGNUP} />
      <LoginForm
        status={LinkStatus.PARTNER_LOGIN}
        email={email}
        password={password}
        loginError={loginError}
        changeEmail={handleChangeEmail}
        changePassword={handleChangePassword}
        submit={handleSubmitLogin}
      />
      <LinkButtonField status={LinkStatus.LOGIN} />
    </AuthForm>
  )
}

export default PartnerLoginTemplate

/**
 * ログインバリデーションチェック
 * @param email
 * @param password
 * @param setLoginError
 */
const isValid = (
  email: string,
  password: string,
  setLoginError: React.Dispatch<React.SetStateAction<LoginValidError>>
): boolean => {
  // バリデーションエラーを初期化
  setLoginError({ email: '', password: '' })
  // バリデーションチェック
  let emailErrMsg = RequiredValidation(email)
  let passErrMsg = RequiredValidation(password)
  if (emailErrMsg === '') emailErrMsg = EmailValidation(email)
  if (emailErrMsg === '') emailErrMsg = MaxLengthValidation(email, 255)
  if (passErrMsg === '') passErrMsg = AlphanumericValidation(password)
  if (passErrMsg === '') passErrMsg = ValueLengthValidation(password, 8, 20)
  if (emailErrMsg !== '' || passErrMsg !== '') {
    setLoginError({ email: emailErrMsg, password: passErrMsg })
    return false
  }
  return true
}
