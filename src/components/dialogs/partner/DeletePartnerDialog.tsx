import React, { FC } from 'react'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogFormGroup from '@/components/dialogs/common/DialogFormGroup'
import DialogFormItem from '@/components/dialogs/common/DialogFormItem'
import DialogButtonGroup from '@/components/dialogs/common/DialogButtonGroup'
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
      <DialogTitle title="パートナーを削除しますか？" />
      <DialogFormGroup>
        <DialogFormItem title="お名前">
          <p>{name}</p>
        </DialogFormItem>
        <DialogFormItem title="メールアドレス">
          <p>{email}</p>
        </DialogFormItem>
      </DialogFormGroup>
      <DialogButtonGroup>
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
      </DialogButtonGroup>
    </BaseDialog>
  )
}

export default DeletePartnerDialog
