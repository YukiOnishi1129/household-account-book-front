import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import useAuth from '@/contexts/auth'
import { CurrentMonth } from '@/utils/date'

const Header: FC = () => {
  const { isAuthenticated } = useAuth()
  return (
    <HeaderArea>
      {isAuthenticated ? <AfterLoginHeader /> : <BeforeLoginHeader />}
    </HeaderArea>
  )
}
export default Header

export const BeforeLoginHeader: FC = () => {
  return (
    <>
      <Link href={BeforeLoginPage.TOP}>
        <TopLogo src="/top_logo.png" alt="TOPロゴ" />
      </Link>
      <Nav>
        <Link href={BeforeLoginPage.SIGNUP}>
          <NavLink state={LinkStatus.SIGNUP}>会員登録</NavLink>
        </Link>
        <Link href={BeforeLoginPage.LOGIN}>
          <NavLink state={LinkStatus.LOGIN}>ログイン</NavLink>
        </Link>
        <Link href={BeforeLoginPage.PATNER_LOGIN}>
          <NavLink state={LinkStatus.PARTNER_LOGIN}>パートナーログイン</NavLink>
        </Link>
      </Nav>
    </>
  )
}

export const AfterLoginHeader: FC = () => {
  const { logout } = useAuth()
  const handleSubmitLogout = async () => {
    await logout()
  }
  return (
    <>
      <Link
        href={`${AfterLoginPage.DASH_BOARD}[date]`}
        as={`${AfterLoginPage.DASH_BOARD}${CurrentMonth()}`}
      >
        <TopLogo src="/top_logo.png" />
      </Link>
      <Nav>
        <Link
          href={`${AfterLoginPage.DASH_BOARD}[date]`}
          as={`${AfterLoginPage.DASH_BOARD}${CurrentMonth()}`}
        >
          <NavLink state={LinkStatus.TOP}>TOP</NavLink>
        </Link>
        <NavLink state={LinkStatus.LOGOUT} onClick={handleSubmitLogout}>
          ログアウト
        </NavLink>
      </Nav>
    </>
  )
}

export type TProps = {
  state: string
}

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #efe2ff;
  font-family: 'PingFang HK', sans-serif;
  color: #272727;
  padding: 20px 100px;
  text-align: center;
  box-sizing: border-box;
`

const TopLogo = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const Nav = styled.ul`
  display: flex;
`

const NavLink = styled.li`
  cursor: pointer;
  margin-left: 20px;
  user-select: none;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  ${({ state }: TProps) => getNavBgColor(state)};
`

const getNavBgColor = (state: string): string => {
  switch (state) {
    case LinkStatus.LOGIN:
      return `background-color: #fff; border: 1px solid #06BADB; color: #06BADB;`
    case LinkStatus.PARTNER_LOGIN:
      return `background-color: #fff; border: 1px solid #21CE01; color: #21CE01;`
    case LinkStatus.LOGOUT:
      return `background-color: #fff; color: #ef70f4; border: 1px solid #ef70f4;`
    default:
      return `background-color: #ef70f4; border: 1px solid #ef70f4; color: #fff; &:hover{ opacity: 0.7; }`
  }
}
