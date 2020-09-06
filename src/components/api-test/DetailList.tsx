import React, { FC } from 'react'
import { Detail } from '../../types/api'
import styled from 'styled-components'

const DetailList: FC<{ detail: Detail }> = ({ detail }) => {
  return (
    <DetailUl>
      <li>
        ID: <span>{detail.id}</span>
      </li>
      <li>
        金額: <span>{detail.money}</span>
      </li>
      <li>
        画像ファイル: <span>{detail.img_file}</span>
      </li>
      <li>
        カテゴリID: <span>{detail.category_id}</span>
      </li>
      <li>
        カテゴリ名: <span>{detail.category_name}</span>
      </li>
    </DetailUl>
  )
}

export default DetailList

export const DetailUl = styled.ul`
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  box-sizing: border-box;
  list-style: none;
`
