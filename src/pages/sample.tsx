import React, { FC } from 'react'
import Layout from '@/components/Layout'
import styled from 'styled-components'
import ApiSample from '@/components/ApiSample'

const Sample: FC = () => (
  <div>
    <Layout>
      <H1>sample</H1>
      <ApiSample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default Sample
