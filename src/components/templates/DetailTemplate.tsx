import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { LinkStatus, AfterLoginPage } from '@/utils/consts'
import { DetailProvider } from '@/contexts/detail'
import TitleHeader from '@/components/organisms/common/TitleHeader'
import ContentsMain from '@/components/organisms/common/ContentsMain'
import AddDetailFrom from '@/components/organisms/detail/AddDetailForm'
import ShowDetailList from '@/components/organisms/detail/ShowDetailList'
import BeforeLink from '@/components/atoms/BeforeLink'
import SubmitButton from '@/components/atoms/SubmitButton'
import { FormatChangeYearMonthDate, ChangeFirstDate } from '@/utils/date'

const DetailTemplate: FC = () => {
  const router = useRouter()

  /**
   * カテゴリページへ遷移
   */
  const moveCategory = () => {
    //  NOTE: カテゴリーページから戻ってくる際に使用する
    localStorage.setItem('detailDate', String(router.query.date))
    router.push({
      pathname: `${AfterLoginPage.CATEGORY}`,
    })
  }
  return (
    <DetailProvider>
      <ContentsMain>
        <TitleHeader>
          <BeforeLink
            nowPage={router.pathname}
            date={ChangeFirstDate(String(router.query.date))}
          />
          <h2>
            {FormatChangeYearMonthDate(String(router.query.date))}の支出金額
          </h2>
          <CategoryLink>
            <SubmitButton
              status={LinkStatus.CATEGORY}
              submit={() => moveCategory()}
            />
          </CategoryLink>
        </TitleHeader>
        <Contents>
          <ContentsRight>
            <AddDetailFrom />
          </ContentsRight>
          <ContentsLeft>
            <ShowDetailList />
          </ContentsLeft>
        </Contents>
      </ContentsMain>
    </DetailProvider>
  )
}

export default DetailTemplate

const CategoryLink = styled.div`
  position: absolute;
  top: 0px;
  right: 100px;
  width: 200px;
`

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  min-height: 380px;
  box-sizing: border-box;
`

const ContentsRight = styled.div`
  width: 40%;
`
const ContentsLeft = styled.div`
  width: 50%;
`
