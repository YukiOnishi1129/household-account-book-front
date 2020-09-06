import React, { FC } from 'react'
import { Category } from '../../types/api'
import styled from 'styled-components'

const CategoryList: FC<{ category: Category }> = ({ category }) => {
  return (
    <CategorylUl>
      <li>
        ID: <span>{category.id}</span>
      </li>
      <li>
        カテゴリー名: <span>{category.category_name}</span>
      </li>
      <li>
        カラータイプ: <span>{category.color_type}</span>
      </li>
    </CategorylUl>
  )
}

export default CategoryList

export const CategorylUl = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
