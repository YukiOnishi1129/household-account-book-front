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
      style =
        'background: ' +
        CategoryColor.FIRST +
        ' color: ' +
        CategoryColor.FIRST +
        ' border: 1px solid #707070;'
      break
    case 2:
      style =
        'background: ' +
        CategoryColor.SECOND +
        ' color: ' +
        CategoryColor.SECOND +
        ' border: 1px solid #707070;'
      break
    case 3:
      style =
        'background: ' +
        CategoryColor.THIRD +
        ' color: ' +
        CategoryColor.THIRD +
        ' border: 1px solid #707070;'
      break
    case 4:
      style =
        'background: ' +
        CategoryColor.FORTH +
        ' color: ' +
        CategoryColor.FORTH +
        ' border: 1px solid #707070;'
      break
    case 5:
      style =
        'background: ' +
        CategoryColor.FIFTH +
        ' color: ' +
        CategoryColor.FIFTH +
        ' border: 1px solid #707070;'
      break
    case 6:
      style =
        'background: ' +
        CategoryColor.SIXTH +
        ' color: ' +
        CategoryColor.SIXTH +
        ' border: 1px solid #707070;'
      break
    case 7:
      style =
        'background: ' +
        CategoryColor.SEVENTH +
        ' color: ' +
        CategoryColor.SEVENTH +
        ' border: 1px solid #707070;'
      break
    case 8:
      style =
        'background: ' +
        CategoryColor.EIGHTH +
        ' color: ' +
        CategoryColor.EIGHTH +
        ' border: 1px solid #707070;'
      break
    default:
      style = error
        ? 'background: #fff; color: #757575; border: 1px solid #ea352d;'
        : 'background: #fff; color: #757575; border: 1px solid #fff;'
  }
  return style
}
