import { getLabelName } from '@/utils/conversion'
import { LinkStatus } from '@/utils/consts'

describe('ボタンラベル名変換関数(getLabelName)のテスト', () => {
  it(`【正常系】引数が"login"の場合`, () => {
    expect(getLabelName(LinkStatus.LOGIN)).toBe('ログイン')
  })
  it(`【正常系】引数が"partner"の場合`, () => {
    expect(getLabelName(LinkStatus.PARTNER_LOGIN)).toBe('パートナーログイン')
  })
  it(`【正常系】引数が"signup"の場合`, () => {
    expect(getLabelName(LinkStatus.SIGNUP)).toBe('新規会員登録')
  })
  it(`【正常系】引数が"submit"の場合`, () => {
    expect(getLabelName(LinkStatus.SUBMIT)).toBe('送信')
  })
  it(`【正常系】引数が"change"の場合`, () => {
    expect(getLabelName(LinkStatus.CHANGE)).toBe('変更')
  })
  it(`【正常系】引数が"register"の場合`, () => {
    expect(getLabelName(LinkStatus.REGISTER)).toBe('登録')
  })
  it(`【正常系】引数が"delete"の場合`, () => {
    expect(getLabelName(LinkStatus.DELETE)).toBe('削除')
  })
  it(`【正常系】引数が"cancel"の場合`, () => {
    expect(getLabelName(LinkStatus.CANCEL)).toBe('キャンセル')
  })
  it(`【正常系】引数が''の場合`, () => {
    expect(getLabelName('')).toBe('TOP')
  })
  it(`【正常系】引数が「上記以外の文字列」の場合`, () => {
    expect(getLabelName('あああああああああああああああ')).toBe('TOP')
  })
})
