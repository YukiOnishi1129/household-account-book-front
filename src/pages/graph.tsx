import React, { FC } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import GraphTemplate from '@/components/templates/GraphTemplate'

const Graph: FC = () => {
  return <GraphTemplate />
}

export default ProtectRoute(Graph)
