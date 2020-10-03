import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { AfterLoginPage } from '@/utils/consts'
import { FormatChangeYearMonthDate } from '@/utils/date'

export type Props = {
  nowPage: string
  date: string
}

const BeforeLink: FC<Props> = ({ nowPage, date }) => {
  return (
    <DetailLinkArea>
      <Link href={getUrl(nowPage, date)}>{getLinkWord(nowPage, date)}</Link>
    </DetailLinkArea>
  )
}

export default BeforeLink

export const getUrl = (page: string, date: string): string => {
  switch (page) {
    case AfterLoginPage.CATEGORY:
      return AfterLoginPage.DETAIL + date
    default:
      return AfterLoginPage.DASH_BOARD + date
  }
}

export const getLinkWord = (page: string, date: string): string => {
  switch (page) {
    case AfterLoginPage.CATEGORY:
      return `<< ` + FormatChangeYearMonthDate(date) + 'の金額情報へ戻る'
    default:
      return '<< カレンダーへ戻る'
  }
}

const DetailLinkArea = styled.div`
  position: absolute;
  width: 480px;
  height: 80px;
  a {
    font-size: 1rem;
    color: #d163a2;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`
