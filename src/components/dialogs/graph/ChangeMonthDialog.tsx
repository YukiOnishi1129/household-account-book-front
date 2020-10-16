import React, { FC, useState } from 'react'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogButtonGroup from '@/components/dialogs/common/DialogButtonGroup'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isOpen: boolean
  targetDate: string
  changeDate: {
    id: string
    value: string
  }[]
  setTargetDate: React.Dispatch<React.SetStateAction<string>>
  submit: (date: string) => Promise<void>
  close: () => void
}

const ChangeMonthDialog: FC<Props> = ({
  isOpen,
  targetDate,
  changeDate,
  setTargetDate,
  submit,
  close,
}) => {
  return (
    <BaseDialog isOpen={isOpen} closeDialog={close}>
      <DialogTitle title="支出割合の月を変更" />
      <select
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
      >
        {changeDate.map((d) => (
          <option key={d.id} value={d.id}>
            {d.value}
          </option>
        ))}
      </select>
      <DialogButtonGroup>
        <SubmitButton status={LinkStatus.CANCEL} size="md" submit={close} />
        <SubmitButton
          status={LinkStatus.CHANGE}
          size="md"
          submit={() => {
            submit(targetDate)
          }}
        />
      </DialogButtonGroup>
    </BaseDialog>
  )
}

export default ChangeMonthDialog
