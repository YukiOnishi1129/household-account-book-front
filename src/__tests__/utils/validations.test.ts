import {
  RequiredValidation,
  MinLengthValidation,
  MaxLengthValidation,
  ValueLengthValidation,
  EmailValidation,
  AlphanumericValidation,
  MatchPasswordValidation,
  UnMatchPasswordValidation,
} from '@/utils/validations'

describe('必須入力チェック(RequiredValidation)', () => {
  it('【正常系】入力値がある場合', () => {
    expect(RequiredValidation('テスト')).not.toBe('入力してください。')
  })
  it('【異常系】入力値がない場合', () => {
    expect(RequiredValidation('')).toBe('入力してください。')
  })
  it('【異常系】入力値が半角スペースのみの場合', () => {
    expect(RequiredValidation(' ')).toBe('入力してください。')
  })
  it('【異常系】入力値が全角スペースのみの場合', () => {
    expect(RequiredValidation('　')).toBe('入力してください。')
  })
})

describe('最小文字数チェック(MinLengthValidation)', () => {
  it('【正常系】最小文字数以上の場合', () => {
    const min = 5
    const value = 'アイウエオ1'
    expect(MinLengthValidation(value, min)).not.toBe(
      min + '文字以上で入力してください。'
    )
  })
  it('【正常系】最小文字数と同じの場合', () => {
    const min = 5
    const value = 'アイウエオ'
    expect(MinLengthValidation(value, min)).not.toBe(
      min + '文字以上で入力してください。'
    )
  })
  it('【異常系】最小文字数未満の場合', () => {
    const min = 5
    const value = 'アイウエ'
    expect(MinLengthValidation(value, min)).toBe(
      min + '文字以上で入力してください。'
    )
  })
})

describe('最大文字数チェック(MaxLengthValidation)', () => {
  it('【正常系】最小文字数未満の場合', () => {
    const max = 5
    const value = 'アイウエ'
    expect(MaxLengthValidation(value, max)).not.toBe(
      max + '文字以内で入力してください。'
    )
  })
  it('【正常系】最小文字数と同じの場合', () => {
    const max = 5
    const value = 'アイウエオ'
    expect(MaxLengthValidation(value, max)).not.toBe(
      max + '文字以内で入力してください。'
    )
  })
  it('【異常系】最小文字数以上の場合', () => {
    const max = 5
    const value = 'アイウエオ1'
    expect(MaxLengthValidation(value, max)).toBe(
      max + '文字以内で入力してください。'
    )
  })
})

describe('文字数チェック(ValueLengthValidation)', () => {
  it('【正常系】最小以上、最大以下の場合', () => {
    const min = 5
    const max = 7
    const value = 'アイウエオ１'
    expect(ValueLengthValidation(value, min, max)).not.toBe(
      min + '文字以上' + max + '文字以内で入力してください。'
    )
  })
  it('【正常系】最小文字数と同じ場合', () => {
    const min = 6
    const max = 7
    const value = 'アイウエオ１'
    expect(ValueLengthValidation(value, min, max)).not.toBe(
      min + '文字以上' + max + '文字以内で入力してください。'
    )
  })
  it('【正常系】最大文字数と同じ場合', () => {
    const min = 5
    const max = 7
    const value = 'アイウエオ１2'
    expect(ValueLengthValidation(value, min, max)).not.toBe(
      min + '文字以上' + max + '文字以内で入力してください。'
    )
  })
  it('【異常系】最小文字数未満の場合', () => {
    const min = 5
    const max = 7
    const value = 'アイウエ'
    expect(ValueLengthValidation(value, min, max)).toBe(
      min + '文字以上' + max + '文字以内で入力してください。'
    )
  })
  it('【異常系】最大文字数より大きいの場合', () => {
    const min = 5
    const max = 7
    const value = 'アイウエオ123'
    expect(ValueLengthValidation(value, min, max)).toBe(
      min + '文字以上' + max + '文字以内で入力してください。'
    )
  })
})

