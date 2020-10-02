import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { showColor } from '@/utils/color'

export type Props = {
  colorType: number
  checked?: boolean
}

const ColorRadioButton: FC<Props> = ({ colorType, checked }) => {
  return (
    <RadioButton type={colorType}>
      <input type="radio" name="color" />
      {checked && <CheckedColor />}
    </RadioButton>
  )
}

export default ColorRadioButton

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
