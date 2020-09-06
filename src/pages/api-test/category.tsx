import React, { FC } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import CategorySample from '../../components/api-test/CategorySample'

const CategoryPage: FC = () => (
  <div>
    <Layout>
      <H1>category-sample</H1>
      <CategorySample />
    </Layout>
  </div>
)
const H1 = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`

export default CategoryPage
