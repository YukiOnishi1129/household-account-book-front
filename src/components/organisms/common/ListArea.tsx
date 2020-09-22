import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const ListArea: FC<{ children: ReactNode }> = ({ children }) => {
  return <ListField>{children}</ListField>
}

export default ListArea

const ListField = styled.div`
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
  min-height: 100px;
  max-height: 330px;
  width: 80%;
  margin: 0 auto;
  overflow-y: overlay;
`
