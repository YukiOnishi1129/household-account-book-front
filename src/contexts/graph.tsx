import React, { ReactNode, FC, useState, useContext, useEffect } from 'react'
import { GraphContext } from '@/utils/contexts'
import ApiClient from '@/network/ApiClient'
import { initilaMonthRate, initialAnnualChange } from '@/utils/inits'
import { CurrentMonth } from '@/utils/date'

/**
 * GraphProvider
 * @param param0
 */
export const GraphProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [monthRate, setMonthRate] = useState(initilaMonthRate)
  const [annualChange, setAnnualChange] = useState(initialAnnualChange)
  const [inputDate, setInputDate] = useState(CurrentMonth())
  console.log(inputDate)

  useEffect(() => {
    let unmounted = false
    getGraph(CurrentMonth(), unmounted)

    const cleanup = () => {
      unmounted = true
    }

    return cleanup
  }, [])

  /**
   * グラフデータ取得
   * @param date
   */
  const getGraph = async (date: string, unmounted: boolean) => {
    try {
      const monthRate = await ApiClient.monthRate.getMonthRate(date)
      const annualChange = await ApiClient.annualChange.getAnnualChange(date)
      if (
        !unmounted &&
        monthRate &&
        monthRate.status === 200 &&
        annualChange &&
        annualChange.status === 200
      ) {
        setMonthRate(monthRate.data)
        setAnnualChange(annualChange.data)
      }
    } catch (error) {}
  }

  /**
   * 月間カテゴリ別支出金額
   * @param date
   */
  const getMonthRate = async (date: string) => {
    try {
      const res = await ApiClient.monthRate.getMonthRate(date)
      if (res && res.status === 200) setMonthRate(res.data)
    } catch (error) {}
  }

  return (
    <GraphContext.Provider
      value={{
        monthRate,
        annualChange,
        inputDate,
        setMonthRate,
        setAnnualChange,
        setInputDate,
        getMonthRate,
      }}
    >
      {children}
    </GraphContext.Provider>
  )
}

/**
 * GraphContext
 */
const useGraph = () => {
  const context = useContext(GraphContext)
  return context
}

export default useGraph
