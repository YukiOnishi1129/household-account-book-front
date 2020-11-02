import React, { FC, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Detail, Category } from '@/types/api'
import { EventType } from '@/types/events'
import { DetailValidError } from '@/types/errors'
import InputForm from '@/components/atoms/InputForm'
import SelectForm from '@/components/atoms/SelectForm'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  isDialog?: boolean
  status: string
  categoryId: number
  money: string | number
  imgFile: string
  categories: Category[]
  detailError: DetailValidError
  submit: VoidFunction
}

const DetailForm: FC<Props> = ({
  isDialog,
  status,
  categoryId,
  money,
  imgFile,
  categories,
  detailError,
  submit,
}) => {
  const initialState = { id: 0, name: 'カテゴリを選択してください' }
  const [selectedId, setSelectedId] = useState(0)
  const categoryState =
    categories && categories.length > 1
      ? categories
          .map((c) => {
            return { id: c.id, name: c.category_name }
          })
          .concat(initialState)
          .sort((current, next) => {
            return current.id < next.id ? -1 : 1
          })
      : [initialState]

  const options = categoryState.map((state) => (
    <option key={state.id} value={state.id}>
      {state.name}
    </option>
  ))

  /**
   * カテゴリー選択結果更新
   * @param event
   */
  const ChangeSelect: EventType['onChangeSelect'] = (event) => {
    setSelectedId(Number(event.target.value))
  }

  return (
    <_Form>
      <SelectForm
        value={selectedId}
        option={options}
        errMsg={detailError.categoryId}
        changeValue={ChangeSelect}
      />

      <InputForm
        type="text"
        comment="金額を入力してください"
        changeValue={() => {}}
        value={money}
        errMsg={detailError.money}
      />
      <SubmitButton
        status={status}
        submit={() => {
          submit()
        }}
      />
    </_Form>
  )
}
export default DetailForm

export type TProps = {
  error: boolean
}

const _Form = styled.div`
  padding: 30px;
  select:first-child {
    margin-bottom: 20px;
  }
`
