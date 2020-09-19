import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import ChangePasswordTemplate from '@/components//templates/ChangePasswordTemplate'

const ChangePassword: FC = () => {
  return <ChangePasswordTemplate />
}

export default ProtectRoute(ChangePassword)
