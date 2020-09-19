import React, { FC, useState } from 'react'
import AuthForm from '@/components/organisms/common/AuthForm'
import FormTitle from '@/components/atoms/FormTitle'
import SignupForm from '@/components/molcules/SignupForm'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { SinupValidError } from '@/types/errors'
import { RequestRegister } from '@/types/api/'
import {
  RequiredValidation,
  EmailValidation,
  MaxLengthValidation,
  AlphanumericValidation,
  ValueLengthValidation,
  MatchPasswordValidation,
} from '@/utils/validations'

const SignupTemplate: FC = () => {
  const { register } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signupError, setSignupError] = useState<SinupValidError>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  /**
   * 氏名入力処理
   * @param event
   */
  const handleChangeName: EventType['onChange'] = (event) => {
    setName(event.target.value)
  }
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
   * パスワード(再入力)入力処理
   * @param event
   */
  const handleChangeConfirmPassword: EventType['onChange'] = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmitSignup = async () => {
    if (isValid(name, email, password, confirmPassword, setSignupError)) {
      const requestParam: RequestRegister = {
        name: name,
        email: email,
        password: password,
      }
      await register(requestParam)
    }
  }
  return (
    <AuthForm>
      <FormTitle title="新規会員登録" />
      <SignupForm
        status={LinkStatus.SIGNUP}
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        signupError={signupError}
        changeName={handleChangeName}
        changeEmail={handleChangeEmail}
        changePassword={handleChangePassword}
        changeConfirmPassword={handleChangeConfirmPassword}
        submit={handleSubmitSignup}
      />
    </AuthForm>
  )
}

export default SignupTemplate

/**
 * 会員登録バリデーション
 * @param name
 * @param email
 * @param password
 * @param confirmPassword
 * @param setSignupError
 */
const isValid = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  setSignupError: React.Dispatch<React.SetStateAction<SinupValidError>>
): boolean => {
  // バリデーションエラーを初期化
  setSignupError({ name: '', email: '', password: '', confirmPassword: '' })
  // バリデーションチェック
  let nameErrMsg = RequiredValidation(name)
  let emailErrMsg = RequiredValidation(email)
  let passErrMsg = RequiredValidation(password)
  let confirmPassErrMsg = RequiredValidation(confirmPassword)
  if (nameErrMsg === '') nameErrMsg = MaxLengthValidation(name, 15)
  if (emailErrMsg === '') emailErrMsg = EmailValidation(email)
  if (emailErrMsg === '') emailErrMsg = MaxLengthValidation(email, 255)
  if (passErrMsg === '') passErrMsg = AlphanumericValidation(password)
  if (passErrMsg === '') passErrMsg = ValueLengthValidation(password, 8, 20)
  if (passErrMsg === '')
    passErrMsg = MatchPasswordValidation(password, confirmPassword)
  if (
    nameErrMsg !== '' ||
    emailErrMsg !== '' ||
    passErrMsg !== '' ||
    confirmPassErrMsg !== ''
  ) {
    setSignupError({
      name: nameErrMsg,
      email: emailErrMsg,
      password: passErrMsg,
      confirmPassword: confirmPassErrMsg,
    })
    return false
  }
  return true
}
