import React, { FC } from 'react'
import styled from 'styled-components'
import { CategoryProvider } from '@/contexts/category'
import ContentsMain from '@/components/organisms/common/ContentsMain'

const CategoryTemplate: FC = () => {
  return (
    <CategoryProvider>
      <ContentsMain>
        <TitleHeader>
          <DetailLinkArea></DetailLinkArea>
          <h2>カテゴリ管理</h2>
        </TitleHeader>
      </ContentsMain>
    </CategoryProvider>
  )
}

export default CategoryTemplate

const TitleHeader = styled.div`
  display: flex;
  height: 80px;
  line-height: 80px;
  font-size: 1.75rem;
  font-weight: bold;
  color: #d163a2;
  text-align: center;
`

const DetailLinkArea = styled.div`
  /* border: 1px solid red; */
  width: 480px;
  height: 80px;
`
