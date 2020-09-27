import React, { FC, useState } from 'react'
import useCategory from '@/contexts/category'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'

const AddCategoryForm: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="カテゴリ追加" space="sm" />
    </ContentsForm>
  )
}

export default AddCategoryForm
