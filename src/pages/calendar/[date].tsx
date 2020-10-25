import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import CalendarTemplate from '@/components/templates/CalendarTemplate'

const Calender: FC = () => {
  return <CalendarTemplate />
}

export default ProtectRoute(Calender)
