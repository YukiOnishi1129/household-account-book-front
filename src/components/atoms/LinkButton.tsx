import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import styled from 'styled-components'

const LinkButton: FC<{ status: string }> = ({ status }) => {
  return (
    <Link href={getUrl(status)}>
      <Button status={status}>{getLabelName(status)}</Button>
    </Link>
  )
}

export default LinkButton

export type TProps = {
  status: string
}

const getLabelName = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return 'ログイン'
    case LinkStatus.PARTNER_LOGIN:
      return 'パートナーログイン'
    case LinkStatus.SIGNUP:
      return '新規会員登録'
    default:
      return 'TOP'
  }
}

const getUrl = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return BeforeLoginPage.LOGIN
    case LinkStatus.PARTNER_LOGIN:
      return BeforeLoginPage.PATNER_LOGIN
    case LinkStatus.SIGNUP:
      return BeforeLoginPage.SIGNUP
    default:
      return '/'
  }
}

const Button = styled.div`
  cursor: pointer;
  margin: 20px auto;
  width: 60%;
  height: 40px;
  line-height: 40px;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  ${({ status }: TProps) => getNavBgColor(status)};
`

const getNavBgColor = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return `background-color: #06BADB; border: 1px solid #06BADB;`
    case LinkStatus.PARTNER_LOGIN:
      return `background-color: #21CE01; border: 1px solid #21CE01;`
    case LinkStatus.SIGNUP:
      return `background-color: #ef70f4; border: 1px solid #ef70f4;`
    default:
      return ''
  }
}
