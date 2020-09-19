import React, { FC } from 'react'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { SinupValidError } from '@/types/errors'
import { EventType } from '@/types/events'

export type Props = {
  status: string
  name: string
  email: string
  password: string
  confirmPassword: string
  signupError: SinupValidError
  changeName: EventType['onChange']
  changeEmail: EventType['onChange']
  changePassword: EventType['onChange']
  changeConfirmPassword: EventType['onChange']
  submit: VoidFunction
}

const SignupForm: FC<Props> = ({
  status,
  name,
  email,
  password,
  confirmPassword,
  signupError,
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submit,
}) => {
  return (
    <Form>
      <InputForm
        type="text"
        comment="お名前"
        changeValue={(event) => {
          return changeName(event)
        }}
        value={name}
        length={15}
        errMsg={signupError.name}
      />
      <InputForm
        type="email"
        comment="メールアドレス"
        changeValue={(event) => {
          return changeEmail(event)
        }}
        value={email}
        errMsg={signupError.email}
      />
      <InputForm
        type="password"
        comment="パスワード"
        changeValue={(event) => {
          changePassword(event)
        }}
        value={password}
        errMsg={signupError.password}
      />
      <InputForm
        type="password"
        comment="パスワード(再入力)"
        changeValue={(event) => {
          changeConfirmPassword(event)
        }}
        value={confirmPassword}
        errMsg={signupError.confirmPassword}
      />
      <SubmitButton
        status={status}
        submit={() => {
          submit()
        }}
      />
    </Form>
  )
}

export default SignupForm

const Form = styled.form`
  padding: 30px 60px 90px 60px;
  border-top: 1px solid #dddbdb;
  input[type='email'] {
    margin-top: 20px;
  }
  input[type='password'] {
    margin-top: 20px;
  }
`
