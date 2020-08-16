import React, { FC } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const App: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <H1 className="bg-teal-500">Home</H1>
      {/* <Box></Box> */}
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

// const Box = styled.div`
//   ${tw`bg-teal-500 h-10`};
// `

export default App
