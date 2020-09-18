import React, { FC } from 'react'
import { LinkStatus } from '@/utils/consts'
import styled from 'styled-components'

export type Props = {
  status: string
  submit: VoidFunction
}

const SubmitButton: FC<Props> = ({ status, submit }) => {
  return (
    <Button
      status={status}
      onClick={() => {
        submit()
      }}
    >
      {getLabelName(status)}
    </Button>
  )
}

export default SubmitButton

export type TProps = {
  status: string
}

const getLabelName = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return 'ログイン'
    case LinkStatus.PARTNER_LOGIN:
      return 'パートナーログイン'
    case LinkStatus.SIGNUP:
      return '新規会員登録'
    default:
      return 'TOP'
  }
}

const Button = styled.div`
  cursor: pointer;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  ${({ status }: TProps) => getNavBgColor(status)};
  &:hover {
    opacity: 0.7;
  }
`

const getNavBgColor = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return `background-color: #06BADB; border: 1px solid #06BADB;`
    case LinkStatus.PARTNER_LOGIN:
      return `background-color: #21CE01; border: 1px solid #21CE01;`
    case LinkStatus.SIGNUP:
      return `background-color: #ef70f4; border: 1px solid #ef70f4;`
    default:
      return ''
  }
}
