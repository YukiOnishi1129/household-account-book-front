import React, { FC } from 'react'
import styled from 'styled-components'
import { showSelectedColor } from '@/utils/color'

export type Props = {
  currentValue: number
}

const ShowSelectedColor: FC<Props> = ({ currentValue }) => {
  return <SelctedColor type={currentValue}>色を選択してください。</SelctedColor>
}

export default ShowSelectedColor

export type StyleProps = {
  type: number
}

const SelctedColor = styled.p`
  padding: 19px 15px;
  ${({ type }: StyleProps) => showSelectedColor(type)};
  width: 100%;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
  user-select: none;
`
