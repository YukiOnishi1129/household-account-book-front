import React, { FC } from 'react'
import styled from 'styled-components'
import EditIcon from '@/components/atoms/EditIcon'
import DeleteIcon from '@/components/atoms/DeleteIcon'

export type Props = {
  id: number
  money: number
  img_file: string
  color_type: number
  category_name: string
}

const DetailList: FC<Props> = ({
  id,
  money,
  img_file,
  color_type,
  category_name,
}) => {
  return <_List></_List>
}

export default DetailList

const _List = styled.div`
  position: relative;
  display: flex;
  height: 100px;
  border-bottom: 1px solid #707070;
  &:last-child {
    border-bottom: none;
  }
`
