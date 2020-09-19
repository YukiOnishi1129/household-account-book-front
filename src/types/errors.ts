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

/**
 * パスワードリマインドバリデーションエラー
 */
export interface RemindValidError {
  value: string
}

export interface ChangePasswordValidError {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}
