import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { BeforeLoginPage, AfterLoginPage } from '@/utils/consts'

const AuthForm: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const beforeLoginFlg = router.pathname !== AfterLoginPage.CHANGE_PASSWORD
  return (
    <AuthFormArea beforeLoginFlg={beforeLoginFlg}>
      {beforeLoginFlg && (
        <Link href={BeforeLoginPage.TOP}>
          <ImageArea>
            <img src="/top_logo.png" alt="ロゴ" />
          </ImageArea>
        </Link>
      )}
      <FormArea>{children}</FormArea>
    </AuthFormArea>
  )
}

export default AuthForm

export type StyleProps = {
  beforeLoginFlg: boolean
}

const AuthFormArea = styled.div`
  margin: ${({ beforeLoginFlg }: StyleProps) =>
    beforeLoginFlg ? '20px auto;' : '60px auto;'};
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
