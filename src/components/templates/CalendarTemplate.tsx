import React, { FC } from 'react'
import DashBoard from '@/components/organisms/calendar/DashBoard'
import { CalendarProvider } from '@/contexts/calendar'

const CalendarTemplate: FC = () => {
  return (
    <CalendarProvider>
      <DashBoard />
    </CalendarProvider>
  )
}

export default CalendarTemplate
