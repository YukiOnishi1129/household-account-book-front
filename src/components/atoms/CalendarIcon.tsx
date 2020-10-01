import React, { FC } from 'react'
import styled from 'styled-components'
import CalendarIconSvg from '../../svgs/calendar_icon.svg'

export type Props = {
  id: number
  size: number
  submit: (id: number) => void
}

const CalendarIcon: FC<Props> = ({ id, size, submit }) => {
  return (
    <Icon
      size={size}
      onClick={() => {
        submit(id)
      }}
    >
      <CalendarIconSvg />
    </Icon>
  )
}

export default CalendarIcon

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
