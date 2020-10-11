import React, { FC } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ContentRenderer,
  PieLabelRenderProps,
} from 'recharts'
import styled from 'styled-components'
import { MonthRate } from '@/types/api'
import { showColor } from '@/utils/color'
import LabelCategory from '@/components/atoms/LabelCategory'

const RADIAN = Math.PI / 180

export type Props = {
  monthRate: MonthRate[]
}

export const MonthRateChaters: FC<Props> = ({ monthRate }) => {
  return (
    <div>
      <GraphFierld>
        <PieChart width={400} height={300}>
          <Pie
            data={monthRate}
            cx="50%"
            cy="50%"
            labelLine={true}
            startAngle={450}
            endAngle={90}
            label={renderCustomizedLabel}
            outerRadius="70%"
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
      </GraphFierld>
      <LabelField>
        {monthRate.map((rate) => (
          <LabelItem>
            <LabelCategory
              key={`label-${rate.color_type}`}
              name={rate.category_name}
              colorType={rate.color_type}
            />
          </LabelItem>
        ))}
      </LabelField>
    </div>
  )
}

export default MonthRateChaters

/**
 * パーセンテージ表示コンポーネント
 * @param param0
 */
const renderCustomizedLabel: ContentRenderer<PieLabelRenderProps> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const renCx = cx ? Number(cx) : 0
  const renCy = cy ? Number(cy) : 0
  const inRadius = innerRadius ? Number(innerRadius) : 0
  const outRadius = outerRadius ? Number(outerRadius) : 0
  const renMidAngle = midAngle ? Number(midAngle) : 0
  const renPercent = percent ? Number(percent) : 0

  const radius = inRadius + (outRadius - inRadius) * 1.3
  const x = renCx + radius * Math.cos(-renMidAngle * RADIAN)
  const y = renCy + radius * Math.sin(-renMidAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#555"
      textAnchor={x > renCx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontWeight: 'bold', fontSize: '0.875rem' }}
    >
      {`${(renPercent * 100).toFixed(0)}%`}
    </text>
  )
}

const GraphFierld = styled.div`
  div:last-child {
    margin: 0 auto;
  }
`

const LabelField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const LabelItem = styled.div`
  width: 20%;
  margin-right: 10px;
`
