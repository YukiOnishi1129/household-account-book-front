import React, { FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const RouteButton: FC = () => {
  const router = useRouter()
  return (
    <ButtonFlex>
      <Button onClick={() => router.push('/api-test')}>Top</Button>
      <Button onClick={() => router.push('/api-test/user')}>User</Button>
      <Button onClick={() => router.push('/api-test/calendar')}>
        Calendar
      </Button>
      <Button onClick={() => router.push('/api-test/detail')}>Detail</Button>
      <Button onClick={() => router.push('/api-test/category')}>
        Category
      </Button>
      <Button onClick={() => router.push('/api-test/graph')}>Graph</Button>
      <Button onClick={() => router.push('/api-test/partner')}>Partner</Button>
    </ButtonFlex>
  )
}

export default RouteButton

const ButtonFlex = styled.div`
  display: flex;
`

const Button = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  font-size: 20px;
`
