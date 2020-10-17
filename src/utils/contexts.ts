import { createContext } from 'react'
import {
  AuthType,
  CalendarType,
  GraphType,
  CategoryType,
  PartnerType,
} from '@/types/contexts'

export const AuthContext = createContext({} as AuthType)

export const CalendarContext = createContext({} as CalendarType)

export const GraphContext = createContext({} as GraphType)

export const CategoryContext = createContext({} as CategoryType)

export const PartnerContext = createContext({} as PartnerType)
