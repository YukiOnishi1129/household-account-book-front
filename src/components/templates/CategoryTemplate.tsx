import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { CategoryProvider } from '@/contexts/category'
import TitleHeader from '@/components/organisms/common/TitleHeader'
import ContentsMain from '@/components/organisms/common/ContentsMain'
import AddCategoryForm from '@/components/organisms/category/AddCategoryForm'
import ShowCategoryList from '@/components/organisms/category/ShowCategoryList'
import BeforeLink from '@/components/atoms/BeforeLink'

const CategoryTemplate: FC = () => {
  const router = useRouter()

  return (
    <CategoryProvider>
      <ContentsMain>
        <TitleHeader>
          <BeforeLink nowPage={router.pathname} date="2020-09-01" />
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
