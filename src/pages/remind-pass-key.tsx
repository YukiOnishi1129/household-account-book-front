import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import RemindPassKeyTemplate from '@/components//templates/RemindPassKeyTemplate'

const RemindPassKey: FC = () => {
  return <RemindPassKeyTemplate />
}

export default ProtectRoute(RemindPassKey)
