import React, { FC, useState, useEffect } from 'react'
import { MonthRate, AnnualChange } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import MonthRateList from './MonthRateList'

const GraphSample: FC = () => {
  const [monthRate, setMonthRate] = useState(initailMonthRate)

  useEffect(() => {
    const monthRateFunc = async () => {
      const res = await ApiClient.monthRate.getMonthRate('20200501')
      setMonthRate(res.data)
    }
    monthRateFunc()
  }, [])

  return (
    <>
      <h1>CalendarSample</h1>
      <h2>No.19: month_rate</h2>
      <AreaDiv>
        {monthRate.map((rate, index) => {
          return <MonthRateList key={index} monthRate={rate} />
        })}
      </AreaDiv>
    </>
  )
}

export default GraphSample

export const initailMonthRate: MonthRate[] = [
  {
    category_id: 0,
    category_name: '',
    color_type: 0,
    money: 0,
  },
]

export const AreaDiv = styled.div`
  display: flex;
`
