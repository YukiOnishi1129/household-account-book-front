import React, { FC } from 'react'
import styled from 'styled-components'
import DeleteIconSvg from '../../svgs/delete_icon.svg'

export type Props = {
  id: number
  size: number
  submit: (id: number) => void
}

const DeleteIcon: FC<Props> = ({ id, size, submit }) => {
  return (
    <Icon
      size={size}
      onClick={() => {
        submit(id)
      }}
    >
      <DeleteIconSvg />
    </Icon>
  )
}

export default DeleteIcon

export type StyleProps = {
  size: number
}

const Icon = styled.div`
  cursor: pointer;
  width: ${({ size }: StyleProps) => getSize(size)};
  &:hover {
    opacity: 0.7;
  }
`

const getSize = (size: number): string => {
  return size + 'px;'
}
