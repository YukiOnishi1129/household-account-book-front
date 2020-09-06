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
      <SumDateDiv>
        {calendar.sum_date_money.map((sumMoney, index) => {
          return (
            <CalendarUl key={index}>
              <li>
                日付: <span>{sumMoney.date}</span>
              </li>
              <li>
                金額: <span>{sumMoney.money}</span>
              </li>
            </CalendarUl>
          )
        })}
      </SumDateDiv>
    </CalendarDiv>
  )
}

export default CalendarList

export const CalendarDiv = styled.div`
  padding: 10px;
  width: 70%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`

export const SumDateDiv = styled.div`
  display: flex;
`
export const CalendarUl = styled.ul`
  margin-right: 10px;
  padding: 10px;
  width: 50%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
