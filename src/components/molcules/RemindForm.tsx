import React, { FC } from 'react'
import { useRouter, NextRouter } from 'next/router'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { RemindValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import { BeforeLoginPage } from '@/utils/consts'

export type Props = {
  status: string
  value: string
  remindError: RemindValidError
  changeValue: EventType['onChange']
  submit: VoidFunction
}

const RemindForm: FC<Props> = ({
  status,
  value,
  remindError,
  changeValue,
  submit,
}) => {
  const router = useRouter()
  return (
    <Form>
      <InputForm
        type={getType(router)}
        comment={getPlaceholder(router)}
        changeValue={(event) => {
          return changeValue(event)
        }}
        value={value}
        errMsg={remindError.value}
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

export default RemindForm

/**
 * Input type判定処理
 * @param router
 */
const getType = (router: NextRouter): string => {
  switch (router.pathname) {
    case BeforeLoginPage.REMIND_PASS_MAIL:
      return 'email'
    default:
      return 'text'
  }
}

/**
 * placeholder判定処理
 * @param router
 */
const getPlaceholder = (router: NextRouter): string => {
  switch (router.pathname) {
    case BeforeLoginPage.REMIND_PASS_MAIL:
      return 'メールアドレス'
    case BeforeLoginPage.REMIND_PASS_KEY:
      return '認証キー'
    default:
      return '入力してください'
  }
}

const Form = styled.form`
  padding: 30px 60px 90px 60px;
  border-top: 1px solid #dddbdb;
  input[type='text'] {
    margin-top: 20px;
  }
  input[type='email'] {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`
