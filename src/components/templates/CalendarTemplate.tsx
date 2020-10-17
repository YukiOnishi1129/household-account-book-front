import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import CalendarBoard from '@/components/organisms/calendar/CalendarBoard'
import CalendarContext, { CalendarProvider } from '@/contexts/calendar'

const CalendarTemplate: FC = () => {
  return (
    <CalendarProvider>
      <CalendarBoard></CalendarBoard>
    </CalendarProvider>
  )
}

export default CalendarTemplate
