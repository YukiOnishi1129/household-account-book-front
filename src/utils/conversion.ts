import { LinkStatus } from '@/utils/consts'

/**
 * ボタンラベル名変換処理
 * @param status
 */
export const getLabelName = (status: string): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return 'ログイン'
    case LinkStatus.PARTNER_LOGIN:
      return 'パートナーログイン'
    case LinkStatus.SIGNUP:
      return '新規会員登録'
    case LinkStatus.SUBMIT:
      return '送信'
    case LinkStatus.CHANGE:
      return '変更'
    case LinkStatus.REGISTER:
      return '登録'
    case LinkStatus.DELETE:
      return '削除'
    case LinkStatus.CANCEL:
      return 'キャンセル'
    case LinkStatus.CATEGORY:
      return 'カテゴリを編集'
    default:
      return 'TOP'
  }
}
