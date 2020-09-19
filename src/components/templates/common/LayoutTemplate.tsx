import React, { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useAuth from '@/contexts/auth'
import Header from '@/components/organisms/common/Header'
import Sidebar from '@/components/organisms/common/Sidebar'
import Footer from '@/components/organisms/common/Footer'
import { isShowHeader } from '@/utils/pages'

const LayoutTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const isHeader = isShowHeader(router)

  return (
    <Wrapper>
      {!isHeader && <Header />}
      <Main isPages={isHeader}>
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

export type TProps = {
  isPages: boolean
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

const Main = styled.div`
  display: flex;
  min-height: ${({ isPages }: TProps) =>
    isPages ? 'calc(100vh - 60px);' : 'calc(100vh - 140px);'};
`
const Content = styled.div`
  width: 85%;
`

export default LayoutTemplate
