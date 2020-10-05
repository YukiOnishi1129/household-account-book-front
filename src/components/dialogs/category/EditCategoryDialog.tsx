import React, { FC, useState, useEffect } from 'react'
import useCategory from '@/contexts/category'
import { LinkStatus } from '@/utils/consts'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import BaseDialog from '@/components/dialogs/common/BaseDialog'
import DialogTitle from '@/components/dialogs/common/DialogTitle'
import DialogButtonGroup from '@/components/dialogs/common/DialogButtonGroup'
import CategoryForm from '@/components/molcules/category/CategoryForm'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isOpen: boolean
  id: number
  targetColorType: number
  inputName: string
  inputColorType: number
  setInputName: React.Dispatch<React.SetStateAction<string>>
  setInputColorType: React.Dispatch<React.SetStateAction<number>>
  submit: (id: number, name: string, colorType: number) => Promise<void>
  close: () => void
}

const EditCategoryDialog: FC<Props> = ({
  isOpen,
  id,
  targetColorType,
  inputName,
  inputColorType,
  setInputName,
  setInputColorType,
  submit,
  close,
}) => {
  const { categories } = useCategory()
  const [categoryError, setCategoryError] = useState<CategoryValidError>({
    name: '',
    colorType: '',
  })

  /**
   * カテゴリー名入力処理
   * @param event
   */
  const handleChangeName: EventType['onChange'] = (event) => {
    setInputName(event.target.value)
  }

  /**
   * カテゴリーカラー入力処理
   * @param event
   */
  const handleChangeColorType: EventType['onChange'] = (event) => {
    setInputColorType(Number(event.target.value))
  }
  return (
    <BaseDialog isOpen={isOpen} closeDialog={close}>
      <DialogTitle title="カテゴリ変更" />
      <CategoryForm
        isDialog={true}
        status={LinkStatus.CHANGE}
        categories={categories}
        targetColorType={targetColorType}
        name={inputName}
        colorType={inputColorType}
        categoryError={categoryError}
        changeName={handleChangeName}
        changeColorType={handleChangeColorType}
        submit={() => {}}
      />
      <DialogButtonGroup>
        <SubmitButton status={LinkStatus.CANCEL} size="md" submit={close} />
        <SubmitButton
          status={LinkStatus.CHANGE}
          size="md"
          submit={() => {
            submit(id, inputName, inputColorType)
          }}
        />
      </DialogButtonGroup>
    </BaseDialog>
  )
}

export default EditCategoryDialog
