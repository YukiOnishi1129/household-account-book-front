import React, { FC } from 'react'
import styled from 'styled-components'
import InputForm from '@/components/atoms/InputForm'
import SubmitButton from '@/components/atoms/SubmitButton'
import { PartnerValidError } from '@/types/errors'
import { EventType } from '@/types/events'

export type Props = {
  status: string
  name: string
  email: string
  partnerError: PartnerValidError
  changeName: EventType['onChange']
  changeEmail: EventType['onChange']
  submit: VoidFunction
}

const PartnerForm: FC<Props> = ({
  status,
  name,
  email,
  partnerError,
  changeName,
  changeEmail,
  submit,
}) => {
  return (
    <Form>
      <InputForm
        type="text"
        comment="氏名"
        changeValue={(event) => {
          return changeName(event)
        }}
        value={name}
        length={15}
        errMsg={partnerError.name}
      />
      <InputForm
        type="email"
        comment="メールアドレス"
        changeValue={(event) => {
          return changeEmail(event)
        }}
        value={email}
        errMsg={partnerError.email}
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

export default PartnerForm

const Form = styled.form`
  padding: 30px;
  input[type='text'] {
    margin-top: 20px;
  }
  input[type='email'] {
    margin-top: 30px;
  }
  button {
    margin-top: 60px;
  }
`
