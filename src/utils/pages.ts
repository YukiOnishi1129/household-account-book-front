import { NextRouter } from 'next/router'
import { BeforeLoginPage, ErrorPage } from '@/utils/consts'

/**
 * ログイン前のformページの判別関数
 * @param router
 */
export const isShowHeader = (router: NextRouter): boolean => {
  switch (router.pathname) {
    case BeforeLoginPage.LOGIN:
    case BeforeLoginPage.SIGNUP:
    case BeforeLoginPage.PATNER_LOGIN:
    case BeforeLoginPage.REMAIND_PASS_MAIL:
    case BeforeLoginPage.REMAIND_PASS_KEY:
    case ErrorPage.NOT_FOUND:
      return true
    default:
      return false
  }
}
