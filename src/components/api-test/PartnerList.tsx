import React, { FC } from 'react'
import { Partner } from '../../types/api'
import styled from 'styled-components'

const PartnerList: FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <Ul>
      <li>
        ID: <span>{partner.id}</span>
      </li>
      <li>
        名前: <span>{partner.name}</span>
      </li>
      <li>
        Email: <span>{partner.email}</span>
      </li>
    </Ul>
  )
}

export default PartnerList

export const Ul = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
