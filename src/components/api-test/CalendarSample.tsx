import React, { FC, useState, useEffect } from 'react'
import { Calendar, SumDateMoney } from '../../types/api'
import CalendarList from './CalendarList'
import ApiClient from '../../network/ApiClient'
import StatusCode from './StatusCode'

const CalendarSample: FC = () => {
  const [calendar, setCalendar] = useState(initialCalendar)
  const [errorCarendar, setErrorCalendar] = useState(0)

  useEffect(() => {
    const calendarFunc = async () => {
      try {
        const res = await ApiClient.calender.getCalender('2020-05-01')
        setCalendar(res.data)
      } catch (error) {
        setErrorCalendar(error.response.status)
      }
    }
    calendarFunc()
  }, [])

  return (
    <>
      <h1>CalendarSample</h1>
      <h2>No.10: get calendar</h2>
      {calendar && errorCarendar === 0 && <CalendarList calendar={calendar} />}
      {errorCarendar === 401 && <StatusCode code={errorCarendar} />}
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
