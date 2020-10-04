import React, { FC, useState } from 'react'
import styled from 'styled-components'
import useCategory from '@/contexts/category'
import { RequestCategory } from '@/types/api'
import { CategoryValidError } from '@/types/errors'
import { EventType } from '@/types/events'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CategoryList from '@/components/molcules/category/CategoryList'

const ShowCategoryList: FC = () => {
  const { categories, editCategory, deleteCategory } = useCategory()

  const openModal = (id: number, name: string, colorType: number): void => {
    // console.log('クリック')
  }
  return (
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
              submit={openModal}
            />
          ))}
        </CategoryListArea>
      )}
    </ContentsForm>
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
