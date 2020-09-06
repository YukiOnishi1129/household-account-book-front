import React, { FC } from 'react'
import { AnnualChange } from '../../types/api'
import styled from 'styled-components'

const AnnualChangeList: FC<{ annualChange: AnnualChange }> = ({
  annualChange,
}) => {
  return (
    <Ul>
      <li>
        年月: <span>{annualChange.month}</span>
      </li>
      <li>
        金額: <span>{annualChange.sum_money}</span>
      </li>
    </Ul>
  )
}

export default AnnualChangeList

export const Ul = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
