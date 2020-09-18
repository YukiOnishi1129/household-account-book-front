import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import PartnerLoginTemplate from '@/components/templates/PartnerLoginTemplate'

const PartnerLogin: FC = () => {
  return <PartnerLoginTemplate />
}

export default ProtectRoute(PartnerLogin)
