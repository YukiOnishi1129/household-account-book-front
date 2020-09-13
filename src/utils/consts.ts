/**
 * ログイン前ページのURL
 */
export enum BeforeLoginPage {
  TOP = '/',
  LOGIN = '/login',
  SIGNUP = '/signup',
  PATNER_LOGIN = '/partner-login',
  TRY_LOGIN = '/try-login',
  REMAIND_PASS_MAIL = '/remaind-mail',
  REMAIND_PASS_KEY = '/remaind-key',
}

/**
 * ログイン後ページのURL
 */
export enum AfterLoginPage {
  DASH_BOARD = '/api-test',
  // DASH_BOARD = '/calendar/',
  DETAIL = '/detail',
  CATEGORY = '/category',
  GRAPH = '/graph',
  PARTNER_USER = '/partner',
  CHANGE_PASSWORD = '/change-password',
}

/**
 * ログイン前APIのURL
 */
export enum BeforeLoginAPI {
  SANCTUM_API = '/sanctum/csrf-cookie',
  LOGIN_API = '/login',
  REGISTER_API = '/register',
  PATNER_LOGIN_API = '/partner-login',
  TRY_LOGIN_API = '/try-login',
  REMAIND_PASS_MAIL_API = '/remaind-pass-mail',
  REMAIND_PASS_KEY_API = '/remaind-pass-key',
}
