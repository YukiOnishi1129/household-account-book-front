import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { CurrentDate } from '@/utils/date'

dayjs.locale('ja')

describe('CurrentDate関数のテスト', () => {
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
