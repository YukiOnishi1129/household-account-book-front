import React, { FC } from 'react'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'

export type Props = {
  email: string
  password: string
  changeEmail: EventType['onChange']
  changePassword: EventType['onChange']
  submit: VoidFunction
}

const LoginForm: FC<Props> = ({
  email,
  password,
  changeEmail,
  changePassword,
  submit,
}) => {
  return (
    <Form>
      <InputForm
        type="email"
        comment="メールアドレス"
        changeValue={(event) => {
          return changeEmail(event)
        }}
        value={email}
      />
      <InputForm
        type="password"
        comment="パスワード"
        changeValue={(event) => {
          changePassword(event)
        }}
        value={password}
      />
      <SubmitButton
        status={LinkStatus.LOGIN}
        submit={() => {
          submit()
        }}
      />
    </Form>
  )
}

export default LoginForm

const Form = styled.div`
  padding: 30px 60px;
  border-bottom: 1px solid #dddbdb;
  input[type='email'] {
    margin-bottom: 30px;
  }
`
