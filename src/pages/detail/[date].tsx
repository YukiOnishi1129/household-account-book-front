import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import DetailTemplate from '@/components/templates/DetailTemplate'

const Detail: FC = () => {
  return <DetailTemplate />
}

export default ProtectRoute(Detail)
