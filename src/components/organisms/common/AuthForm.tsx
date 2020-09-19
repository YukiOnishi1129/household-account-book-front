import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { BeforeLoginPage } from '@/utils/consts'

const AuthForm: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthFormArea>
      <Link href={BeforeLoginPage.TOP}>
        <ImageArea>
          <img src="/top_logo.png" alt="ロゴ" />
        </ImageArea>
      </Link>
      <FormArea>{children}</FormArea>
    </AuthFormArea>
  )
}

export default AuthForm

const AuthFormArea = styled.div`
  margin: 20px auto;
  width: 40%;
`
const ImageArea = styled.div`
  cursor: pointer;
  height: 100px;
  &:hover {
    opacity: 0.7;
  }

  img {
    display: block;
    margin: 0 auto;
    padding: 30px 0;
  }
`
const FormArea = styled.div`
  min-height: 400px;
  border-radius: 20px;
  background: #faf4f9;
`
