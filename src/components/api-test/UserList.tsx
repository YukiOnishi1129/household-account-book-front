import React, { FC } from 'react'
import { User } from '../../types/api/api'
import styled from 'styled-components'

const UserList: FC<{ user: User }> = ({ user }) => {
  return (
    <UserUl>
      <li>
        ID: <span>{user.id}</span>
      </li>
      <li>
        name: <span>{user.name}</span>
      </li>
      <li>
        email: <span>{user.email}</span>
      </li>
      <li>
        user_type: <span>{user.user_type}</span>
      </li>
      <li>
        main_user_id: <span>{user.main_user_id}</span>
      </li>
    </UserUl>
  )
}

export default UserList

export const UserUl = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
