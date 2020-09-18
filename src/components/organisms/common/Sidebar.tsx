import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

const Sidebar: FC = () => {
  return (
    <SidebarArea>
      <Nav>
        <Navlink>
          <Link
            href={`${AfterLoginPage.DASH_BOARD}[date]`}
            as={`${AfterLoginPage.DASH_BOARD}${CurrentDate()}`}
          >
            TOP
          </Link>
        </Navlink>
        <Navlink>
          <Link href={AfterLoginPage.GRAPH}>グラフ</Link>
        </Navlink>
        <Navlink>
          <Link href={AfterLoginPage.CATEGORY}>カテゴリ</Link>
        </Navlink>
        <Navlink>
          <Link href={AfterLoginPage.PARTNER_USER}>パートナー</Link>
        </Navlink>
        <Navlink>
          <Link href={AfterLoginPage.CHANGE_PASSWORD}>パスワード</Link>
        </Navlink>
      </Nav>
    </SidebarArea>
  )
}

const SidebarArea = styled.div`
  width: 15%;
  background: #bd9df0;
`

const Nav = styled.ul`
  margin: 20px auto;
  width: 65%;
  min-height: calc(100vh - 180px);
`
const Navlink = styled.li`
  cursor: pointer;
  padding-top: 30px;
  padding-bottom: 30px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: '筑紫A丸ゴシック', sans-serif;
  }
`

export default Sidebar
