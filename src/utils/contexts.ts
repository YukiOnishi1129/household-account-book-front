import { createContext } from 'react'
import {
  AuthType,
  CalendarType,
  DetailType,
  GraphType,
  CategoryType,
  PartnerType,
} from '@/types/contexts'

export const AuthContext = createContext({} as AuthType)

export const CalendarContext = createContext({} as CalendarType)

export const DetailContext = createContext({} as DetailType)

export const GraphContext = createContext({} as GraphType)

export const CategoryContext = createContext({} as CategoryType)

export const PartnerContext = createContext({} as PartnerType)
