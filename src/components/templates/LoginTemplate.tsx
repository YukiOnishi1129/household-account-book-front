import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import AuthForm from '@/components/organisms/common/AuthForm'
import SignupButtonField from '@/components/molcules/SinupButtonField'

const LoginTemplate: FC = () => {
  return (
    <AuthForm>
      <SignupButtonField />
    </AuthForm>
  )
}

export default LoginTemplate
