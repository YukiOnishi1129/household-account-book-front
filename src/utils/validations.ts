/**
 * 必須チェック
 * @param value
 */
export const RequiredValidation = (value: string): string => {
  if (value === '') return '入力してください。'
  return ''
}

/**
 * 最小文字数チェック
 * @param value
 * @param min
 */
export const MinLengthValidation = (value: string, min: number): string => {
  if (value.length < min) return min + '文字以上で入力してください。'
  return ''
}
/**
 * 最大文字数チェック
 * @param value
 * @param max
 */
export const MaxLengthValidation = (value: string, max: number): string => {
  if (value.length > max) return max + '文字以内で入力してください。'
  return ''
}

/**
 * 文字数チェック
 * @param value
 * @param min
 * @param max
 */
export const ValueLengthValidation = (
  value: string,
  min: number,
  max: number
): string => {
  if (value.length < min || value.length > max)
    return min + '文字以上' + max + '文字以内で入力してください。'
  return ''
}

/**
 * メールアドレスのバリデーション
 * @param email
 */
export const EmailValidation = (email: string): string => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (!regex.test(email))
    return '正しい形式でメールアドレスを入力してください。'
  return ''
}

export const AlphanumericValidation = (value: string): string => {
  const regex = /^[A-Za-z0-9]*$/
  if (!regex.test(value)) return '半角英数字にて入力してください。'
  return ''
}
