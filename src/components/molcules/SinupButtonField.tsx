import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import LinkButton from '@/components/atoms/LinkButton'
import { LinkStatus } from '@/utils/consts'

const SignupButtonField: FC = () => {
  return (
    <ButtonArea>
      <p>アカウントをお持ちの方はこちら</p>
      <LinkButton status={LinkStatus.SIGNUP} />
    </ButtonArea>
  )
}

export default SignupButtonField

const ButtonArea = styled.div`
  padding: 30px 20px;
  text-align: center;
`
