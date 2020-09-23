import React, { FC } from 'react'
import styled from 'styled-components'
import { PartnerProvider } from '@/contexts/partner'
import ContentsMain from '@/components/organisms/common/ContentsMain'
import AddPartnerForm from '@/components/organisms/partner/AddPartnerForm'
import ShowPartnerList from '@/components/organisms/partner/ShowPartnerList'

const PartnerTemplate: FC = () => {
  return (
    <PartnerProvider>
      <ContentsMain>
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
      </ContentsMain>
    </PartnerProvider>
  )
}

export default PartnerTemplate

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
  min-height: 380px;
  box-sizing: border-box;
`

const ContentsRight = styled.div`
  width: 35%;
`
const ContentsLeft = styled.div`
  width: 50%;
`
