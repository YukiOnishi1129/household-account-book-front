import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const TitleHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <Header>{children}</Header>
}

export default TitleHeader

const Header = styled.div`
  position: relative;
  height: 80px;
  line-height: 80px;
  font-size: 1.75rem;
  font-weight: bold;
  color: #d163a2;
  text-align: center;
`
