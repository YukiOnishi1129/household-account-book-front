import React, { FC, useState } from 'react'
import styled from 'styled-components'
import CalendarContext from '@/contexts/calendar'
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

const DashBoard: FC = () => {
  const { calendar } = CalendarContext()
  const [targetDate, setTargetDate] = useState(new Date(calendar.date))
  const showCalendar = getCalendarArray(targetDate)

  return (
    <Margin>
      <Table>
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
      </Table>
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

const Margin = styled.div`
  margin: 40px auto;
  width: 90%;
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
