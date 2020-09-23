import React, { FC, useEffect } from 'react'
import { ProtectRoute } from '@/contexts/auth'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const Category: FC = () => {
  return <CategoryTemplate></CategoryTemplate>
}

export default ProtectRoute(Category)
