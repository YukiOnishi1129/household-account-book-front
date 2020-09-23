import React, { FC } from 'react'
import { LinkStatus } from '@/utils/consts'
import styled from 'styled-components'

export type Props = {
  status: string
  size?: string
  submit: VoidFunction
}

const SubmitButton: FC<Props> = ({ status, size, submit }) => {
  const styleSize = size ? size : ''
  return (
    <Button
      status={status}
      size={styleSize}
      onClick={(e) => {
        e.preventDefault()
        submit()
      }}
    >
      {getLabelName(status)}
    </Button>
  )
}

export default SubmitButton

export type StyleProps = {
  status: string
  size: string
}

const getLabelName = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return 'ログイン'
    case LinkStatus.PARTNER_LOGIN:
      return 'パートナーログイン'
    case LinkStatus.SIGNUP:
      return '新規会員登録'
    case LinkStatus.SUBMIT:
      return '送信'
    case LinkStatus.CHANGE:
      return '変更'
    case LinkStatus.REGISTER:
      return '登録'
    default:
      return 'TOP'
  }
}

const Button = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  ${({ status, size }: StyleProps) => getStyle(status, size)}
  &:hover {
    opacity: 0.7;
  }
`

const getStyle = (status: string, size: string): string => {
  const styleSize = getButtonSize(size)
  const styleStatus = getNavBgColor(status)

  return styleSize + styleStatus
}

const getButtonSize = (size: string): string => {
  switch (size) {
    case 'sm':
      return 'width: 30%; margin-right: auto; margin-left: auto;'
    case 'md':
      return 'width: 50%; margin-right: auto; margin-left: auto;'
    default:
      return 'width: 100%;'
  }
}

const getNavBgColor = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return `background-color: #06BADB; border: 1px solid #06BADB;`
    case LinkStatus.PARTNER_LOGIN:
      return `background-color: #21CE01; border: 1px solid #21CE01;`
    case LinkStatus.SIGNUP:
      return `background-color: #ef70f4; border: 1px solid #ef70f4;`
    default:
      return `background-color: #BD9DF0; border: 1px solid #BD9DF0;`
  }
}
