import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export type Props = {
  children: ReactNode
}

const DialogButtonGroup: FC<Props> = ({ children }) => {
  return <ButtonGroup>{children}</ButtonGroup>
}

export default DialogButtonGroup

const ButtonGroup = styled.div`
  display: flex;
`
