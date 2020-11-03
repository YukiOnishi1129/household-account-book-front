import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import { CalendarProvider } from '@/contexts/calendar'
import CalendarTemplate from '@/components/templates/CalendarTemplate'

const Calender: FC = () => {
  return (
    <CalendarProvider>
      <CalendarTemplate />
    </CalendarProvider>
  )
}

export default ProtectRoute(Calender)
