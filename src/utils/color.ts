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
 *
 * @param type
 */
export const showSelectedColor = (type: number): string => {
  switch (type) {
    case 1:
      return (
        'background: ' +
        CategoryColor.FIRST +
        ' color: ' +
        CategoryColor.FIRST +
        ' border: 1px solid #707070;'
      )
    case 2:
      return (
        'background: ' +
        CategoryColor.SECOND +
        ' color: ' +
        CategoryColor.SECOND +
        ' border: 1px solid #707070;'
      )
    case 3:
      return (
        'background: ' +
        CategoryColor.THIRD +
        ' color: ' +
        CategoryColor.THIRD +
        ' border: 1px solid #707070;'
      )
    case 4:
      return (
        'background: ' +
        CategoryColor.FORTH +
        ' color: ' +
        CategoryColor.FORTH +
        ' border: 1px solid #707070;'
      )
    case 5:
      return (
        'background: ' +
        CategoryColor.FIFTH +
        ' color: ' +
        CategoryColor.FIFTH +
        ' border: 1px solid #707070;'
      )
    case 6:
      return (
        'background: ' +
        CategoryColor.SIXTH +
        ' color: ' +
        CategoryColor.SIXTH +
        ' border: 1px solid #707070;'
      )
    case 7:
      return (
        'background: ' +
        CategoryColor.SEVENTH +
        ' color: ' +
        CategoryColor.SEVENTH +
        ' border: 1px solid #707070;'
      )
    case 8:
      return (
        'background: ' +
        CategoryColor.EIGHTH +
        ' color: ' +
        CategoryColor.EIGHTH +
        ' border: 1px solid #707070;'
      )
    default:
      return 'background: #fff; color: #757575; border: 1px solid #fff;'
  }
}
