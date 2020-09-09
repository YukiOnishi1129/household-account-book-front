import React, { FC, useState, useEffect } from 'react'
import { Detail, RequestDetail } from '../../types/api'
import ApiClient from '../../network/ApiClient'
import styled from 'styled-components'
import DetailList from './DetailList'
import StatusCode from './StatusCode'

const DetailSample: FC = () => {
  const [getDetails, setGetDetail] = useState(initailDetails)
  const [addDetail, setAddDetail] = useState(initailDetail)
  const [edittDetail, setEditGetDetail] = useState(initailDetail)
  const [deleteDetailStatus, setDeleteDetailStatus] = useState(0)

  useEffect(() => {
    let unmounted = false
    const getDetailFunc = async () => {
      const res = await ApiClient.detail.getDetails('2020-05-01')
      if (!unmounted) {
        setGetDetail(res.data)
      }
    }
    const addDetailFunc = async () => {
      const res = await ApiClient.detail.addDetail(requestDetailParameter)
      if (!unmounted) {
        setAddDetail(res.data)
      }
    }
    const editDetailFunc = async () => {
      const res = await ApiClient.detail.editDetail(1, requestDetailParameter)
      if (!unmounted) {
        setEditGetDetail(res.data)
      }
    }
    const deleteDetailFunc = async () => {
      const res = await ApiClient.detail.deleteDetail(1)
      if (!unmounted) {
        setDeleteDetailStatus(res.status)
      }
    }
    getDetailFunc()
    addDetailFunc()
    editDetailFunc()
    deleteDetailFunc()
    return () => {
      unmounted = true
    }
  }, [])

  return (
    <>
      <h1>DetailSample</h1>
      <h2>No.11: get detail</h2>
      <DetailsDiv>
        {getDetails &&
          getDetails.map((detail, index) => {
            return <DetailList key={index} detail={detail} />
          })}
      </DetailsDiv>
      <h2>No.12: add detail</h2>
      {addDetail && <DetailList detail={addDetail} />}
      <h2>No.13: edit detail</h2>
      {edittDetail && <DetailList detail={edittDetail} />}
      <h2>No.14: delete detail status</h2>
      <StatusCode code={deleteDetailStatus} />
    </>
  )
}

export default DetailSample

export const initailDetails: Detail[] = [
  {
    id: 0,
    money: 0,
    img_file: 'xxx.jpg',
    category_id: 0,
    category_name: '食費',
  },
]

export const initailDetail: Detail = {
  id: 0,
  money: 0,
  img_file: 'xxx.jpg',
  category_id: 0,
  category_name: '食費',
}

export const requestDetailParameter: RequestDetail = {
  category_id: 1,
  money: 2000,
  img_file: 'xxx.png',
  date: '2020-05-01',
}

export const DetailsDiv = styled.div`
  display: flex;
`
