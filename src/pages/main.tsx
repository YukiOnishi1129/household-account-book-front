import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'
import ApiClient from '../network/ApiClient'

const Main: FC = () => {
  useEffect(() => {}, [])
  return (
    <div>
      <Layout>
        <H1>メイン</H1>
      </Layout>
    </div>
  )
}
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default Main
