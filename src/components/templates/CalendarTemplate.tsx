import React, { FC } from 'react'
import DashBoard from '@/components/organisms/calendar/DashBoard'
import useCalendar from '@/contexts/calendar'

const CalendarTemplate: FC = () => {
  const { calendar } = useCalendar()
  return <>{calendar && calendar.date !== '' && <DashBoard />}</>
}

export default CalendarTemplate
