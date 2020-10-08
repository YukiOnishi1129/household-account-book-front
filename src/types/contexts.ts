import { Dispatch, SetStateAction } from 'react'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
  Category,
  RequestCategory,
  Partner,
  RequestPartner,
} from './api'

/**
 * 認証情報
 */
export interface AuthType {
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

export interface CategoryType {
  categories: Category[]
  name: string
  colorType: number
  setName: React.Dispatch<React.SetStateAction<string>>
  setColorType: React.Dispatch<React.SetStateAction<number>>
  addCategories: (requestData: RequestCategory) => Promise<void>
  editCategory: (
    id: Category['id'],
    requestData: RequestCategory
  ) => Promise<void>
  deleteCategory: (id: Category['id']) => Promise<void>
}

export interface PartnerType {
  partners: Partner[]
  addPartner: (requestData: RequestPartner) => Promise<void>
  deletePartner: (userId: Partner['id']) => Promise<void>
}
