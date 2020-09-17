import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Router, { useRouter } from 'next/router'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import useAuth from '@/contexts/auth'
import { CurrentDate } from '@/utils/date'

const Header: FC = () => {
  const { isAuthenticated } = useAuth()

  return (
    <HeaderArea>
      {isAuthenticated ? <AfterLoginHeader /> : <BeforeLoginHeader />}
    </HeaderArea>
  )
}

export const BeforeLoginHeader: FC = () => {
  const router = useRouter()
  return (
    <>
      <TopLogo
        src="/top_logo.png"
        onClick={() => router.push(BeforeLoginPage.TOP)}
      />
      <Nav>
        <NavLink state={LinkStatus.SIGNUP}>
          <Link
            href={{
              pathname: BeforeLoginPage.SIGNUP,
            }}
          >
            会員登録
          </Link>
        </NavLink>
        <NavLink state={LinkStatus.LOGIN}>
          <Link
            href={{
              pathname: BeforeLoginPage.LOGIN,
            }}
          >
            ログイン
          </Link>
        </NavLink>
        <NavLink state={LinkStatus.PARTNER_LOGIN}>
          <Link
            href={{
              pathname: BeforeLoginPage.PATNER_LOGIN,
            }}
          >
            パートナーログイン
          </Link>
        </NavLink>
      </Nav>
    </>
  )
}
export const AfterLoginHeader: FC = () => {
  const router = useRouter()
  return (
    <>
      <TopLogo
        src="/top_logo.png"
        onClick={() => router.push(AfterLoginPage.DASH_BOARD + CurrentDate())}
      />
      <Nav>
        <NavLink state={LinkStatus.TOP}>
          <Link
            href={{
              pathname: AfterLoginPage.DASH_BOARD + CurrentDate(),
            }}
          >
            TOP
          </Link>
        </NavLink>
        <NavLink
          state={LinkStatus.LOGOUT}
          onClick={() => router.push(BeforeLoginPage.LOGIN)}
        >
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
    case 'login':
      return `background-color: #fff; border: 1px solid #06BADB; a { color: #06BADB; text-decoration: none; }`
    case 'partner':
      return `background-color: #fff; border: 1px solid #21CE01; a { color: #21CE01; text-decoration: none; }`
    case 'logout':
      return `background-color: #fff; color: #ef70f4; border: 1px solid #ef70f4;`
    default:
      return `background-color: #ef70f4; border: 1px solid #ef70f4; a { color: #fff; text-decoration: none; }`
  }
}
export default Header
