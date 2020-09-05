import React, { FC } from 'react'
import { Calendar } from '../../types/api/api'
import styled from 'styled-components'

const CalendarList: FC<{ calendar: Calendar }> = ({ calendar }) => {
  return (
    <CalendarDiv>
      <p>
        対象年月: <span>{calendar.date}</span>
      </p>
      <p>
        月額支出の合計金額: <span>{calendar.sum_month_money}</span>
      </p>
    </CalendarDiv>
  )
}

export default CalendarList

export const CalendarDiv = styled.div`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
