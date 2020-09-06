import React, { FC, useState, useEffect } from 'react'
import { MonthRate, AnnualChange } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import MonthRateList from './MonthRateList'
import AnnualChangeList from './AnnualChangeList'

const GraphSample: FC = () => {
  const [monthRate, setMonthRate] = useState(initailMonthRate)
  const [annualChange, setAnnualChange] = useState(initailAnnualChange)

  useEffect(() => {
    const monthRateFunc = async () => {
      const res = await ApiClient.monthRate.getMonthRate('20200501')
      setMonthRate(res.data)
    }
    const annualChangeFunc = async () => {
      const res = await ApiClient.annualChange.getAnnualChange('20200501')
      setAnnualChange(res.data)
    }
    monthRateFunc()
    annualChangeFunc()
  }, [])

  return (
    <>
      <h1>CalendarSample</h1>
      <h2>No.19: month rate</h2>
      <AreaDiv>
        {monthRate.map((rate, index) => {
          return <MonthRateList key={index} monthRate={rate} />
        })}
      </AreaDiv>
      <h2>No.20: annual change</h2>
      <AreaDiv>
        {annualChange.map((annual, index) => {
          return <AnnualChangeList key={index} annualChange={annual} />
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

export const initailAnnualChange: AnnualChange[] = [
  {
    month: '20000101',
    sum_money: 0,
  },
]

export const AreaDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`
