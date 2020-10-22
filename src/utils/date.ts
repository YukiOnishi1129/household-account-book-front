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
 * 現在月を取得
 */
export const CurrentMonth = (): string => {
  return dayjs().format('YYYY-MM-DD').slice(0, -3) + '-01'
}

/**
 * 日付フォーマット変換(YYYY年MM月DD日)
 * @param date
 */
export const FormatChangeYearMonthDate = (date: string): string => {
  return dayjs(date).format('YYYY年MM月DD日')
}

/**
 * 日付フォーマット変換(YYYY年MM月)
 * @param date
 */
export const FormatCgangeYearMonth = (date: string): string => {
  return dayjs(date).format('YYYY年MM月')
}

/**
 * 日付フォーマット変換(YYYY-MM-DD)
 * @param date
 */
export const FormatHyphenYearMonthDate = (date: string): string => {
  return dayjs(date).format('YYYY-MM-DD')
}
