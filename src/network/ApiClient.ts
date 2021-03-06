import {
  Configuration,
  AnnualChangeApiFactory,
  CalendarApiFactory,
  CategoryApiFactory,
  CsrfCookieApiFactory,
  DetailApiFactory,
  MonthRateApiFactory,
  PartnerApiFactory,
  UsersApiFactory,
} from '@/types/api'
import globalAxios, { AxiosResponse } from 'axios'
import Router from 'next/router'
import { BeforeLoginPage, BeforeLoginAPI } from '@/utils/consts'

const config: Configuration = {
  baseOptions: {
    withCredentials: true,
  },
}

/**
 * API関数取得メソッド
 */
const resolveApiBasePath = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT
    ? process.env.NEXT_PUBLIC_ENVIRONMENT
    : ''
  switch (env) {
    case 'swagger':
      return process.env.NEXT_PUBLIC_OPEN_API_BASE_URL
    default:
      return process.env.NEXT_PUBLIC_API_BASE_URL
  }
}

const sanctumBasePath = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT
    ? process.env.NEXT_PUBLIC_ENVIRONMENT
    : ''
  switch (env) {
    case 'swagger':
      return process.env.NEXT_PUBLIC_OPEN_API_BASE_URL
    default:
      return process.env.NEXT_PUBLIC_SANCTUM_API_BASE_URL
  }
}

export default {
  annualChange: AnnualChangeApiFactory(config, resolveApiBasePath()),
  calender: CalendarApiFactory(config, resolveApiBasePath()),
  category: CategoryApiFactory(config, resolveApiBasePath()),
  csrfCookie: CsrfCookieApiFactory(config, sanctumBasePath()),
  detail: DetailApiFactory(config, resolveApiBasePath()),
  monthRate: MonthRateApiFactory(config, resolveApiBasePath()),
  partner: PartnerApiFactory(config, resolveApiBasePath()),
  user: UsersApiFactory(config, resolveApiBasePath()),
}

globalAxios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response
  },
  (error) => {
    if (!error.response) return error
    const status = error.response.status
    // 認証チェックAPIの場合、エラーをそのまま返すのみ
    if (error.response.config.url.match(/auth/)) {
      return error
    }
    // 認証エラー時
    if (status === 401) {
      switch (Router.pathname) {
        case BeforeLoginAPI.SANCTUM_API:
        case BeforeLoginAPI.LOGIN_API:
        case BeforeLoginAPI.REGISTER_API:
        case BeforeLoginAPI.PATNER_LOGIN_API:
        case BeforeLoginAPI.TRY_LOGIN_API:
        case BeforeLoginAPI.REMIND_PASS_MAIL_API:
        case BeforeLoginAPI.REMIND_PASS_KEY_API:
          break
        default:
          // 認証必須のAPIにて認証エラーの場合、ログイン画面リダイレクト
          Router.push(BeforeLoginPage.LOGIN)
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
