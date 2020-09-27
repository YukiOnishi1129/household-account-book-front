import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export type Props = {
  children: ReactNode
  title: string
}
const DialogFormItem: FC<Props> = ({ children, title }) => {
  return (
    <FormItem>
      <ItemName>{title}</ItemName>
      {children}
    </FormItem>
  )
}

export default DialogFormItem

const FormItem = styled.div`
  display: flex;
  padding-bottom: 30px;
  font-size: 1.25rem;

  &:last-child {
    padding-bottom: 0;
  }
`

const ItemName = styled.p`
  width: 180px;
  font-size: 1.25rem;
  font-weight: bold;
`
