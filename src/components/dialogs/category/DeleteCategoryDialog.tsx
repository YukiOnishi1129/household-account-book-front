import React, { FC } from 'react'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogFormGroup from '@/components/dialogs/common/DialogFormGroup'
import DialogFormItem from '@/components/dialogs/common/DialogFormItem'
import DialogButtonGroup from '@/components/dialogs/common/DialogButtonGroup'
import ShowSelectedColor from '@/components/atoms/ShowSelectedColor'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isOpen: boolean
  id: number
  name: string
  colorType: number
  submit: (id: number) => Promise<void>
  close: () => void
}

const DeleteCategoryDialog: FC<Props> = ({
  isOpen,
  id,
  name,
  colorType,
  submit,
  close,
}) => {
  return (
    <BaseDialog isOpen={isOpen} closeDialog={close}>
      <DialogTitle title="カテゴリーを削除しますか？" />
      <DialogFormGroup>
        <DialogFormItem title="カテゴリ">
          <p>{name}</p>
        </DialogFormItem>
        <DialogFormItem title="カラー">
          <ShowSelectedColor
            currentValue={colorType}
            errMsg=""
            sizeStyle="dialog"
          />
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

export default DeleteCategoryDialog
