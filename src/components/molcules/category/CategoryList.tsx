import React, { FC } from 'react'
import styled from 'styled-components'
import EditIcon from '@/components/atoms/EditIcon'
import DeleteIcon from '@/components/atoms/DeleteIcon'
import { showCategoryLabel } from '@/utils/color'

export type Props = {
  id: number
  name: string
  colorType: number
  editSubmit: (id: number, name: string, colorType: number) => void
  deleteSubmit: (id: number, name: string, colorType: number) => void
}

const CategoryList: FC<Props> = ({
  id,
  name,
  colorType,
  editSubmit,
  deleteSubmit,
}) => {
  return (
    <List key={id}>
      <CategoryName name={name} type={colorType}>
        <p>{name}</p>
      </CategoryName>
      <IconArea>
        <EditIcon
          id={id}
          size={30}
          submit={() => {
            editSubmit(id, name, colorType)
          }}
        />
        <DeleteIcon
          id={id}
          size={30}
          submit={() => {
            deleteSubmit(id, name, colorType)
          }}
        />
      </IconArea>
    </List>
  )
}

export default CategoryList

export type StyleProps = {
  name: string
  type: number
}

const List = styled.div`
  display: flex;
  position: relative;

  width: 50%;
  height: 100px;
`

const CategoryName = styled.div`
  width: 40%;

  p {
    margin: 30px 0;
    padding: 10px 0;
    ${({ name, type }: StyleProps) => showCategoryLabel(name, type)};
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #707070;
    font-weight: bold;
  }
`
const IconArea = styled.div`
  display: flex;
  margin-left: 20px;
  width: 50%;
  line-height: 120px;

  div:first-child {
    margin-right: 10px;
  }
`
