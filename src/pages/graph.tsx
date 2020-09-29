import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProtectRoute } from '@/contexts/auth'
import styled from 'styled-components'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

const Graph: FC = () => {
  const router = useRouter()
  return (
    <div>
      <H1>グラフ</H1>
      <div>
        <Link
          href={`${AfterLoginPage.DETAIL}[date]`}
          as={`${AfterLoginPage.DETAIL}${CurrentDate()}`}
        >
          日別
        </Link>
      </div>
      <div onClick={() => router.push(AfterLoginPage.GRAPH)}>グラフ</div>
      <div onClick={() => router.push(AfterLoginPage.PARTNER_USER)}>
        パートナー
      </div>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default ProtectRoute(Graph)
