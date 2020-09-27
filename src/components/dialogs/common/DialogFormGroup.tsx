import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export type Props = {
  children: ReactNode
}

const DialogFormGroup: FC<Props> = ({ children }) => {
  return <FormGroup>{children}</FormGroup>
}

export default DialogFormGroup

const FormGroup = styled.div`
  padding-top: 40px;
  padding-bottom: 30px;
  box-sizing: border-box;
`
