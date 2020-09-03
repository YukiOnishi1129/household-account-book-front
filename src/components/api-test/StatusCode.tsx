import React, { FC } from 'react'
import styled from 'styled-components'

const StatusCode: FC<{ code: number }> = ({ code }) => {
  return (
    <UserUl>
      <li>
        STATUS: <span>{code}</span>
      </li>
    </UserUl>
  )
}

export default StatusCode

export const UserUl = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
