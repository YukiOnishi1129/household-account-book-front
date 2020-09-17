import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProtectRoute } from '@/contexts/auth'
import Layout from '@/components/Layout'
import styled from 'styled-components'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

const Partner: FC = () => {
  const router = useRouter()
  return (
    <div>
      <Layout>
        <H1>パートナー</H1>
        <Link
          href={{
            pathname: AfterLoginPage.DETAIL + CurrentDate(),
          }}
        >
          日別
        </Link>
        <div onClick={() => router.push(AfterLoginPage.GRAPH)}>グラフ</div>
        <div onClick={() => router.push(AfterLoginPage.PARTNER_USER)}>
          パートナー
        </div>
      </Layout>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default ProtectRoute(Partner)
