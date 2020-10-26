import React, { FC } from 'react'
import useGraph from '@/contexts/graph'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import dynamic from 'next/dynamic'

const DynamicAnnualChange = dynamic(
  () => import('@/components/molcules/graph/AnnualChangeCharts'),
  { ssr: false }
)

const AnnualChange: FC = () => {
  const { annualChange } = useGraph()
  return (
    <ContentsForm>
      <FormTitle title="年間支出金額の推移" space="sm" />
      <DynamicAnnualChange annualChange={annualChange} />
    </ContentsForm>
  )
}

export default AnnualChange
