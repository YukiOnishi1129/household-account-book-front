import React, { FC, useState } from 'react'
import styled from 'styled-components'
import useCategory from '@/contexts/category'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import InputForm from '@/components/atoms/InputForm'
import FormTitle from '@/components/atoms/FormTitle'
import SubmitButton from '@/components/atoms/SubmitButton'

const AddCategoryForm: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="カテゴリ追加" space="sm" />
      <Describe>8つまで登録できます</Describe>
      <FormField>
        <InputForm
          type="text"
          comment="カテゴリを入力してください。"
          changeValue={(event) => {
            console.log('aaa')
          }}
          value=""
          errMsg=""
        />
        <SelctedColor>色を選択してください。</SelctedColor>
        <RadioTopField>
          <RadioButton>
            <input type="radio" name="color" />
            <CheckedColor />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
        </RadioTopField>
        <RadioBottomField>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
          <RadioButton>
            <input type="radio" name="color" />
          </RadioButton>
        </RadioBottomField>
        <SubmitButton
          status={LinkStatus.REGISTER}
          submit={() => {
            console.log('テスト')
          }}
        />
      </FormField>
    </ContentsForm>
  )
}

export default AddCategoryForm

const Describe = styled.p`
  padding: 10px 0 0 0;
  text-align: center;
`

const FormField = styled.div`
  padding: 30px;
  input[type='text'] {
    margin-bottom: 20px;
  }
`

const SelctedColor = styled.p`
  padding: 19px 15px;
  background: #fff;
  color: #757575;
  width: 100%;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
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
`

const RadioButton = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 50px;
  line-height: 50px;
  background-color: #f50b26;
  border-radius: 20px;

  &:hover {
    opacity: 0.7;
  }

  input[type='radio'] {
    display: none;
  }
`

const CheckedColor = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  width: 70px;
  height: 60px;
  border: 3px solid #85c0f2;
  border-radius: 20px;
`
