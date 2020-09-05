import React, { FC } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import CalendarSample from '../../components/api-test/CalendarSample'

const CalendarPage: FC = () => (
  <div>
    <Layout>
      <H1>calendar-sample</H1>
      <CalendarSample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default CalendarPage
