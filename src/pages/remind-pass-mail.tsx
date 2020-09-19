import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import SignTemplate from '@/components//templates/SignupTemplate'

const RemindPassMail: FC = () => {
  return <SignTemplate />
}

export default ProtectRoute(RemindPassMail)
