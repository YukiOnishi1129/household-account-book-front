import React, { FC } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import DetailSample from '../../components/api-test/DetailSample'

const DetailPage: FC = () => (
  <div>
    <Layout>
      <H1>detail-sample</H1>
      <DetailSample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default DetailPage
