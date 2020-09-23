import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const ContentsForm: FC<{ children: ReactNode }> = ({ children }) => {
  return <ContentsFormArea>{children}</ContentsFormArea>
}

export default ContentsForm

const ContentsFormArea = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  background: #faf4f9;
`
