import React, { FC, useState } from 'react'
import AuthForm from '@/components/organisms/common/AuthForm'
import FormTitle from '@/components/atoms/FormTitle'
import ChangePassowordForm from '@/components/molcules/changePassword/ChangePasswordForm'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { ChangePasswordValidError } from '@/types/errors'
import { RequestChangePassword } from '@/types/api/'
import ApiClient from '@/network/ApiClient'
import {
  RequiredValidation,
  AlphanumericValidation,
  ValueLengthValidation,
  MatchPasswordValidation,
  UnMatchPasswordValidation,
} from '@/utils/validations'

const ChangePasswordTemplate: FC = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [changePasswordError, setChangePasswordError] = useState<
    ChangePasswordValidError
  >({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  /**
   * 現在のパスワード入力処理
   * @param event
   */
  const handleChangeCurentPassword: EventType['onChange'] = (event) => {
    setCurrentPassword(event.target.value)
  }

  /**
   * 新しいパスワード入力処理
   * @param event
   */
  const handleChangeNewPassword: EventType['onChange'] = (event) => {
    setNewPassword(event.target.value)
  }

  /**
   * 新しいパスワード(再入力)入力処理
   * @param event
   */
  const handleChangeConfirmNewPassword: EventType['onChange'] = (event) => {
    setConfirmNewPassword(event.target.value)
  }

  /**
   * パスワード変更処理
   */
  const handleChangePassword = async () => {
    if (
      isValid(
        currentPassword,
        newPassword,
        confirmNewPassword,
        setChangePasswordError
      )
    ) {
      const requestParam: RequestChangePassword = {
        current_password: currentPassword,
        new_password: newPassword,
      }
      try {
        const response = await ApiClient.user.changePassword(requestParam)
        if (response && response.status === 422) {
          return
        } else if (response && response.status === 401) {
          return
        }
        // 初期化
        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
      } catch (error) {}
    }
  }

  return (
    <AuthForm>
      <FormTitle title="パスワード変更" />
      <ChangePassowordForm
        status={LinkStatus.CHANGE}
        currentPassword={currentPassword}
        newPassword={newPassword}
        confirmNewPassword={confirmNewPassword}
        changePasswordError={changePasswordError}
        changeCurrentPassword={handleChangeCurentPassword}
        changeNewPassword={handleChangeNewPassword}
        changeConfirmNewPassword={handleChangeConfirmNewPassword}
        submit={handleChangePassword}
      />
    </AuthForm>
  )
}

export default ChangePasswordTemplate

/**
 * バリデーション処理
 * @param currentPassword
 * @param newPassword
 * @param confirmNewPassword
 * @param setChangePasswordError
 */
const isValid = (
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string,
  setChangePasswordError: React.Dispatch<
    React.SetStateAction<ChangePasswordValidError>
  >
): boolean => {
  // バリデーションの初期化
  setChangePasswordError({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  //   バリデーションチェック
  //   必須チェック
  let curPassErrMsg = RequiredValidation(currentPassword)
  let newPassErrMsg = RequiredValidation(newPassword)
  const newConfirmPassErrMsg = RequiredValidation(confirmNewPassword)
  //   半角英数チェック
  if (curPassErrMsg === '')
    curPassErrMsg = AlphanumericValidation(currentPassword)
  if (newPassErrMsg === '') newPassErrMsg = AlphanumericValidation(newPassword)
  //   文字数チェック
  if (curPassErrMsg === '')
    curPassErrMsg = ValueLengthValidation(currentPassword, 8, 20)

  if (newPassErrMsg === '')
    newPassErrMsg = ValueLengthValidation(newPassword, 8, 20)
  // パスワード不一致チェック
  if (curPassErrMsg === '' && newPassErrMsg === '')
    curPassErrMsg = UnMatchPasswordValidation(currentPassword, newPassword)
  // パスワード一致チェック
  if (newPassErrMsg === '' && newConfirmPassErrMsg === '')
    newPassErrMsg = MatchPasswordValidation(newPassword, confirmNewPassword)
  if (
    curPassErrMsg !== '' ||
    newPassErrMsg !== '' ||
    newConfirmPassErrMsg !== ''
  ) {
    setChangePasswordError({
      currentPassword: curPassErrMsg,
      newPassword: newPassErrMsg,
      confirmNewPassword: newConfirmPassErrMsg,
    })
    return false
  }
  return true
}
