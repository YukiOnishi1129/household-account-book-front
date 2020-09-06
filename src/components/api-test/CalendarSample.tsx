import React, { FC, useState, useEffect } from 'react'
import { Calendar, SumDateMoney } from '../../types/api'
import CalendarList from './CalendarList'
import ApiClient from '../../network/ApiClient'

const CalendarSample: FC = () => {
  const [calendar, setCalendar] = useState(initialCalendar)

  useEffect(() => {
    const calendarFunc = async () => {
      const res = await ApiClient.calender.getCalender('20200501')
      setCalendar(res.data)
    }
    calendarFunc()
  }, [])

  return (
    <>
      <h1>CalendarSample</h1>
      <h2>No.10: カレンダー情報取得</h2>
      {calendar && <CalendarList calendar={calendar} />}
    </>
  )
}

export default CalendarSample

export const initalSumDateMoney: SumDateMoney[] = [
  { date: '20000101', money: 0 },
]

export const initialCalendar: Calendar = {
  date: '20000101',
  sum_month_money: 0,
  sum_date_money: initalSumDateMoney,
}
