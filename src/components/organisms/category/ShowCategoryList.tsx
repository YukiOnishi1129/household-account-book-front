import React, { FC, useState } from 'react'
import useCategory from '@/contexts/category'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'

const ShowCategoryList: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="カテゴリ一覧" space="sm" />
    </ContentsForm>
  )
}

export default ShowCategoryList
