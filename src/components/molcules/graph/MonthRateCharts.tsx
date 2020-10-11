import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ContentRenderer,
  PieLabelRenderProps,
} from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180

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

  const radius = inRadius + (outRadius - inRadius) * 0.5
  const x = renCx + radius * Math.cos(-renMidAngle * RADIAN)
  const y = renCy + radius * Math.sin(-renMidAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > renCx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontWeight: 'bold' }}
    >
      {`${(renPercent * 100).toFixed(0)}%`}
    </text>
  )
}

export const MonthRateChaters = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={180}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default MonthRateChaters
