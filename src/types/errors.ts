/**
 * ログインバリデーションエラー
 */
export interface LoginValidError {
  email: string
  password: string
}

/**
 * 会員登録のバリデーションエラー
 */
export interface SinupValidError {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface RemindValidError {
  value: string
}
