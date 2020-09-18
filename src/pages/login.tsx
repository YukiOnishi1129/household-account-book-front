import React, { FC, useState, useContext } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import LoginTemplate from '@/components//templates/LoginTemplate'

const Login: FC = () => {
  return <LoginTemplate />
}

export default ProtectRoute(Login)
