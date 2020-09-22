import React, { FC, useState } from 'react'
import styled from 'styled-components'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import ListArea from '@/components/organisms/common/ListArea'
import FormTitle from '@/components/atoms/FormTitle'

const ShowPartnerList: FC = () => {
  return (
    <ContentsForm>
      <FormTitle title="共有パートナー一覧" space="sm" />
      <ListArea>
        <List>
          <ListDetail>
            <p>大西 太郎</p>
            <p>test@test.com</p>
          </ListDetail>
          <DeleteIcon>
            <img src="/icon/delete_icon.svg" alt="" />
          </DeleteIcon>
        </List>
      </ListArea>
    </ContentsForm>
  )
}

export default ShowPartnerList

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
