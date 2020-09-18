import React, { FC } from 'react'
import styled from 'styled-components'
import LinkButton from '@/components/atoms/LinkButton'
import { LinkStatus } from '@/utils/consts'

const SignupButtonField: FC = () => {
  return (
    <ButtonArea>
      <p>アカウントをお持ちでない方はこちら</p>
      <LinkButton status={LinkStatus.SIGNUP} />
    </ButtonArea>
  )
}

export default SignupButtonField

const ButtonArea = styled.div`
  padding: 30px 60px;
  text-align: center;
  border-bottom: 1px solid #dddbdb;
  p {
    font-size: 0.875rem;
  }
`
