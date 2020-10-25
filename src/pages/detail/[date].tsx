import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProtectRoute } from '@/contexts/auth'
import DetailTemplate from '@/components/templates/DetailTemplate'
import styled from 'styled-components'
import ApiClient from '@/network/ApiClient'
import { LinkStatus, BeforeLoginPage, AfterLoginPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

const Detail: FC = () => {
  return <DetailTemplate />
}

export default ProtectRoute(Detail)
