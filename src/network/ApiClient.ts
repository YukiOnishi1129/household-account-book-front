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
import { PageConst } from '../utils/consts'

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
    if (status === 401) {
      switch (Router.route) {
        case PageConst.BeforeLoginPage.top:
        case PageConst.BeforeLoginPage.login:
        case PageConst.BeforeLoginPage.signup:
        case PageConst.BeforeLoginPage.partnerLogin:
        case PageConst.BeforeLoginPage.tryLogin:
        case PageConst.BeforeLoginPage.remaindPassMail:
        case PageConst.BeforeLoginPage.remaindPassKey:
          return error
        default:
          Router.push('/login')
      }
      return error
    } else if (status === 404) {
      console.log('404 not found')
    } else if (status === 422) {
      console.log('パラメーターエラー')
    } else if (status === 403) {
      console.log('アイテムが存在しないか、アクセス権限がありません')
    } else if (status === 500) {
      console.log('原因不明の内部エラー')
    } else {
      console.log(`原因不明の内部エラー:${status}`)
    }
    return error
  }
)
