import React, { FC, useState } from 'react'
import AuthForm from '@/components/organisms/common/AuthForm'
import FormTitle from '@/components/atoms/FormTitle'
import LinkButtonField from '@/components/molcules/LinkButtonField'
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
    if (false) {
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
