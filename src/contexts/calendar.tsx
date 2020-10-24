import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CalendarContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import { initialCalendar } from '@/utils/inits'

/**
 * CalendarProvider
 * @param param0
 */
export const CalendarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [calendar, setCalendar] = useState(initialCalendar)
  const router = useRouter()

  useEffect(() => {
    let unmounted = false

    const getInitialCalendar = async (unmounted: boolean, date: string) => {
      try {
        const res = await ApiClient.calender.getCalender(date)
        // アンマウントされていなければ、stateを更新
        if (!unmounted) setCalendar(res.data)
      } catch (error) {}
    }

    getInitialCalendar(unmounted, String(router.query.date))

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [])

  /**
   * カレンダー情報取得
   * @param date
   */
  const getCalendar = async (date: string) => {
    try {
      const res = await ApiClient.calender.getCalender(date)
      setCalendar(res.data)
    } catch (error) {}
  }

  return (
    <CalendarContext.Provider
      value={{
        calendar,
        setCalendar,
        getCalendar,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

/**
 * CalendarContext
 */
const useCalendar = () => {
  const context = useContext(CalendarContext)
  return context
}

export default useCalendar