describe('メールアドレス形式チェック(EmailValidation)', () => {
  it('【正常系】メールアドレス形式の場合', () => {
    const value = 'test@gmail.com'
    expect(EmailValidation(value)).not.toBe(
      '正しい形式でメールアドレスを入力してください。'
    )
  })
  it('【異常系】英数字のみの場合', () => {
    const value = 'aAps'
    expect(EmailValidation(value)).toBe(
      '正しい形式でメールアドレスを入力してください。'
    )
  })
  it('【異常系】全角文字のみの場合', () => {
    const value = 'ああああ'
    expect(EmailValidation(value)).toBe(
      '正しい形式でメールアドレスを入力してください。'
    )
  })
  it('【異常系】@以降の記載がない場合', () => {
    const value = 'test@'
    expect(EmailValidation(value)).toBe(
      '正しい形式でメールアドレスを入力してください。'
    )
  })
})

describe('英数字チェック(AlphanumericValidation)', () => {
  it('【正常系】英数字のみの場合', () => {
    const value = 'aB3'
    expect(AlphanumericValidation(value)).not.toBe(
      '英数字にて入力してください。'
    )
  })
  it('【正常系】半角英字のみの場合', () => {
    const value = 'abcde'
    expect(AlphanumericValidation(value)).not.toBe(
      '英数字にて入力してください。'
    )
  })
  it('【正常系】全角英字のみの場合', () => {
    const value = 'ABCDE'
    expect(AlphanumericValidation(value)).not.toBe(
      '英数字にて入力してください。'
    )
  })
  it('【正常系】半角数字のみの場合', () => {
    const value = '12345'
    expect(AlphanumericValidation(value)).not.toBe(
      '英数字にて入力してください。'
    )
  })
  it('【異常系】全角平仮名のみの場合', () => {
    const value = 'ああああ'
    expect(AlphanumericValidation(value)).toBe('英数字にて入力してください。')
  })
  it('【異常系】記号のみの場合', () => {
    const value = '@%&'
    expect(AlphanumericValidation(value)).toBe('英数字にて入力してください。')
  })
  it('【異常系】英数字と平仮名が混ざっている場合', () => {
    const value = 'aGt32あああ'
    expect(AlphanumericValidation(value)).toBe('英数字にて入力してください。')
  })
  it('【異常系】英数字と記号が混ざっている場合', () => {
    const value = 'aGt32$#%'
    expect(AlphanumericValidation(value)).toBe('英数字にて入力してください。')
  })
})

describe('パスワード一致チェック(MatchPasswordValidation)', () => {
  it('【正常系】パスワードが一致している場合', () => {
    const passwrod = 'password123'
    const confirmPasswrod = 'password123'
    expect(MatchPasswordValidation(passwrod, confirmPasswrod)).not.toBe(
      'パスワード(再入力)と一致しません。'
    )
  })
  it('【異常系】パスワードが異なる場合', () => {
    const passwrod = 'password123'
    const confirmPasswrod = 'password'
    expect(MatchPasswordValidation(passwrod, confirmPasswrod)).toBe(
      'パスワード(再入力)と一致しません。'
    )
  })
})

describe('パスワード不一致チェック(UnMatchPasswordValidation)', () => {
  it('【正常系】パスワードが異なる場合', () => {
    const currentPassword = 'password123'
    const newPassword = 'password'
    expect(UnMatchPasswordValidation(currentPassword, newPassword)).not.toBe(
      '現在のパスワードと新しいパスワードが同じです。'
    )
  })
  it('【異常系】パスワードが一致している場合', () => {
    const currentPassword = 'password123'
    const newPassword = 'password123'
    expect(UnMatchPasswordValidation(currentPassword, newPassword)).toBe(
      '現在のパスワードと新しいパスワードが同じです。'
    )
  })
})
