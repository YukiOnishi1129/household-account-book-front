import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DetailContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import { initialDetails, initialCategories } from '@/utils/inits'
import { Detail } from '@/types/api'

/**
 * DetailProvider
 * @param param0
 */
export const DetailProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [details, setDetails] = useState(initialDetails)
  const [categories, setCategories] = useState(initialCategories)
  const router = useRouter()

  useEffect(() => {
    const unmounted = false
    getDetails(unmounted, String(router.query.date))
  }, [])

  const getDetails = async (unmounted: boolean, date: string) => {
    try {
      const res = await ApiClient.detail.getDetails(date)
      const resCategories = await ApiClient.category.getCategories()
      // アンマウントされていなければ、stateを更新
      if (!unmounted) {
        setDetails(res.data)
        setCategories(resCategories.data)
      }
    } catch (error) {}
  }

  const deleteDetail = async (id: Detail['id']) => {
    try {
      const res = await ApiClient.detail.deleteDetail(id)
      if (res.status === 204) {
        const newDetail = details.filter((d) => {
          return d.id !== id
        })
        setDetails(newDetail)
      }
    } catch (error) {}
  }

  return (
    <DetailContext.Provider
      value={{
        details,
        categories,
        setDetails,
        deleteDetail,
      }}
    >
      {children}
    </DetailContext.Provider>
  )
}

/**
 * DetailContext
 */
const useDetail = () => {
  const context = useContext(DetailContext)
  return context
}

export default useDetail
