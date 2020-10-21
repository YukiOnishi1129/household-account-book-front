import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import DashBoard from '@/components/organisms/calendar/DashBoard'
import CalendarContext, { CalendarProvider } from '@/contexts/calendar'

const CalendarTemplate: FC = () => {
  return (
    <CalendarProvider>
      <DashBoard />
    </CalendarProvider>
  )
}

export default CalendarTemplate
