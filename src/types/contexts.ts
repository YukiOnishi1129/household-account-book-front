import { Dispatch, SetStateAction } from 'react'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
  Calendar,
  Detail,
  MonthRate,
  MonthRateDate,
  AnnualChange,
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

/**
 * カレンダー情報
 */
export interface CalendarType {
  calendar: Calendar
  setCalendar: React.Dispatch<React.SetStateAction<Calendar>>
  getCalendar: (date: string) => Promise<void>
}

export interface DetailType {
  details: Detail[]
  setDetails: React.Dispatch<React.SetStateAction<Detail[]>>
  deleteDetail: (moneyId: Detail['id']) => Promise<void>
}

/**
 * グラフ情報
 */
export interface GraphType {
  monthRate: MonthRate[]
  changeDates: MonthRateDate[]
  annualChange: AnnualChange[]
  inputDate: string
  setMonthRate: React.Dispatch<React.SetStateAction<MonthRate[]>>
  setAnnualChange: React.Dispatch<React.SetStateAction<AnnualChange[]>>
  setInputDate: React.Dispatch<React.SetStateAction<string>>
  getMonthRate: (date: string) => Promise<void>
}

/**
 * カテゴリー情報
 */
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

/**
 * パートナー情報
 */
export interface PartnerType {
  partners: Partner[]
  addPartner: (requestData: RequestPartner) => Promise<void>
  deletePartner: (userId: Partner['id']) => Promise<void>
}
