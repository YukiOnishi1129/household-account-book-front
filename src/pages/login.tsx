import React, { FC } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Login: FC = () => (
  <div>
    <Head>
      <title>ログイン</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <H1>ログイン</H1>
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default Login
