import React, { FC, useState } from 'react'
import styled from 'styled-components'
import CalendarContext from '@/contexts/calendar'

const CalendarBoard: FC = () => {
  const { calendar } = CalendarContext()
  return <div>{calendar.date}</div>
}

export default CalendarBoard
