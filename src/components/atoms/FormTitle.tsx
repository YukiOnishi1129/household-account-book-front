import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  title: string
  space?: string
}

const FormTitle: FC<Props> = ({ title, space }) => {
  const spaceSize = space ? space : 'default'
  return (
    <TitleArea space={spaceSize}>
      <h3>{title}</h3>
    </TitleArea>
  )
}

export default FormTitle

export type StyleProps = {
  space: string
}

const TitleArea = styled.div`
  ${({ space }: StyleProps) => getPadding(space)}
  text-align: center;
  h3 {
    color: #d163a2;
    font-size: 1.375em;
    font-weight: bold;
  }
`

const getPadding = (space: string): string => {
  switch (space) {
    case 'sm':
      return 'padding: 20px 40px;'
    default:
      return 'padding: 30px 60px;'
  }
}
