import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import useCategory from '@/contexts/category'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import InputForm from '@/components/atoms/InputForm'
import FormTitle from '@/components/atoms/FormTitle'
import ShowSelectedColor from '@/components/atoms/ShowSelectedColor'
import ColorRadioButton from '@/components/atoms/ColorRadioButton'
import SubmitButton from '@/components/atoms/SubmitButton'

const AddCategoryForm: FC = () => {
  const { addCategories } = useCategory()
  const [name, setName] = useState('')
  const [colorType, setColorType] = useState(0)
  const [categoryError, setCategoryError] = useState<CategoryValidError>({
    name: '',
    colorType: '',
  })

  /**
   * カテゴリー名入力処理
   * @param event
   */
  const handleChangeName: EventType['onChange'] = (event) => {
    setName(event.target.value)
  }

  /**
   * カテゴリーカラー入力処理
   * @param event
   */
  const handleChangeColorType: EventType['onChange'] = (event) => {
    setColorType(Number(event.target.value))
  }

  /**
   * カテゴリー登録処理
   */
  const handleSubmitAddCategory = async () => {
    const requestData: RequestCategory = {
      category_name: name,
      color_type: colorType,
    }
    await addCategories(requestData)
  }
  return (
    <ContentsForm>
      <FormTitle title="カテゴリ追加" space="sm" />
      <Describe>8つまで登録できます</Describe>
      <FormField>
        <InputForm
          type="text"
          comment="カテゴリを入力してください。"
          changeValue={(event) => {
            return handleChangeName(event)
          }}
          value={name}
          errMsg={categoryError.name}
        />
        <ShowSelectedColor currentValue={colorType} />
        <RadioTopField>
          <ColorRadioButton
            value={1}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={2}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={3}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={4}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
        </RadioTopField>
        <RadioBottomField>
          <ColorRadioButton
            value={5}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={6}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={7}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
          <ColorRadioButton
            value={8}
            currentValue={colorType}
            changeValue={handleChangeColorType}
          />
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
