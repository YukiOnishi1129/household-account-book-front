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

/**
 * 選択済みのカラー表示
 * @param type
 */
export const showSelectedColor = (type: number, error: boolean): string => {
  let style = ''
  switch (type) {
    case 1:
      style = getSelectedCategoryColor(CategoryColor.FIRST)
      break
    case 2:
      style = getSelectedCategoryColor(CategoryColor.SECOND)
      break
    case 3:
      style = getSelectedCategoryColor(CategoryColor.THIRD)
      break
    case 4:
      style = getSelectedCategoryColor(CategoryColor.FORTH)
      break
    case 5:
      style = getSelectedCategoryColor(CategoryColor.FIFTH)
      break
    case 6:
      style = getSelectedCategoryColor(CategoryColor.SIXTH)
      break
    case 7:
      style = getSelectedCategoryColor(CategoryColor.SEVENTH)
      break
    case 8:
      style = getSelectedCategoryColor(CategoryColor.EIGHTH)
      break
    default:
      style = error
        ? 'background: #fff; color: #757575; border: 1px solid #ea352d;'
        : 'background: #fff; color: #757575; border: 1px solid #fff;'
  }
  return style
}

/**
 * カテゴリーカラーのsタイル取得
 * @param color
 */
export const getSelectedCategoryColor = (color: string): string => {
  return (
    'background: ' + color + ' color: ' + color + ' border: 1px solid #707070;'
  )
}
