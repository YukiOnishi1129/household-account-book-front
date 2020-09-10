import React, { FC } from 'react'
import Layout from '../../components/Layout'
import RouteButton from '../../components/api-test/RouteButton'
import styled from 'styled-components'

const SamplePage: FC = () => (
  <div>
    <Layout>
      <H1>sample</H1>
      <RouteButton />
    </Layout>
  </div>
)

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default SamplePage
