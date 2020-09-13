import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { ProtectRoute } from '../contexts/auth'

const App: FC = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <H1>Home</H1>
        <Button onClick={() => router.push('/login')}>login</Button>
      </Layout>
    </div>
  )
}
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`
const Button = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  font-size: 20px;
`

export default ProtectRoute(App)
