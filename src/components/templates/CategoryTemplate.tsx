import React, { FC } from 'react'
import styled from 'styled-components'
import { CategoryProvider } from '@/contexts/category'
import ContentsMain from '@/components/organisms/common/ContentsMain'
import AddCategoryForm from '@/components/organisms/category/AddCategoryForm'
import ShowCategoryList from '@/components/organisms/category/ShowCategoryList'

const CategoryTemplate: FC = () => {
  return (
    <CategoryProvider>
      <ContentsMain>
        <TitleHeader>
          <DetailLinkArea></DetailLinkArea>
          <h2>カテゴリ管理</h2>
        </TitleHeader>
        <Contents>
          <ContentsRight>
            <AddCategoryForm />
          </ContentsRight>
          <ContentsLeft>
            <ShowCategoryList />
          </ContentsLeft>
        </Contents>
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
  width: 480px;
  height: 80px;
`

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  min-height: 380px;
  box-sizing: border-box;
`

const ContentsRight = styled.div`
  width: 40%;
`
const ContentsLeft = styled.div`
  width: 50%;
`
