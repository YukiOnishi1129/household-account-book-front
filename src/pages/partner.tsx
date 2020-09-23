import React, { FC, useEffect } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import PartnerTemplate from '@/components/templates/PartnerTemplate'

const Partner: FC = () => {
  return <PartnerTemplate />
}

export default ProtectRoute(Partner)
