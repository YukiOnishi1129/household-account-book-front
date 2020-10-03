import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { CurrentDate, FormatChangeYearMonthDate } from '@/utils/date'

dayjs.locale('ja')

describe('現在日付取得 CurrentDate', () => {
  it('【正常系】現在日付を取得している場合', () => {
    const today = dayjs().format('YYYY-MM-DD')
    expect(CurrentDate()).toBe(today)
  })
  it('【異常系】昨日の日付を取得している場合', () => {
    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    expect(CurrentDate()).not.toBe(yesterday)
  })
  it('【異常系】明日の日付を取得している場合', () => {
    const tommorow = dayjs().add(1, 'day').format('YYYY-MM-DD')
    expect(CurrentDate()).not.toBe(tommorow)
  })
})

describe('日付フォーマット変換(YYYY年MM月DD日) FormatChangeYearMonthDate', () => {
  it('【正常系】日付変換がYYYY年MM月DD日に変換できること', () => {
    const targetDate = '2019-11-29'
    const answeDate = '2019年11月29日'
    expect(FormatChangeYearMonthDate(targetDate)).toBe(answeDate)
  })
})
