import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MonthRate, AnnualChange } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import MonthRateList from './MonthRateList'
import AnnualChangeList from './AnnualChangeList'

const GraphSample: FC = () => {
  const [monthRate, setMonthRate] = useState(initailMonthRate)
  const [annualChange, setAnnualChange] = useState(initailAnnualChange)
  const router = useRouter()

  useEffect(() => {
    let unmounted = false
    const monthRateFunc = async () => {
      try {
        const res = await ApiClient.monthRate.getMonthRate('2020-05-01')
        if (!unmounted) {
          setMonthRate(res.data)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    const annualChangeFunc = async () => {
      try {
        const res = await ApiClient.annualChange.getAnnualChange('2020-05-01')
        if (!unmounted) {
          setAnnualChange(res.data)
        }
      } catch (error) {
        router.push('/api-test')
      }
    }
    monthRateFunc()
    annualChangeFunc()
    return () => {
      unmounted = true
    }
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
    month: '2000-01-01',
    sum_money: 0,
  },
]

export const AreaDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`
