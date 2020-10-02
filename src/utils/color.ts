import { CategoryColor } from '@/utils/consts'

/**
 * カテゴリーカラー表示
 * @param type
 */
export const showColor = (type: number): string => {
  switch (type) {
    case 1:
      return CategoryColor.FIRST
    case 2:
      return CategoryColor.SECOND
    case 3:
      return CategoryColor.THIRD
    case 4:
      return CategoryColor.FORTH
    case 5:
      return CategoryColor.FIFTH
    case 6:
      return CategoryColor.SIXTH
    case 7:
      return CategoryColor.SEVENTH
    case 8:
      return CategoryColor.EIGHTH
    default:
      return '#fff;'
  }
}
