import React, { FC, useState } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import useGraph from '@/contexts/graph'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import CalendarIcon from '@/components/atoms/CalendarIcon'
import ChangeMonthDialog from '@/components/dialogs/graph/ChangeMonthDialog'
import { FormatCgangeYearMonth } from '@/utils/date'

// NOTE: RechartsはSSRでwarinngが出るから、SSRしないようにする
// https://github.com/vercel/next.js/issues/12863
const DynamicMonthRate = dynamic(
  () => import('@/components/molcules/graph/MonthRateCharts'),
  { ssr: false }
)

const MonthRate: FC = () => {
  const { inputDate, setInputDate, monthRate, getMonthRate } = useGraph()
  const [isOepn, setIsOpen] = useState(false)
  const showdate = FormatCgangeYearMonth(inputDate) + 'の支出割合'

  /**
   * ダイアログを開く処理
   */
  const openModal = (): void => {
    setIsOpen(true)
  }
  /**
   * ダイアログを閉じる処理
   */
  const closeModal = (): void => {
    setIsOpen(false)
  }

  const changeMonthRate = async () => {
    await getMonthRate(inputDate)
    closeModal()
  }
  return (
    <>
      <ContentsForm>
        <Title>
          <FormTitle title={showdate} space="sm" />
          <CalendarIcon id={1} size={24} submit={() => openModal()} />
        </Title>
        <DynamicMonthRate monthRate={monthRate} />
      </ContentsForm>
      <ChangeMonthDialog
        isOpen={isOepn}
        inputDate={inputDate}
        setInputDate={setInputDate}
        submit={() => changeMonthRate()}
        close={() => closeModal()}
      />
    </>
  )
}

export default MonthRate

const Title = styled.div`
  display: flex;
  justify-content: center;

  div {
    &:last-child {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`
