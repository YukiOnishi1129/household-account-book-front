import React, { FC, useState } from 'react'
import styled from 'styled-components'
import CalendarContext from '@/contexts/calendar'
import { GridList, Typography } from '@material-ui/core'
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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const DashBoard: FC = () => {
  const { calendar } = CalendarContext()
  const [targetDate, setTargetDate] = useState(new Date(calendar.date))
  const showCalendar = getCalendarArray(targetDate)

  return (
    <Margin>
      <DaysLi>
        {days.map((d, index) => (
          <Days index={index} key={d}>
            {d}
          </Days>
        ))}
      </DaysLi>

      {showCalendar.map((weekRow, rowNum) => (
        <DateLi key={rowNum}>
          {weekRow.map((date, index) => (
            <DateBox key={getDay(date)} index={index}>
              <p>{getDate(date)}</p>
              <p>1,000,000円</p>
            </DateBox>
          ))}
        </DateLi>
      ))}
      {/* <Table>
        <THead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </THead>
        <TBody>
          {showCalendar.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map((date) => (
                <td key={getDay(date)} align="center">
                  {getDate(date)}
                </td>
              ))}
            </tr>
          ))}
        </TBody>
      </Table> */}
    </Margin>
  )
}

export default DashBoard

/**
 * カレンダー表示配列
 * @param date
 */
const getCalendarArray = (date: Date) => {
  console.log(date)
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

type StyleDateBox = {
  index: number
}

const Margin = styled.div`
  margin: 40px auto;
  width: 90%;
`

const CalendarUl = styled.ul`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 200px);
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  overflow-y: auto;
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

const Table = styled.table`
  width: 100%;
`

const THead = styled.thead`
  tr {
    height: 30px;
    border-bottom: 1px solid #888;
    th {
      font-weight: bold;
    }
  }
`

const TBody = styled.tbody`
  tr {
    td {
      height: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #888;
    }
  }
`
