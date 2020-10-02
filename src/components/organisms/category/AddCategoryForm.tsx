import React, { FC, useState } from 'react'
import styled from 'styled-components'
import useCategory from '@/contexts/category'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import InputForm from '@/components/atoms/InputForm'
import FormTitle from '@/components/atoms/FormTitle'
import ColorRadioButton from '@/components/atoms/ColorRadioButton'
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
          <ColorRadioButton colorType={1} checked={true} />
          <ColorRadioButton colorType={2} checked={false} />
          <ColorRadioButton colorType={3} checked={false} />
          <ColorRadioButton colorType={4} checked={false} />
        </RadioTopField>
        <RadioBottomField>
          <ColorRadioButton colorType={5} checked={false} />
          <ColorRadioButton colorType={6} checked={false} />
          <ColorRadioButton colorType={7} checked={false} />
          <ColorRadioButton colorType={8} checked={false} />
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
  /* opacity: 0.3; */
  input[type='text'] {
    margin-bottom: 20px;
  }
`

const SelctedColor = styled.p`
  padding: 19px 15px;
  background: #fff;
  color: #757575;
  /* background: #f50b26; */
  /* color: #f50b26; */
  width: 100%;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
  user-select: none;
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
