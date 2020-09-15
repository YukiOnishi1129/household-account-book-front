import React, { FC } from 'react'
import styled from 'styled-components'
import Footer from '../../organisms/common/Footer '

const BeforeLogin = ({ children }) => {
  return (
    <Wrapper>
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
