import React, { FC } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import useGraph from '@/contexts/graph'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CalendarIcon from '@/components/atoms/CalendarIcon'
import { FormatCgangeYearMonth } from '@/utils/date'

// NOTE: RechartsはSSRでwarinngが出るから、SSRしないようにする
// https://github.com/vercel/next.js/issues/12863
const DynamicMonthRacte = dynamic(
  () => import('@/components/molcules/graph/MonthRateCharts'),
  { ssr: false }
)

const MonthRate: FC = () => {
  const { date, monthRate } = useGraph()
  const showdate = FormatCgangeYearMonth(date) + 'の支出割合'
  return (
    <ContentsForm>
      <Title>
        <FormTitle title={showdate} space="sm" />
        <CalendarIcon id={1} size={24} submit={() => {}} />
      </Title>
      <GraphFierld>
        <DynamicMonthRacte monthRate={monthRate} />
      </GraphFierld>
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

const GraphFierld = styled.div`
  div:last-child {
    margin: 0 auto;
  }
`
