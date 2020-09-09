import {
  Configuration,
  AnnualChangeApiFactory,
  CalendarApiFactory,
  CategoryApiFactory,
  DetailApiFactory,
  MonthRateApiFactory,
  PartnerApiFactory,
  UsersApiFactory,
} from '../types/api'
import globalAxios, { AxiosResponse } from 'axios'
import Router from 'next/router'
import { BeforeLoginPage } from '../utils/consts'

const config: Configuration = {
  baseOptions: {
    baseURL: 'http://localhost:4010',
    withCredentials: true,
  },
}

export default {
  annualChange: AnnualChangeApiFactory(config),
  calender: CalendarApiFactory(config),
  category: CategoryApiFactory(config),
  detail: DetailApiFactory(config),
  monthRate: MonthRateApiFactory(config),
  partner: PartnerApiFactory(config),
  user: UsersApiFactory(config),
}

globalAxios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response
  },
  (error) => {
    const status = error.response.status
    // 認証エラー時
    if (status === 401) {
      switch (Router.pathname) {
        case BeforeLoginPage.TOP:
        case BeforeLoginPage.LOGIN:
        case BeforeLoginPage.SIGNUP:
        case BeforeLoginPage.PATNER_LOGIN:
        case BeforeLoginPage.TRY_LOGIN:
        case BeforeLoginPage.REMAIND_PASS_MAIL:
        case BeforeLoginPage.REMAIND_PASS_KEY:
          break
        default:
          // ログイン後のページにいる場合、ログイン画面リダイレクト
          Router.push('/login')
      }
      return error
    } else if (status === 404) {
      alert('404 not found')
    } else if (status === 422) {
      alert('パラメーターエラー')
    } else if (status === 403) {
      alert('アイテムが存在しないか、アクセス権限がありません')
    } else if (status === 500) {
      alert('原因不明の内部エラー')
    } else {
      alert(`原因不明の内部エラー:${status}`)
    }
    return error
  }
)
