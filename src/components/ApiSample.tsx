import React, { FC, useState, useEffect } from 'react'
import ApiClient from '../network/ApiClient'

const ApiSample: FC = () => {
  const [categories, setCategory] = useState([])
  const [details, setDetails] = useState([])
  useEffect(() => {
    const categoryFunc = async () => {
      const res = await ApiClient.category.getCategories()
      setCategory(res.data)
    }
    const detailFunc = async () => {
      const res = await ApiClient.detail.getDetails('20200505')
      setDetails(res.data)
    }
    categoryFunc()
    detailFunc()
  }, [])
  return (
    <>
      <h1>APISample</h1>
      {categories.length !== 0 && <div>{categories[0].id}</div>}
      {details.length !== 0 && <div>{details[0].id}</div>}
    </>
  )
}
export default ApiSample
