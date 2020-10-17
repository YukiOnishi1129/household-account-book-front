import React, { FC } from 'react'
import styled from 'styled-components'
import { LinkStatus } from '@/utils/consts'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogFormGroup from '@/components/dialogs/common/DialogFormGroup'
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
      <DialogFormGroup>
        <Select
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        >
          {changeDate.map((d) => (
            <option key={d.id} value={d.id}>
              {d.value}
            </option>
          ))}
        </Select>
      </DialogFormGroup>

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

const Select = styled.select`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  width: 90%;
  padding: 15px 15px;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
`
