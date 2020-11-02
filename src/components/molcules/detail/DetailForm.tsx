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
  setCategpryId: React.Dispatch<React.SetStateAction<number>>
  setMoney: React.Dispatch<React.SetStateAction<string | number>>
  detailError: DetailValidError
  submit: VoidFunction
}

const DetailForm: FC<Props> = ({
  isDialog,
  status,
  categoryId,
  money,
  imgFile,
  setCategpryId,
  setMoney,
  categories,
  detailError,
  submit,
}) => {
  const initialState = { id: 0, name: 'カテゴリを選択してください' }
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
   * カテゴリー選択処理
   * @param event
   */
  const ChangeSelect: EventType['onChangeSelect'] = (event) => {
    setCategpryId(Number(event.target.value))
  }

  /**
   * 金額入力処理
   * @param event
   */
  const ChangeMoney: EventType['onChange'] = (event) => {
    if (isFinite(Number(event.target.value))) {
      if (Number(event.target.value) === 0) {
        setMoney('')
      } else {
        setMoney(Number(event.target.value))
      }
    }
  }

  return (
    <_Form>
      <SelectForm
        value={categoryId}
        option={options}
        errMsg={detailError.categoryId}
        changeValue={ChangeSelect}
      />

      <InputForm
        type="text"
        comment="金額を入力してください"
        value={money}
        length={7}
        errMsg={detailError.money}
        changeValue={ChangeMoney}
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
