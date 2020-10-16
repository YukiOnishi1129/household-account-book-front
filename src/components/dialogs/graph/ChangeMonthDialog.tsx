import React, { FC, useState } from 'react'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogButtonGroup from '@/components/dialogs/common/DialogButtonGroup'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isOpen: boolean
  targetDate: string
  setTargetDate: React.Dispatch<React.SetStateAction<string>>
  submit: (date: string) => Promise<void>
  close: () => void
}

const ChangeMonthDialog: FC<Props> = ({
  isOpen,
  targetDate,
  setTargetDate,
  submit,
  close,
}) => {
  const dates = [
    { date: '2020-09-01', value: '2020年9月' },
    { date: '2020-10-01', value: '2020年10月' },
    { date: '2020-11-01', value: '2020年11月' },
    { date: '2020-12-01', value: '2020年12月' },
  ]
  const optioons = dates.map((d) => (
    <option key={d.date} value={d.date}>
      {d.value}
    </option>
  ))
  return (
    <BaseDialog isOpen={isOpen} closeDialog={close}>
      <DialogTitle title="支出割合の月を変更" />
      <select
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
      >
        {optioons}
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
