import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export const CurrentDate = (): string => {
  return dayjs().format('YYYY-MM-DD')
}
