import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../../organisms/common/Header'
import Footer from '../../organisms/common/Footer'

const BeforeLogin: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export default BeforeLogin
