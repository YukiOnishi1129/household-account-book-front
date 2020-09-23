import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

const Sidebar: FC = () => {
  return (
    <SidebarArea>
      <Nav>
        <Link
          href={`${AfterLoginPage.DASH_BOARD}[date]`}
          as={`${AfterLoginPage.DASH_BOARD}${CurrentDate()}`}
        >
          <Navlink>TOP</Navlink>
        </Link>

        <Link href={AfterLoginPage.GRAPH}>
          <Navlink>グラフ</Navlink>
        </Link>

        <Link href={AfterLoginPage.CATEGORY}>
          <Navlink>カテゴリ</Navlink>
        </Link>

        <Link href={AfterLoginPage.PARTNER_USER}>
          <Navlink>パートナー</Navlink>
        </Link>

        <Link href={AfterLoginPage.CHANGE_PASSWORD}>
          <Navlink>パスワード</Navlink>
        </Link>
      </Nav>
    </SidebarArea>
  )
}

const SidebarArea = styled.div`
  width: 15%;
  background: #bd9df0;
`

const Nav = styled.ul`
  min-height: calc(100vh - 180px);
`
const Navlink = styled.li`
  cursor: pointer;
  padding: 40px;
  background: #bd9df0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    filter: brightness(80%);
  }
`

export default Sidebar
