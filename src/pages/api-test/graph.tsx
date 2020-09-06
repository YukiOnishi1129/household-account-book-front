import React, { FC } from 'react'
import Layout from '../../components/Layout'
import RouteButton from '../../components/api-test/RouteButton'
import styled from 'styled-components'
import GraphSample from '../../components/api-test/GraphSample'

const GraphPage: FC = () => (
  <div>
    <Layout>
      <H1>graph-sample</H1>
      <RouteButton />
      <GraphSample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default GraphPage
