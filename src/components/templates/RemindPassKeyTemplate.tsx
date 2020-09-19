import React, { FC, useState } from 'react'
import styled from 'styled-components'
import AuthForm from '@/components/organisms/common/AuthForm'
import FormTitle from '@/components/atoms/FormTitle'
import RemindForm from '@/components/molcules/RemindForm'
import useAuth from '@/contexts/auth'
import { LinkStatus } from '@/utils/consts'
import { EventType } from '@/types/events'
import { RemindValidError } from '@/types/errors'
import { RequestRemindKey } from '@/types/api/'
import { RequiredValidation, MaxLengthValidation } from '@/utils/validations'

const RemindPassKeyTemplate: FC = () => {
  const { remindKey } = useAuth()
  const [key, setKey] = useState('')
  const [remindKeyError, setRemindKeyError] = useState<RemindValidError>({
    value: '',
  })

  /**
   * 認証キー入力処理
   * @param event
   */
  const handleChangeKey: EventType['onChange'] = (event) => {
    setKey(event.target.value)
  }

  /**
   * パスワードリマインダー認証キー送信処理
   */
  const handleSubmitRemindMail = async () => {
    if (isValid(key, setRemindKeyError)) {
      const requestParam: RequestRemindKey = {
        auth_key: key,
      }
      await remindKey(requestParam)
    }
  }
  return (
    <AuthForm>
      <FormTitle title="パスワード再設定" />
      <Describe>
        メールに記載された認証キーを入力してください。
        <br />
        再設定したパスワードをメールにてご連絡いたします。
      </Describe>
      <RemindForm
        status={LinkStatus.SUBMIT}
        value={key}
        remindError={remindKeyError}
        changeValue={handleChangeKey}
        submit={handleSubmitRemindMail}
      />
    </AuthForm>
  )
}

export default RemindPassKeyTemplate

/**
 * バリデーション
 * @param key
 * @param setRemindKeyError
 */
const isValid = (
  key: string,
  setRemindKeyError: React.Dispatch<React.SetStateAction<RemindValidError>>
): boolean => {
  // バリデーションエラーを初期化
  setRemindKeyError({ value: '' })
  // バリデーションチェック
  let keyErrMsg = RequiredValidation(key)
  if (keyErrMsg === '') keyErrMsg = MaxLengthValidation(key, 255)
  if (keyErrMsg !== '') {
    setRemindKeyError({
      value: keyErrMsg,
    })
    return false
  }
  return true
}

const Describe = styled.p`
  padding: 30px 60px;
  line-height: 32px;
  /* font-size: 0.875rem; */
`
