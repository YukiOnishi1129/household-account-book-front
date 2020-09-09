import React, { FC, useState, useEffect } from 'react'
import { Calendar, SumDateMoney } from '../../types/api'
import CalendarList from './CalendarList'
import ApiClient from '../../network/ApiClient'

const CalendarSample: FC = () => {
  const [calendar, setCalendar] = useState(initialCalendar)

  useEffect(() => {
    let unmounted = false
    const calendarFunc = async () => {
      const res = await ApiClient.calender.getCalender('2020-05-01')
      if (!unmounted) {
        setCalendar(res.data)
      }
    }
    calendarFunc()
    return () => {
      unmounted = true
    }
  }, [])

  return (
    <>
      <h1>CalendarSample</h1>
      <h2>No.10: get calendar</h2>
      {calendar && <CalendarList calendar={calendar} />}
    </>
  )
}

export default CalendarSample

export const initalSumDateMoney: SumDateMoney[] = [
  { date: '2000-01-01', money: 0 },
]

export const initialCalendar: Calendar = {
  date: '2000-01-01',
  sum_month_money: 0,
  sum_date_money: initalSumDateMoney,
}
