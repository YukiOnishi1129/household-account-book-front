import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  title: string
}

const FormTitle: FC<Props> = ({ title }) => {
  return (
    <TitleArea>
      <h3>{title}</h3>
    </TitleArea>
  )
}

export default FormTitle

const TitleArea = styled.div`
  padding: 30px 60px;
  text-align: center;
  h3 {
    color: #d163a2;
    font-size: 1.375em;
    font-weight: bold;
  }
`
