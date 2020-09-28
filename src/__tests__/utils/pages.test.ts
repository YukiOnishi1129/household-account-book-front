import { isShowHeader } from '@/utils/pages'
import { BeforeLoginPage, AfterLoginPage, ErrorPage } from '@/utils/consts'
import { CurrentDate } from '@/utils/date'

describe('isHeader関数', () => {
  it('【正常系】ログイン画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.LOGIN)).toBe(true)
  })
  it('【正常系】会員登録画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.SIGNUP)).toBe(true)
  })
  it('【正常系】パートナーログイン画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.PATNER_LOGIN)).toBe(true)
  })
  it('【正常系】パスワードリマインダー画面(email送信)に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.REMIND_PASS_MAIL)).toBe(true)
  })
  it('【正常系】パスワードリマインダー画面(key送信)に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.REMIND_PASS_KEY)).toBe(true)
  })
  it('【正常系】エラー画面に遷移している場合', () => {
    expect(isShowHeader(ErrorPage.NOT_FOUND)).toBe(true)
  })
  it('【異常系】TOP画面に遷移している場合', () => {
    expect(isShowHeader(BeforeLoginPage.TOP)).toBe(false)
  })
  it('【異常系】カレンダー画面に遷移している場合', () => {
    const url = AfterLoginPage.DASH_BOARD + CurrentDate()
    expect(isShowHeader(url)).toBe(false)
  })
  it('【異常系】日別金額一覧画面に遷移している場合', () => {
    const url = AfterLoginPage.DETAIL + CurrentDate()
    expect(isShowHeader(url)).toBe(false)
  })
  it('【異常系】カテゴリー管理画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.CATEGORY)).toBe(false)
  })
  it('【異常系】グラフ画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.GRAPH)).toBe(false)
  })
  it('【異常系】パートナー管理画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.PARTNER_USER)).toBe(false)
  })
  it('【異常系】パスワード変更画面に遷移している場合', () => {
    expect(isShowHeader(AfterLoginPage.CHANGE_PASSWORD)).toBe(false)
  })
})
