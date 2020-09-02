import React, { FC, useState, useEffect } from 'react'
import { Calendar, Detail, Category } from '../types/api/api'
import ApiClient from '../network/ApiClient'

export const initailCalendar: Calendar = {
  date: '',
  sum_month_money: 0,
  sum_date_money: [],
}
export const initailCategory: Category[] = []
export const initailDetail: Detail[] = []

const ApiSample: FC = () => {
  const [calendar, setCalendar] = useState(initailCalendar)
  const [categories, setCategory] = useState(initailCategory)
  const [details, setDetails] = useState(initailDetail)
  useEffect(() => {
    const calendarFunc = async () => {
      const res = await ApiClient.calender.getCalender('20200501')
      setCalendar(res.data)
    }
    const detailFunc = async () => {
      const res = await ApiClient.detail.getDetails('20200505')
      setDetails(res.data)
    }
    const categoryFunc = async () => {
      const res = await ApiClient.category.getCategories()
      setCategory(res.data)
    }
    calendarFunc()
    detailFunc()
    categoryFunc()
  }, [])
  return (
    <>
      <h1>APISample</h1>
      {calendar && <div>{calendar.sum_month_money}</div>}
      {details.length !== 0 && <div>{details[0].id}</div>}
      {categories.length !== 0 && <div>{categories[0].id}</div>}
    </>
  )
}
export default ApiSample
