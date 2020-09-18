import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const AuthForm: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthFormArea>
      <ImageArea>
        <img src="/top_logo.png" alt="ロゴ" />
      </ImageArea>
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
  height: 100px;

  img {
    display: block;
    margin: 0 auto;
    padding: 30px 0;
  }
`
const FormArea = styled.div`
  min-height: 400px;
  border-radius: 10px;
  background: #faf4f9;
`
