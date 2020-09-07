import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Partner, RequestPartner } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import PartnerList from './PartnerList'
import StatusCode from './StatusCode'

const PartnerSample: FC = () => {
  const [getPartners, setGetPartners] = useState(initialPartners)
  const [addPartner, setAddPartner] = useState(initialPatner)
  const [deletePatnerStatus, setDeletePatnerStatus] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const getPartnerFunc = async () => {
      try {
        const res = await ApiClient.partner.getPartners()
        setGetPartners(res.data)
      } catch (error) {
        router.push('/api-test')
      }
    }
    const addPartnerFunc = async () => {
      try {
        const res = await ApiClient.partner.addPartner(requestPartnerParameter)
        setAddPartner(res.data)
      } catch (error) {
        router.push('/api-test')
      }
    }
    const deletePartnerFunc = async () => {
      try {
        const res = await ApiClient.partner.deletePartner(1)
        setDeletePatnerStatus(res.status)
      } catch (error) {
        router.push('/api-test')
      }
    }
    getPartnerFunc()
    addPartnerFunc()
    deletePartnerFunc()
  }, [])
  return (
    <>
      <h1>Partner Sample</h1>
      <h2>No.21: get partner</h2>
      <PartnerDiv>
        {getPartners.map((partner, index) => {
          return <PartnerList key={index} partner={partner} />
        })}
      </PartnerDiv>
      <h2>No.22: add partner</h2>
      {addPartner && <PartnerList partner={addPartner} />}
      <h2>No.23: delete partner</h2>
      <StatusCode code={deletePatnerStatus} />
    </>
  )
}

export default PartnerSample

export const initialPartners: Partner[] = [
  {
    id: 0,
    name: '',
    email: '',
  },
]

export const initialPatner: Partner = {
  id: 0,
  name: '',
  email: '',
}

export const requestPartnerParameter: RequestPartner = {
  id: 0,
  name: '',
  email: '',
}

export const PartnerDiv = styled.div`
  display: flex;
`
