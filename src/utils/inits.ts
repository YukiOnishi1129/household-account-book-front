import {
  User,
  Calendar,
  MonthRate,
  MonthRateDate,
  AnnualChange,
  Category,
  Partner,
} from '@/types/api/'

/**
 * Userステートの初期値
 */
export const initialUser: User = {
  id: 0,
  name: '',
  email: '',
  user_type: 0,
  main_user_id: 0,
  login_flg: false,
  input_flg: false,
}

export const initialCalendar: Calendar = {
  date: '2020-09-01',
  sum_month_money: 200000,
  sum_date_money: [
    {
      date: '2020-09-01',
      money: 1000,
    },
    {
      date: '2020-09-05',
      money: 11000,
    },
    {
      date: '2020-09-11',
      money: 30000,
    },
    {
      date: '2020-09-30',
      money: 20000,
    },
  ],
}

/**
 * 月間カテゴリ別支出割合データの初期値
 */
export const initilaMonthRate: MonthRate[] = [
  {
    category_id: 0,
    category_name: '',
    color_type: 0,
    money: 0,
  },
]

export const initialMonthRateDate: MonthRateDate[] = [
  {
    date: '2020-09-01',
  },
]

/**
 * 月別合計支出金額データの初期値
 */
export const initialAnnualChange: AnnualChange[] = [
  {
    month: '2020-01-01',
    sum_money: 0,
  },
]

/**
 * Categorysテートの初期値
 */
export const initialCategories: Category[] = [
  {
    id: 0,
    category_name: '',
    color_type: 0,
  },
]
/**
 * Partnerステートの初期値
 */
export const initialPartners: Partner[] = [
  {
    id: 0,
    name: '',
    email: '',
  },
]
