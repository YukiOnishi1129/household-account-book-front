import React, { FC } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@/components/atoms/DeleteIcon'

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
      <DeleteIconArea>
        <DeleteIcon
          id={id}
          submit={() => {
            submit(id)
          }}
        />
      </DeleteIconArea>
    </List>
  )
}

export default PartnerList

const List = styled.div`
  position: relative;
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

const DeleteIconArea = styled.div`
  width: 30%;
  padding: 20px 0;
  text-align: center;
  img:hover {
    opacity: 0.7;
  }
  /* img:hover + p {
    display: block;
  } */
`
