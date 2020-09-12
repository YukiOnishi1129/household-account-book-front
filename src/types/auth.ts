import { Dispatch, SetStateAction } from 'react'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
} from './api/'

/**
 * 認証情報
 */
export interface Auth {
  isAuthenticated: boolean
  loading: boolean
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
