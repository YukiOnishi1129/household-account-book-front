import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CalendarContext from '@/contexts/calendar'
import { AfterLoginPage } from '@/utils/consts'
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import { FormatHyphenYearMonthDate, FormatHyphenYearMonth } from '@/utils/date'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const DashBoard: FC = () => {
  const router = useRouter()
  const { calendar, getCalendar } = CalendarContext()
  const targetDate = new Date(calendar.date)
  const showCalendar = getCalendarArray(targetDate)

  /**
   * 前月へ移動
   */
  const changeLastMonth = (): void => {
    // TODO: 月変更はAPI実装後確認
    getCalendar(FormatHyphenYearMonthDate(String(subMonths(targetDate, 1))))
  }

  /**
   * 翌月へ移動
   */
  const changeNextMonth = (): void => {
    // TODO: 月変更はAPI実装後確認
    getCalendar(FormatHyphenYearMonthDate(String(addMonths(targetDate, 1))))
  }

  /**
   * 金額情報のある日付を選定
   * @param date
   */
  const isMatchMoneyDate = (date: string): boolean => {
    return (
      calendar.sum_date_money &&
      calendar.sum_date_money.filter((m) => {
        return m.date === date
      }).length > 0
    )
  }

  /**
   * 日付の金額表示
   * @param date
   */
  const showDateMoney = (date: string): string => {
    const calendarDate = calendar.sum_date_money.filter((m) => {
      return m.date === date
    })
    return calendarDate[0].money + '円'
  }

  /**
   * 現在表示している月の日付判定
   * @param date
   */
  const isNotCurrentMonth = (date: string) => {
    return (
      FormatHyphenYearMonth(date) === FormatHyphenYearMonth(String(targetDate))
    )
  }

  return (
    <Margin>
      <div onClick={() => changeLastMonth()}>前</div>
      <div onClick={() => changeNextMonth()}>次</div>
      <DaysLi>
        {days.map((d, index) => (
          <Days index={index} key={index}>
            {d}
          </Days>
        ))}
      </DaysLi>
      {showCalendar.map((weekRow, rowNum) => (
        <DateLi key={rowNum}>
          {weekRow.map((date) =>
            isMatchMoneyDate(FormatHyphenYearMonthDate(String(date))) ? (
              <DateBox
                key={getDay(date)}
                index={getDay(date)}
                onClick={() =>
                  router.push({
                    pathname: `${AfterLoginPage.DETAIL}[date]`,
                    query: { date: FormatHyphenYearMonthDate(String(date)) },
                  })
                }
              >
                <p>{getDate(date)}</p>
                <p>{showDateMoney(FormatHyphenYearMonthDate(String(date)))}</p>
              </DateBox>
            ) : (
              <NoMoneyDateBox
                key={getDay(date)}
                index={getDay(date)}
                currentMonth={isNotCurrentMonth(
                  FormatHyphenYearMonthDate(String(date))
                )}
              >
                <p>{getDate(date)}</p>
              </NoMoneyDateBox>
            )
          )}
        </DateLi>
      ))}
    </Margin>
  )
}

export default DashBoard

/**
 * カレンダー表示配列
 * @param date
 */
const getCalendarArray = (date: Date) => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })
  return sundays.map((sunday) =>
    eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
  )
}

/**
 * 曜日ごとに色を変える
 * @param index
 */
const setDaysColor = (index: number): string => {
  switch (index) {
    case 0:
      return 'color: #F82020;'
    case 6:
      return 'color: #3118F5;'
    default:
      return ''
  }
}

/**
 * 現在月ではない日付の場合、グレーにする
 * @param index
 * @param currentMonth
 */
const setCurrentMonthDaysColor = (
  index: number,
  currentMonth: boolean
): string => {
  if (currentMonth) return setDaysColor(index)
  return 'color: #888;'
}

type StyleDateBox = {
  index: number
}

type StyleNoMoneyDateBox = {
  index: number
  currentMonth: boolean
}

const Margin = styled.div`
  margin: 40px auto;
  width: 90%;
  min-height: calc(100vh - 220px);
`

const DaysLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ccc;
`
const Days = styled.div`
  width: 14.3%;
  ${({ index }: StyleDateBox) => setDaysColor(index)};
`

const DateLi = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #ccc;
`

const DateBox = styled.div`
  cursor: pointer;
  width: 14.3%;
  height: 100px;
  line-height: 1.5;
  &:hover {
    background: #bd9df0;
    color: #fff;
  }
  p {
    height: 40%;
    &:first-child {
      font-weight: bold;
      padding-top: 10px;
      ${({ index }: StyleDateBox) => setDaysColor(index)};
    }
  }
`

const NoMoneyDateBox = styled.div`
  width: 14.3%;
  height: 100px;
  line-height: 1.5;
  p:first-child {
    height: 40%;
    font-weight: bold;
    padding-top: 10px;
    ${({ index, currentMonth }: StyleNoMoneyDateBox) =>
      setCurrentMonthDaysColor(index, currentMonth)};
  }
`
