import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import ApiClient from '../../network/ApiClient'

const Calender: FC = () => {
  const router = useRouter()
  useEffect(() => {}, [])
  return (
    <div>
      <Layout>
        <H1>カレンダー</H1>
        <p>{router.query.date}</p>
      </Layout>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default Calender
