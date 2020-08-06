import React, { FC } from 'react'
import Head from 'next/head'

const test = 12

const Home: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Home</div>
  </div>
)

export default Home
