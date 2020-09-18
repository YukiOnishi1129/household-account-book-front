import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import useAuth from '@/contexts/auth'
import Header from '@/components/organisms/common/Header'
import Sidebar from '@/components/organisms/common/Sidebar'
import Footer from '@/components/organisms/common/Footer'

const TemplateLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return (
    <Wrapper>
      <Header />
      <Main>
        {isAuthenticated ? (
          <>
            <Sidebar />
            <Content>{children}</Content>
          </>
        ) : (
          <>{children}</>
        )}
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

const Main = styled.div`
  display: flex;
  min-height: calc(100vh - 140px);
`
const Content = styled.div`
  width: 85%;
`

export default TemplateLayout
