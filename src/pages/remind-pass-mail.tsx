import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import RemindPassMailTemplate from '@/components//templates/RemindPassMailTemplate'

const RemindPassMail: FC = () => {
  return <RemindPassMailTemplate />
}

export default ProtectRoute(RemindPassMail)
