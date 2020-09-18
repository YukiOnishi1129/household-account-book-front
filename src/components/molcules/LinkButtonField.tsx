import React, { FC } from 'react'
import styled from 'styled-components'
import LinkButton from '@/components/atoms/LinkButton'
import { LinkStatus } from '@/utils/consts'

export type Props = {
  status: string
}

const LinkButtonField: FC<Props> = ({ status }) => {
  return (
    <ButtonArea status={status}>
      <p>{getStatusMessgae(status)}</p>
      <LinkButton status={status} />
    </ButtonArea>
  )
}

export default LinkButtonField

const getStatusMessgae = (status: string): string => {
  switch (status) {
    case LinkStatus.SIGNUP:
      return 'アカウントをお持ちでない方はこちら'
    case LinkStatus.LOGIN:
      return 'メインでのご利用の方はこちら'
    case LinkStatus.PARTNER_LOGIN:
      return 'パートナーの方はこちら'
    default:
      return ''
  }
}

export type TProps = {
  status: string
}

const ButtonArea = styled.div`
  padding: 30px 60px;
  text-align: center;
  ${({ status }: TProps) => getStatusStyle(status)};
  p {
    font-size: 0.875rem;
  }
`

const getStatusStyle = (status: string): string => {
  switch (status) {
    case LinkStatus.SIGNUP:
      return 'border-bottom: 1px solid #dddbdb;'
    default:
      return ''
  }
}
