import React, { FC } from 'react'
import styled from 'styled-components'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isOpen: boolean
  id: number
  name: string
  email: string
  submit: (id: number) => Promise<void>
  close: () => void
}

const DeletePartnerDialog: FC<Props> = ({
  isOpen,
  id,
  name,
  email,
  submit,
  close,
}) => {
  return (
    <BaseDialog isOpen={isOpen} closeDialog={close}>
      <ModalTitle>パートナーを削除しますか？</ModalTitle>
      <FormGroup>
        <FormItem>
          <ItemName>お名前</ItemName>
          <ItemValue>{name}</ItemValue>
        </FormItem>
        <FormItem>
          <ItemName>メールアドレス</ItemName>
          <ItemValue>{email}</ItemValue>
        </FormItem>
      </FormGroup>
      <ButtonGroup>
        <SubmitButton status={LinkStatus.CANCEL} size="md" submit={close}>
          削除
        </SubmitButton>
        <SubmitButton
          status={LinkStatus.DELETE}
          size="md"
          submit={() => {
            submit(id)
          }}
        >
          削除
        </SubmitButton>
      </ButtonGroup>
    </BaseDialog>
  )
}

export default DeletePartnerDialog

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #d163a2;
`
const FormGroup = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
`

const FormItem = styled.div`
  display: flex;

  &:first-child {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const ItemName = styled.p`
  width: 180px;
  font-size: 1.25rem;
  font-weight: bold;
`

const ItemValue = styled.p`
  font-size: 1.25rem;
`

const ButtonGroup = styled.div`
  display: flex;
`
