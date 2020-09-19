import React, { FC, useState } from 'react'
import styled from 'styled-components'
import AuthForm from '@/components/organisms/common/AuthForm'
import FormTitle from '@/components/atoms/FormTitle'
import RemindForm from '@/components/molcules/RemindForm'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { RemindValidError } from '@/types/errors'
import { RequestRemindMail } from '@/types/api/'
import {
  RequiredValidation,
  EmailValidation,
  MaxLengthValidation,
  AlphanumericValidation,
  ValueLengthValidation,
  MatchPasswordValidation,
} from '@/utils/validations'

const RemindPassMailTemplate: FC = () => {
  const { remindMail } = useAuth()
  const [email, setEmail] = useState('')
  const [remindEmailError, setRemindEmailError] = useState<RemindValidError>({
    value: '',
  })

  /**
   * メールアドレス入力処理
   * @param event
   */
  const handleChangeEmail: EventType['onChange'] = (event) => {
    setEmail(event.target.value)
  }

  /**
   * パスワードリマインダーEメール送信処理
   */
  const handleSubmitRemindMail = async () => {
    return
    const requestParam: RequestRemindMail = {
      email: email,
    }
    await remindMail(requestParam)
  }
  return (
    <AuthForm>
      <FormTitle title="パスワード再設定" />
      <Describe>
        ご入力されたメールアドレス宛に
        <br />
        パスワード再設定用のリンクを送付いたします。
      </Describe>
      <RemindForm
        status={LinkStatus.SUBMIT}
        value={email}
        remindError={remindEmailError}
        changeValue={handleChangeEmail}
        submit={handleSubmitRemindMail}
      />
    </AuthForm>
  )
}

export default RemindPassMailTemplate

const Describe = styled.p`
  padding: 30px 60px;
  line-height: 32px;
`
