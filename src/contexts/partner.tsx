import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { PartnerContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import useAuth from '@/contexts/auth'
import { initPartners } from '@/utils/inits'
import { Partner, RequestPartner } from '@/types/api'

/**
 * PartnerProvider
 * @param param0
 */
export const PartnerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [partners, setPartners] = useState(initPartners)

  useEffect(() => {
    let unmounted = false
    getPartners(unmounted)

    const cleanup = () => {
      unmounted = true
    }
    return cleanup
  }, [])

  /**
   * パートナー一覧取得
   */
  const getPartners = async (unmounted: boolean) => {
    try {
      const res = await ApiClient.partner.getPartners()
      // アンマウントされていなければ、stateを更新
      if (!unmounted) setPartners(res.data)
    } catch (error) {}
  }

  /**
   * パートナー登録
   * @param requestData
   */
  const addPartner = async (requestData: RequestPartner) => {
    try {
      const res = await ApiClient.partner.addPartner(requestData)
      setPartners(partners.concat(res.data))
    } catch (error) {}
  }

  /**
   * パートナー削除
   * @param userId
   */
  const deletePartner = async (userId: Partner['id']) => {
    try {
      const res = await ApiClient.partner.deletePartner(userId)
      const newPartners = partners.filter((partner) => {
        partner.id !== userId
      })
      setPartners(newPartners)
    } catch (error) {}
  }
  return (
    <PartnerContext.Provider value={{ partners, addPartner, deletePartner }}>
      {children}
    </PartnerContext.Provider>
  )
}

/**
 * PartnerContext
 */
const usePartner = () => {
  const context = useContext(PartnerContext)
  return context
}

export default usePartner
