import { BeforeLoginPage, ErrorPage } from '@/utils/consts'

/**
 * ログイン前のformページの判別関数
 * @param router
 */
export const isShowHeader = (pathname: string): boolean => {
  switch (pathname) {
    case BeforeLoginPage.LOGIN:
    case BeforeLoginPage.SIGNUP:
    case BeforeLoginPage.PATNER_LOGIN:
    case BeforeLoginPage.REMIND_PASS_MAIL:
    case BeforeLoginPage.REMIND_PASS_KEY:
    case ErrorPage.NOT_FOUND:
      return true
    default:
      return false
  }
}
