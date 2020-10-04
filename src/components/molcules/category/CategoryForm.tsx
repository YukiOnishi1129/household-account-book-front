import React, { FC } from 'react'
import styled from 'styled-components'
import { Category } from '@/types/api'
import { EventType } from '@/types/events'
import { CategoryValidError } from '@/types/errors'
import InputForm from '@/components/atoms/InputForm'
import ShowSelectedColor from '@/components/atoms/ShowSelectedColor'
import ColorRadioButton from '@/components/atoms/ColorRadioButton'
import SubmitButton from '@/components/atoms/SubmitButton'

export type Props = {
  status: string
  categories: Category[]
  name: string
  colorType: number
  categoryError: CategoryValidError
  changeName: EventType['onChange']
  changeColorType: EventType['onChange']
  submit: VoidFunction
}

const CategoryForm: FC<Props> = ({
  status,
  categories,
  name,
  colorType,
  categoryError,
  changeName,
  changeColorType,
  submit,
}) => {
  return (
    <Form>
      <InputForm
        type="text"
        comment="カテゴリを入力してください。"
        changeValue={(event) => {
          return changeName(event)
        }}
        value={name}
        errMsg={categoryError.name}
      />
      <ShowSelectedColor
        currentValue={colorType}
        errMsg={categoryError.colorType}
      />
      <RadioTopField>
        <ColorRadioButton
          categories={categories}
          value={1}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={2}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={3}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={4}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
      </RadioTopField>
      <RadioBottomField>
        <ColorRadioButton
          categories={categories}
          value={5}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={6}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={7}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
        <ColorRadioButton
          categories={categories}
          value={8}
          currentValue={colorType}
          changeValue={(event) => {
            return changeColorType(event)
          }}
        />
      </RadioBottomField>
      <SubmitButton
        status={status}
        disabled={categories && categories.length > 7}
        submit={() => {
          submit()
        }}
      />
    </Form>
  )
}

export default CategoryForm

const Form = styled.div`
  padding: 30px;
  /* opacity: 0.3; */
`

const RadioTopField = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`

const RadioBottomField = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
`
