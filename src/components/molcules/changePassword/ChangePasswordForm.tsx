import React, { FC } from 'react'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { ChangePasswordValidError } from '@/types/errors'
import { EventType } from '@/types/events'

export type Props = {
  status: string
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
  changePasswordError: ChangePasswordValidError
  changeCurrentPassword: EventType['onChange']
  changeNewPassword: EventType['onChange']
  changeConfirmNewPassword: EventType['onChange']
  submit: VoidFunction
}

const ChangePassowordForm: FC<Props> = ({
  status,
  currentPassword,
  newPassword,
  confirmNewPassword,
  changePasswordError,
  changeCurrentPassword,
  changeNewPassword,
  changeConfirmNewPassword,
  submit,
}) => {
  return (
    <Form>
      <InputForm
        type="password"
        comment="現在のパスワード"
        changeValue={(event) => {
          return changeCurrentPassword(event)
        }}
        value={currentPassword}
        errMsg={changePasswordError.currentPassword}
      />
      <InputForm
        type="password"
        comment="新しいパスワード"
        changeValue={(event) => {
          return changeNewPassword(event)
        }}
        value={newPassword}
        errMsg={changePasswordError.newPassword}
      />
      <InputForm
        type="password"
        comment="新しいパスワード(再入力)"
        changeValue={(event) => {
          changeConfirmNewPassword(event)
        }}
        value={confirmNewPassword}
        errMsg={changePasswordError.confirmNewPassword}
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

export default ChangePassowordForm

const Form = styled.form`
  padding: 30px 60px 90px 60px;
  input[type='password'] {
    margin-top: 20px;
  }
  button {
    margin-top: 40px;
  }
`
