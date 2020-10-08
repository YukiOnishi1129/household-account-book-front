import React, { FC, useState } from 'react'
import styled from 'styled-components'
import useCategory from '@/contexts/category'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CategoryList from '@/components/molcules/category/CategoryList'
import EditCategoryDialog from '@/components/dialogs/category/EditCategoryDialog'
import DeleteCategoryDialog from '@/components/dialogs/category/DeleteCategoryDialog'
import {
  RequiredValidation,
  RequireColorTypeValidation,
  MaxLengthValidation,
} from '@/utils/validations'

const ShowCategoryList: FC = () => {
  const {
    categories,
    setName,
    setColorType,
    editCategory,
    deleteCategory,
  } = useCategory()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [targetId, setTatgetId] = useState(0)
  const [targetName, setTatgetName] = useState('')
  const [targetColorType, setTargetColorType] = useState(0)
  const [inputName, setInputName] = useState('')
  const [inputColorType, setInputColorType] = useState(0)
  const [categoryError, setCategoryError] = useState<CategoryValidError>({
    name: '',
    colorType: '',
  })

  /**
   * カテゴリー編集モーダルを開く処理
   * @param id
   * @param name
   * @param colorType
   */
  const openEditDialog = (
    id: number,
    name: string,
    colorType: number
  ): void => {
    // バリデーションエラー初期化
    setCategoryError({ name: '', colorType: '' })
    // ダイアログを開く
    setIsEditOpen(true)
    setTatgetId(id)
    setTatgetName(name)
    setTargetColorType(colorType)
    setInputName(name)
    setInputColorType(colorType)
  }

  /**
   * カテゴリー編集モーダルを閉じる処理
   */
  const closeEditDialog = (): void => {
    setIsEditOpen(false)
  }

  /**
   * カテゴリー削除モーダルを開く処理
   * @param id
   * @param name
   * @param colorType
   */
  const openDeleteDialog = (
    id: number,
    name: string,
    colorType: number
  ): void => {
    setIsDeleteOpen(true)
    setTatgetId(id)
    setTatgetName(name)
    setTargetColorType(colorType)
  }

  /**
   * カテゴリー削除モーダルを閉じる処理
   */
  const closeDeleteDialog = (): void => {
    setIsDeleteOpen(false)
  }

  /**
   * カテゴリー編集処理
   * @param id
   * @param name
   * @param colorType
   */
  const handleSubmitEdit = async (
    id: number,
    name: string,
    colorType: number
  ): Promise<void> => {
    if (isValid(name, colorType, setCategoryError)) {
      const requestData: RequestCategory = {
        category_name: name,
        color_type: colorType,
      }
      await editCategory(id, requestData)
      // 初期化
      setName('')
      setColorType(0)
      setTatgetId(0)
      setTatgetName('')
      setTargetColorType(0)
      // ダイアログを閉じる
      closeEditDialog()
    }
  }

  /**
   * カテゴリー削除処理
   * @param id
   */
  const handleSubmitDelete = async (id: number): Promise<void> => {
    await deleteCategory(id)
    closeDeleteDialog()
  }

  return (
    <>
      <ContentsForm>
        <FormTitle title="カテゴリ一覧" space="sm" />
        {categories && categories.length !== 0 && categories[0].id !== 0 && (
          <CategoryListArea>
            {categories.map((category) => (
              <CategoryList
                key={category.id}
                id={category.id}
                name={category.category_name}
                colorType={category.color_type}
                editSubmit={openEditDialog}
                deleteSubmit={openDeleteDialog}
              />
            ))}
          </CategoryListArea>
        )}
      </ContentsForm>
      <EditCategoryDialog
        isOpen={isEditOpen}
        id={targetId}
        targetColorType={targetColorType}
        inputName={inputName}
        inputColorType={inputColorType}
        categoryError={categoryError}
        setInputName={setInputName}
        setInputColorType={setInputColorType}
        submit={handleSubmitEdit}
        close={closeEditDialog}
      />
      <DeleteCategoryDialog
        isOpen={isDeleteOpen}
        id={targetId}
        name={targetName}
        colorType={targetColorType}
        submit={handleSubmitDelete}
        close={closeDeleteDialog}
      />
    </>
  )
}

export default ShowCategoryList

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

const CategoryListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  max-height: 400px;
  width: 80%;
  margin: 0 auto;
`
