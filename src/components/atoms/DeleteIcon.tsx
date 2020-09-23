import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  id: number
  size?: string
  submit: (id: number) => void
}

const DeleteIcon: FC<Props> = ({ id, size, submit }) => {
  const styleSize = size ? size : 'default'
  return (
    <Icon
      src="/icon/delete_icon.svg"
      alt="削除アイコン"
      size={styleSize}
      onClick={() => {
        submit(id)
      }}
    />
  )
}

export default DeleteIcon

export type StyleProps = {
  size: string
}

const Icon = styled.img`
  cursor: pointer;
  width: ${({ size }: StyleProps) => getSize(size)};
`

const getSize = (size: string): string => {
  switch (size) {
    case 'sm':
      return '20%;'
    default:
      return '40%;'
  }
}
