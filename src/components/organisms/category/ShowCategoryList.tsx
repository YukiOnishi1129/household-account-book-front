import React, { FC, useState } from 'react'
import styled from 'styled-components'
import useCategory from '@/contexts/category'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CategoryList from '@/components/molcules/category/CategoryList'
import EditCategoryDialog from '@/components/dialogs/category/EditCategoryDialog'
import DeleteCategoryDialog from '@/components/dialogs/category/DeleteCategoryDialog'

const ShowCategoryList: FC = () => {
  const { categories, editCategory, deleteCategory } = useCategory()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [targetId, setTatgetId] = useState(0)
  const [targetName, setTatgetName] = useState('')
  const [targetColorType, setTargetColorType] = useState(0)
  const [inputName, setInputName] = useState('')
  const [inputColorType, setInputColorType] = useState(0)

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
    await deleteCategory(id)
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

const CategoryListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  max-height: 400px;
  width: 80%;
  margin: 0 auto;
`
