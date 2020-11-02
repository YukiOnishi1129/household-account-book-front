import React, { FC } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@/components/atoms/DeleteIcon'

export type Props = {
  id: number
  name: string
  email: string
  submit: (id: number, name: string, email: string) => void
}

const PartnerList: FC<Props> = ({ id, name, email, submit }) => {
  return (
    <_List>
      <_ListDetail>
        <p>{name}</p>
        <p>{email}</p>
      </_ListDetail>
      <_DeleteIconArea>
        <DeleteIcon
          id={id}
          size={50}
          submit={() => {
            submit(id, name, email)
          }}
        />
      </_DeleteIconArea>
    </_List>
  )
}

export default PartnerList

const _List = styled.div`
  position: relative;
  display: flex;
  height: 100px;
  border-bottom: 1px solid #707070;
  &:last-child {
    border-bottom: none;
  }
`
const _ListDetail = styled.div`
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

const _DeleteIconArea = styled.div`
  width: 30%;
  padding: 25px 0;
  text-align: center;
  img:hover {
    opacity: 0.7;
  }
  /* img:hover + p {
    display: block;
  } */
`
