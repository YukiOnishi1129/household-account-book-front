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
import {
  RequiredValidation,
  RequireColorTypeValidation,
  MaxLengthValidation,
} from '@/utils/validations'

const AddCategoryForm: FC = () => {
  const {
    categories,
    name,
    colorType,
    setName,
    setColorType,
    addCategories,
  } = useCategory()
  const [categoryError, setCategoryError] = useState<CategoryValidError>({
    name: '',
    colorType: '',
  })

  const describe =
    categories.length > 7 ? 'これ以上登録できません。' : '8つまで登録できます。'

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
    if (isValid(name, colorType, setCategoryError)) {
      const requestData: RequestCategory = {
        category_name: name,
        color_type: colorType,
      }
      await addCategories(requestData)
      // 入力項目初期化
      setName('')
      setColorType(0)
    }
  }

  return (
    <ContentsForm>
      <FormTitle title="カテゴリ追加" space="sm" />
      <Describe>{describe}</Describe>
      <CategoryForm
        status={LinkStatus.REGISTER}
        categories={categories}
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

/**
 * バリデーション
 * @param name
 * @param colorType
 * @param setCategoryError
 */
const isValid = (
  name: string,
  colorType: number,
  setCategoryError: React.Dispatch<React.SetStateAction<CategoryValidError>>
): boolean => {
  //  バリデーションエラー初期化
  setCategoryError({ name: '', colorType: '' })
  // バリデーションチェック
  let nameErrMsg = RequiredValidation(name)
  const colorTypeErrMsg = RequireColorTypeValidation(colorType)
  if (nameErrMsg === '') nameErrMsg = MaxLengthValidation(name, 6)
  if (nameErrMsg !== '' || colorTypeErrMsg !== '') {
    setCategoryError({ name: nameErrMsg, colorType: colorTypeErrMsg })
    return false
  }
  return true
}

const Describe = styled.p`
  padding: 10px 0 0 0;
  text-align: center;
`
