import React, { FC } from 'react'
import styled from 'styled-components'
import { CategoryProvider } from '@/contexts/category'
import ContentsMain from '@/components/organisms/common/ContentsMain'

const CategoryTemplate: FC = () => {
  return (
    <CategoryProvider>
      <ContentsMain>
        <div>aaa</div>
      </ContentsMain>
    </CategoryProvider>
  )
}

export default CategoryTemplate
