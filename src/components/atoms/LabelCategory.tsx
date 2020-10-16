import React, { FC } from 'react'
import styled from 'styled-components'
import { showCategoryLabel } from '@/utils/color'

export type Props = {
  size?: number
  name: string
  colorType: number
}

const LabelCategory: FC<Props> = ({ size, name, colorType }) => {
  return (
    <CategoryNameItem size={size ? size : 100}>
      <CategoryName name={name} type={colorType}>
        {name}
      </CategoryName>
    </CategoryNameItem>
  )
}

export default LabelCategory

export type ItemProps = {
  size: number
}

const CategoryNameItem = styled.div`
  width: ${({ size }: ItemProps) => `${size}%`};
`

export type NameProps = {
  name: string
  type: number
}

const CategoryName = styled.p`
  margin: 10px 0;
  padding: 10px 0;
  ${({ name, type }: NameProps) => showCategoryLabel(name, type)};
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #707070;
  font-weight: bold;
`
