import { showColor } from '@/utils/color'
import { CategoryColor } from '@/utils/consts'

describe('カテゴリーカラー表示(showColor)', () => {
  it('【正常系】カラータイプが1の場合', () => {
    expect(showColor(1)).toBe(CategoryColor.FIRST)
  })
  it('【正常系】カラータイプが2の場合', () => {
    expect(showColor(2)).toBe(CategoryColor.SECOND)
  })
  it('【正常系】カラータイプが3の場合', () => {
    expect(showColor(3)).toBe(CategoryColor.THIRD)
  })
  it('【正常系】カラータイプが4の場合', () => {
    expect(showColor(4)).toBe(CategoryColor.FORTH)
  })
  it('【正常系】カラータイプが5の場合', () => {
    expect(showColor(5)).toBe(CategoryColor.FIFTH)
  })
  it('【正常系】カラータイプが6の場合', () => {
    expect(showColor(6)).toBe(CategoryColor.SIXTH)
  })
  it('【正常系】カラータイプが7の場合', () => {
    expect(showColor(7)).toBe(CategoryColor.SEVENTH)
  })
  it('【正常系】カラータイプが8の場合', () => {
    expect(showColor(8)).toBe(CategoryColor.EIGHTH)
  })
  it('【異常系】カラー対応が上記以外の場合', () => {
    expect(showColor(9)).toBe('#fff;')
  })
})
