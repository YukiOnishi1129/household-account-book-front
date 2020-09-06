import React, { FC } from 'react'
import { MonthRate } from '../../types/api'
import styled from 'styled-components'

const MonthRateList: FC<{ monthRate: MonthRate }> = ({ monthRate }) => {
  return (
    <MonthRateUl>
      <li>
        カテゴリID: <span>{monthRate.category_id}</span>
      </li>
      <li>
        カテゴリ名: <span>{monthRate.category_name}</span>
      </li>
      <li>
        カラータイプ: <span>{monthRate.color_type}</span>
      </li>
      <li>
        金額: <span>{monthRate.money}</span>
      </li>
    </MonthRateUl>
  )
}

export default MonthRateList

export const MonthRateUl = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
