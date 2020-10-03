import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import useCategory from '@/contexts/category'
import { LinkStatus } from '@/utils/consts'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CategoryForm from '@/components/molcules/category/CategoryForm'

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
      <CategoryForm
        status={LinkStatus.REGISTER}
        name={name}
        colorType={colorType}
        categoryError={categoryError}
        changeName={handleChangeName}
        changeColorType={handleChangeColorType}
        submit={handleSubmitAddCategory}
      />
    </ContentsForm>
  )
}

export default AddCategoryForm

const Describe = styled.p`
  padding: 10px 0 0 0;
  text-align: center;
`
