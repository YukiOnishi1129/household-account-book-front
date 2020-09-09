import React, { FC } from 'react'
import Layout from '../../components/Layout'
import RouteButton from '../../components/api-test/RouteButton'
import styled from 'styled-components'
import PartnerSample from '../../components/api-test/PartnerSample'

const PartnerPage: FC = () => (
  <Layout>
    <H1>partner-sample</H1>
    <RouteButton />
    <PartnerSample />
  </Layout>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default PartnerPage