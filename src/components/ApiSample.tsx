import React, { FC, useState, useEffect } from 'react'
import ApiClient from '../network/ApiClient'

const ApiSample: FC = () => {
  const [categories, setCategory] = useState([])
  useEffect(() => {
    const func = async () => {
      const res = await ApiClient.category.getCategories()
      setCategory(res.data)
    }
    func()
  }, [])
  return (
    <>
      <h1>APISample</h1>
      {categories.length !== 0 && <div>{categories[0].id}</div>}
    </>
  )
}
export default ApiSample
