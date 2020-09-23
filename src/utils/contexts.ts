import { createContext } from 'react'
import { Auth, Partners } from '@/types/contexts'

export const AuthContext = createContext({} as Auth)

export const PartnerContext = createContext({} as Partners)
