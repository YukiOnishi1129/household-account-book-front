import React, { FC, useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import RouteButton from '../../components/api-test/RouteButton'
import styled from 'styled-components'
import ApiClient from '../../network/ApiClient'

const SamplePage: FC = () => {
  useEffect(() => {
    let unmounted = false
    const cookieFunc = async () => {
      const res = await ApiClient.csrfCookie.sanctum()
    }
    cookieFunc()
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <div>
      <Layout>
        <H1>sample</H1>
        <RouteButton />
      </Layout>
    </div>
  )
}

const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default SamplePage
