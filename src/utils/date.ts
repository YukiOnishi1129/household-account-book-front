import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

/**
 * 現在日付取得
 */
export const CurrentDate = (): string => {
  return dayjs().format('YYYY-MM-DD')
}

/**
 * 日付フォーマット変換(YYYY年MM月DD日)
 * @param date
 */
export const FormatChangeYearMonthDate = (date: string): string => {
  return dayjs(date).format('YYYY年MM月DD日')
}

export const FormatCgangeYearMonth = (date: string): string => {
  return dayjs(date).format('YYYY年MM月')
}
