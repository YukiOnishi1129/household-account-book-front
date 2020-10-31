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

/**
 * 金額入力・編集バリデーションエラー
 */
export interface DetailValidError {
  categoryId: string
  money: string
  imgFile: string
}

/**
 * カテゴリー登録・編集バリデーションエラー
 */
export interface CategoryValidError {
  name: string
  colorType: string
}
/**
 * 共有パートナー登録バリデーションエラー
 */
export interface PartnerValidError {
  name: string
  email: string
}

/**
 * パスワード変更バリデーションエラー
 */
export interface ChangePasswordValidError {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}
