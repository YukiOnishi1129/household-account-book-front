import React, { FC } from 'react'
import styled from 'styled-components'
import useGraph from '@/contexts/graph'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'

const AnnualChange: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="年間支出金額の推移" space="sm" />
    </ContentsForm>
  )
}

export default AnnualChange
