import React, { FC } from 'react'
import styled from 'styled-components'
import EditIconSvg from '../../svgs/edit_icon.svg'

export type Props = {
  id: number
  size: number
  submit: (id: number) => void
}

const EditIcon: FC<Props> = ({ id, size, submit }) => {
  return (
    <Icon
      size={size}
      onClick={() => {
        submit(id)
      }}
    >
      <EditIconSvg />
    </Icon>
  )
}

export default EditIcon

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
