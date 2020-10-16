import React, { FC } from 'react'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { AnnualChange } from '@/types/api'

export type Props = {
  annualChange: AnnualChange[]
}

const AnnualChangeCharts: FC<Props> = ({ annualChange }) => {
  return (
    <ComposedChart
      width={450}
      height={400}
      data={annualChange}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="month" />
      <YAxis width={50} />
      <Tooltip />
      <Bar
        dataKey="sum_money"
        name="月別合計支出金額"
        barSize={15}
        fill="#bd9df0"
        // background={true}
      />

      {/* <Line type="natural" dataKey="sum_money" stroke="#ff7300" /> */}
    </ComposedChart>
  )
}

export default AnnualChangeCharts
