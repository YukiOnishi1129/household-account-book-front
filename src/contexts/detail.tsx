import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DetailContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import { initialDetails } from '@/utils/inits'
import { Detail } from '@/types/api'

/**
 * DetailProvider
 * @param param0
 */
export const DetailProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [details, setDetails] = useState(initialDetails)
  const router = useRouter()

  useEffect(() => {
    const unmounted = false
    getDetails(unmounted, String(router.query.date))
  }, [])

  const getDetails = async (unmounted: boolean, date: string) => {
    try {
      const res = await ApiClient.detail.getDetails(date)
      // アンマウントされていなければ、stateを更新
      if (!unmounted) setDetails(res.data)
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
