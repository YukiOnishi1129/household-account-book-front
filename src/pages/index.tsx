import React, { FC } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

const App: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <H1>Home</H1>
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
`

export default App
