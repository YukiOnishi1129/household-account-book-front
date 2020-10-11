import React, { FC } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ContentRenderer,
  PieLabelRenderProps,
} from 'recharts'
import { MonthRate } from '@/types/api'
import { showColor } from '@/utils/color'

const RADIAN = Math.PI / 180

const renderCustomizedLabel: ContentRenderer<PieLabelRenderProps> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const renCx = cx ? Number(cx) : 0
  const renCy = cy ? Number(cy) : 0
  const inRadius = innerRadius ? Number(innerRadius) : 0
  const outRadius = outerRadius ? Number(outerRadius) : 0
  const renMidAngle = midAngle ? Number(midAngle) : 0
  const renPercent = percent ? Number(percent) : 0
  const color = index === 3 ? '#555' : '#fff'

  const radius = inRadius + (outRadius - inRadius) * 0.5
  const x = renCx + radius * Math.cos(-renMidAngle * RADIAN)
  const y = renCy + radius * Math.sin(-renMidAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill={color}
      textAnchor={x > renCx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontWeight: 'bold' }}
    >
      {`${(renPercent * 100).toFixed(0)}%`}
    </text>
  )
}

export type Props = {
  monthRate: MonthRate[]
}

export const MonthRateChaters: FC<Props> = ({ monthRate }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={monthRate}
        cx={200}
        cy={180}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        dataKey="money"
      >
        {monthRate.map((rate) => (
          <Cell
            key={`cell-${rate.color_type}`}
            fill={showColor(rate.color_type).slice(0, -1)}
          />
        ))}
      </Pie>
    </PieChart>
  )
}

export default MonthRateChaters
