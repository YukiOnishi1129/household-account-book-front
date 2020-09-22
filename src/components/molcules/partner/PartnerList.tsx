import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Partner } from '@/types/api/'

export type Props = {
  id: number
  name: string
  email: string
  submit: (id: number) => void
}

const PartnerList: FC<Props> = ({ id, name, email, submit }) => {
  return (
    <List>
      <ListDetail>
        <p>{name}</p>
        <p>{email}</p>
      </ListDetail>
      <DeleteIcon>
        <img
          src="/icon/delete_icon.svg"
          alt=""
          onClick={() => {
            submit(id)
          }}
        />
      </DeleteIcon>
    </List>
  )
}

export default PartnerList

const List = styled.div`
  display: flex;
  height: 100px;
  border-bottom: 1px solid #707070;
  &:last-child {
    border-bottom: none;
  }
`
const ListDetail = styled.div`
  width: 70%;
  p {
    padding: 15px 20px;
    font-size: 20px;
  }
  p:first-child {
    padding: 20px 20px 10px 20px;
  }
  p:last-child {
    padding: 10px 20px 20px 20px;
  }
`

const DeleteIcon = styled.div`
  width: 30%;
  text-align: center;
  line-height: 130px;
  img {
    cursor: pointer;
    width: 40%;
  }
`
