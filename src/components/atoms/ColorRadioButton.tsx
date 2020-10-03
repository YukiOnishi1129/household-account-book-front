import React, { FC } from 'react'
import styled from 'styled-components'
import { Category } from '@/types/api'
import { EventType } from '@/types/events'
import { showColor } from '@/utils/color'

export type Props = {
  categories: Category[]
  value: number
  currentValue: number
  changeValue: EventType['onChange']
}

const ColorRadioButton: FC<Props> = ({
  categories,
  value,
  currentValue,
  changeValue,
}) => {
  const isChecked = currentValue === value
  return (
    <>
      {unUsedColorType(value, categories) ? (
        <RadioButton type={value}>
          <input
            type="radio"
            name="color"
            value={value}
            checked={isChecked}
            onChange={(event) => {
              changeValue(event)
            }}
          />
          {isChecked && <CheckedColor />}
        </RadioButton>
      ) : (
        <UserColor type={value} />
      )}
    </>
  )
}

export default ColorRadioButton

const unUsedColorType = (
  colorType: number,
  categories: Category[]
): boolean => {
  return (
    categories.filter((c) => {
      return c.color_type === colorType
    }).length === 0
  )
}

export type StyleProps = {
  type: number
}

const RadioButton = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 50px;
  line-height: 50px;
  background-color: ${({ type }: StyleProps) => showColor(type)};
  border-radius: 20px;
  border: 1px solid #707070;

  &:hover {
    opacity: 0.7;
  }

  input[type='radio'] {
    display: none;
  }
`

const CheckedColor = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  width: 70px;
  height: 60px;
  border: 3px solid #85c0f2;
  border-radius: 20px;
`

const UserColor = styled.div`
  opacity: 0.3;
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 50px;
  line-height: 50px;
  background-color: ${({ type }: StyleProps) => showColor(type)};
  border-radius: 20px;
  border: 1px solid #707070;
`
