import React, { FC } from 'react'
import styled from 'styled-components'

const Header: FC = () => {
  return (
    <HeaderArea>
      <img src="/top_logo.png" />
      <Nav>
        <NavLink state={'signup'}>会員登録</NavLink>
        <NavLink state={'login'}>ログイン</NavLink>
        <NavLink state={'partner'}>パートナーログイン</NavLink>
      </Nav>
    </HeaderArea>
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

const Nav = styled.ul`
  display: flex;
`

export const NavLink = styled.li`
  cursor: pointer;
  margin-left: 20px;
  user-select: none;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  ${({ state }: TProps) => getNavBgColor(state)};
`

export const getNavBgColor = (state: string): string => {
  switch (state) {
    case 'login':
      return `background-color: #fff; color: #06BADB; border: 1px solid #06BADB;`
    case 'partner':
      return `background-color: #fff; color: #21CE01; border: 1px solid #21CE01;`
    default:
      return `background-color: #ef70f4; color: #fff; border: 1px solid #ef70f4;`
  }
}
export default Header
