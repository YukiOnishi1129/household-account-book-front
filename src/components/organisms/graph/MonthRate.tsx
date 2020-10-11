import React, { FC } from 'react'
import styled from 'styled-components'
import useGraph from '@/contexts/graph'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CalendarIcon from '@/components/atoms/CalendarIcon'
import { FormatCgangeYearMonth } from '@/utils/date'

const MonthRate: FC = () => {
  const { date } = useGraph()
  const showdate = FormatCgangeYearMonth(date) + 'の支出割合'
  return (
    <ContentsForm>
      <Title>
        <FormTitle title={showdate} space="sm" />
        <CalendarIcon id={1} size={24} submit={() => {}} />
      </Title>
    </ContentsForm>
  )
}

export default MonthRate

const Title = styled.div`
  display: flex;
  justify-content: center;

  div {
    &:last-child {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`
