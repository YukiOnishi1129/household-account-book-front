import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { LinkStatus, BeforeLoginPage } from '@/utils/consts'
import { LoginValidError } from '@/types/errors'
import { EventType } from '@/types/events'

export type Props = {
  status: string
  email: string
  password: string
  loginError: LoginValidError
  changeEmail: EventType['onChange']
  changePassword: EventType['onChange']
  submit: VoidFunction
}

const LoginForm: FC<Props> = ({
  status,
  email,
  password,
  loginError,
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
        errMsg={loginError.email}
      />
      <InputForm
        type="password"
        comment="パスワード"
        changeValue={(event) => {
          changePassword(event)
        }}
        value={password}
        errMsg={loginError.password}
      />
      <SubmitButton
        status={status}
        submit={() => {
          submit()
        }}
      />
      <NavLink status={status}>
        <Link href={BeforeLoginPage.REMIND_PASS_MAIL}>
          パスワードをお忘れの方はこちら
        </Link>
      </NavLink>
    </Form>
  )
}

export default LoginForm

export type StyleProps = {
  status: string
}

const Form = styled.form`
  padding: 30px 60px;
  border-bottom: 1px solid #dddbdb;
  input[type='password'] {
    margin-top: 20px;
  }
`

const NavLink = styled.div`
  padding: 20px 0;
  a {
    font-size: 0.75rem;
    ${({ status }: StyleProps) => getNavBgColor(status)};
    &:hover {
      opacity: 0.7;
    }
  }
`

const getNavBgColor = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return `color: #06BADB;`
    case LinkStatus.PARTNER_LOGIN:
      return `color: #21CE01;`
    default:
      return ''
  }
}
