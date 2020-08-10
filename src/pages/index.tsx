import React, { FC } from 'react'
import Head from 'next/head'

const App: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Home</h1>
    <p>indexです。</p>
  </div>
)

export default App
