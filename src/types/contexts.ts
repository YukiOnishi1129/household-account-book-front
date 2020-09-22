import { Dispatch, SetStateAction } from 'react'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
  Partner,
  RequestPartner,
} from './api'

/**
 * 認証情報
 */
export interface Auth {
  isAuthenticated: boolean
  errMsg: string
  user: User | null
  login: (requestData: RequestLogin) => Promise<void>
  register: (requestData: RequestRegister) => Promise<void>
  partnerLogin: (requestData: RequestLogin) => Promise<void>
  tryLogin: (requestData: RequestLogin) => Promise<void>
  logout: () => Promise<void>
  remindMail: (requestData: RequestRemindMail) => Promise<void>
  remindKey: (requestData: RequestRemindKey) => Promise<void>
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<User>>
}

export interface Partners {
  partners: Partner[]
  addPartner: (requestData: RequestPartner) => Promise<void>
  deletePartner: (userId: Partner['id']) => Promise<void>
}
