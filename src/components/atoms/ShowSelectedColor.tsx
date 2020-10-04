import React, { FC } from 'react'
import styled from 'styled-components'
import { showSelectedColor } from '@/utils/color'

export type Props = {
  currentValue: number
  sizeStyle?: string
  errMsg: string
}

const ShowSelectedColor: FC<Props> = ({ currentValue, sizeStyle, errMsg }) => {
  const size = sizeStyle ? sizeStyle : ''
  return (
    <>
      <SelctedColor type={currentValue} error={errMsg !== ''} size={size}>
        色を選択してください。
      </SelctedColor>
      {errMsg !== '' && <ValidErrorMsg>{errMsg}</ValidErrorMsg>}
    </>
  )
}

export default ShowSelectedColor

export type StyleProps = {
  type: number
  error: boolean
  size: string
}

const SelctedColor = styled.p`
  ${({ type, error, size }: StyleProps) => setStyle(type, error, size)};
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
  user-select: none;
`

const ValidErrorMsg = styled.p`
  padding-top: 5px;
  color: #ea352d;
`

const setStyle = (type: number, error: boolean, size: string): string => {
  let style = showSelectedColor(type, error)

  switch (size) {
    case 'dialog':
      return style
    default:
      return style + ' margin-top: 20px; padding: 19px 15px; width: 100%;'
  }
}
