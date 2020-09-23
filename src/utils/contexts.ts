import { createContext } from 'react'
import { AuthType, CategoryType, PartnerType } from '@/types/contexts'

export const AuthContext = createContext({} as AuthType)

export const CategoryContext = createContext({} as CategoryType)

export const PartnerContext = createContext({} as PartnerType)
