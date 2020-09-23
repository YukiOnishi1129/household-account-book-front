import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const ContentsMain: FC<{ children: ReactNode }> = ({ children }) => {
  return <Main>{children}</Main>
}

export default ContentsMain

const Main = styled.div`
  padding: 20px;
  width: 100%;
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
`
