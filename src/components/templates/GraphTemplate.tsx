import React, { FC } from 'react'
import styled from 'styled-components'
import { GraphProvider } from '@/contexts/graph'
import TitleHeader from '@/components/organisms/common/TitleHeader'
import ContentsMain from '@/components/organisms/common/ContentsMain'
import MonthRate from '@/components/organisms/graph/MonthRate'
import AnnualChange from '@/components/organisms/graph/AnnualChange'

const GraphTemplate: FC = () => {
  return (
    <GraphProvider>
      <ContentsMain>
        {/* <TitleHeader>
          <h2>グラフ</h2>
        </TitleHeader> */}
        <Contents>
          <ContentsRight>
            <MonthRate />
          </ContentsRight>
          <ContentsLeft>
            <AnnualChange />
          </ContentsLeft>
        </Contents>
      </ContentsMain>
    </GraphProvider>
  )
}

export default GraphTemplate

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  min-height: 380px;
  box-sizing: border-box;
`

const ContentsRight = styled.div`
  width: 45%;
`
const ContentsLeft = styled.div`
  width: 45%;
`
