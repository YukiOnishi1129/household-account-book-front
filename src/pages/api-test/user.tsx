import React, { FC } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import UserSample from '../../components/api-test/UserSample'

const UserPage: FC = () => (
  <div>
    <Layout>
      <H1>user-sample</H1>
      <UserSample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default UserPage
