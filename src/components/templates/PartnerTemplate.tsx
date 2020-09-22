import React, { FC, useState } from 'react'
import styled from 'styled-components'
import ContentsForm from '@/components/organisms/common/ContentsForm'

const PartnerTemplate: FC = () => {
  return (
    <Mian>
      <TitleHeader>
        <h2>共有パートナー管理</h2>
      </TitleHeader>
      <Contents>
        <ContentsRight>
          <ContentsForm>
            <div>aaa</div>
          </ContentsForm>
        </ContentsRight>
        <ContentsLeft>
          <ContentsForm>
            <div>aaa</div>
          </ContentsForm>
        </ContentsLeft>
      </Contents>
    </Mian>
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
