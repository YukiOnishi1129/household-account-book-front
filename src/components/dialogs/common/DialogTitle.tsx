import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  title: string
}

const DialogTitle: FC<Props> = ({ title }) => {
  return <ModalTitle>{title}</ModalTitle>
}

export default DialogTitle

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #d163a2;
`
