import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { PartnerProvider } from '@/contexts/partner'
import AddPartnerForm from '@/components/organisms/partner/AddPartnerForm'
import ShowPartnerList from '@/components/organisms/partner/ShowPartnerList'

const PartnerTemplate: FC = () => {
  return (
    <PartnerProvider>
      <Mian>
        <TitleHeader>
          <h2>共有パートナー管理</h2>
        </TitleHeader>
        <Contents>
          <ContentsRight>
            <AddPartnerForm></AddPartnerForm>
          </ContentsRight>
          <ContentsLeft>
            <ShowPartnerList></ShowPartnerList>
          </ContentsLeft>
        </Contents>
      </Mian>
    </PartnerProvider>
  )
}

export default PartnerTemplate

const Mian = styled.div`
  padding: 20px;
  width: 100%;
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
`

const TitleHeader = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 1.75rem;
  font-weight: bold;
  color: #d163a2;
  text-align: center;
`
const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  min-height: 500px;
  box-sizing: border-box;
`

const ContentsRight = styled.div`
  width: 35%;
`
const ContentsLeft = styled.div`
  width: 50%;
`
