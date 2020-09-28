import { isShowHeader } from '@/utils/pages'
import { BeforeLoginPage, AfterLoginPage, ErrorPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

describe('isHeader関数 Headerを表示させない場合のテスト', () => {
  it('ログイン画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.LOGIN)).toBe(true)
  })
  it('会員登録画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.SIGNUP)).toBe(true)
  })
  it('パートナーログイン画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.PATNER_LOGIN)).toBe(true)
  })
  it('パスワードリマインダー画面(email送信)に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.REMIND_PASS_MAIL)).toBe(true)
  })
  it('パスワードリマインダー画面(key送信)に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.REMIND_PASS_KEY)).toBe(true)
  })
  it('エラー画面に遷移している場合', () => {
    expect(isShowHeader(ErrorPage.NOT_FOUND)).toBe(true)
  })
})

describe('isHeader関数 Headerを表示させる場合のテスト', () => {
  it('TOP画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.TOP)).toBe(false)
  })
  it('カレンダー画面に遷移している場合', () => {
    const url = AfterLoginPage.DASH_BOARD + CurrentDate()
    expect(isShowHeader(url)).toBe(false)
  })
  it('日別金額一覧画面に遷移している場合', () => {
    const url = AfterLoginPage.DETAIL + CurrentDate()
    expect(isShowHeader(url)).toBe(false)
  })
  it('カテゴリー管理画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.CATEGORY)).toBe(false)
  })
  it('グラフ画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.GRAPH)).toBe(false)
  })
  it('パートナー管理画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.PARTNER_USER)).toBe(false)
  })
  it('パスワード変更画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.CHANGE_PASSWORD)).toBe(false)
  })
})
