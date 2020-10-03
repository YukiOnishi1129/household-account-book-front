import React, { FC, useState } from 'react'
import usePartner from '@/contexts/partner'
import ContentsForm from '@/components/organisms/common/ContentsForm'
import FormTitle from '@/components/atoms/FormTitle'
import PartnerForm from '@/components/molcules/partner/PartnerForm'
import { LinkStatus } from '@/utils/consts'
import { RequestPartner } from '@/types/api/'
import { EventType } from '@/types/events'
import { PartnerValidError } from '@/types/errors'
import {
  RequiredValidation,
  EmailValidation,
  MaxLengthValidation,
} from '@/utils/validations'

const AddPartnerForm: FC = () => {
  const { addPartner } = usePartner()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [partnerError, setPatnerError] = useState<PartnerValidError>({
    name: '',
    email: '',
  })

  /**
   * 氏名入力処理
   * @param event
   */
  const handleChangeName: EventType['onChange'] = (event) => {
    setName(event.target.value)
  }
  /**
   * メールアドレス入力処理
   * @param event
   */
  const handleChangeEmail: EventType['onChange'] = (event) => {
    setEmail(event.target.value)
  }

  /**
   * パートナー登録処理
   */
  const handleSubmitAddPartner = async () => {
    if (isValid(name, email, setPatnerError)) {
      const requestData: RequestPartner = {
        name: '',
        email: '',
      }
      await addPartner(requestData)
      // 入力項目初期化
      setName('')
      setEmail('')
    }
  }

  return (
    <ContentsForm>
      <FormTitle title="共有パートナー登録" space="sm" />
      <PartnerForm
        status={LinkStatus.REGISTER}
        name={name}
        email={email}
        partnerError={partnerError}
        changeName={handleChangeName}
        changeEmail={handleChangeEmail}
        submit={handleSubmitAddPartner}
      />
    </ContentsForm>
  )
}

export default AddPartnerForm

/**
 * バリデーション
 * @param name
 * @param email
 * @param setPatnerError
 */
const isValid = (
  name: string,
  email: string,
  setPatnerError: React.Dispatch<React.SetStateAction<PartnerValidError>>
): boolean => {
  // バリデーションエラー初期化
  setPatnerError({ name: '', email: '' })
  // バリデーションチェック
  let nameErrMsg = RequiredValidation(name)
  let emailErrMsg = RequiredValidation(email)
  if (nameErrMsg === '') nameErrMsg = MaxLengthValidation(name, 15)
  if (emailErrMsg === '') emailErrMsg = EmailValidation(email)
  if (emailErrMsg === '') emailErrMsg = MaxLengthValidation(email, 255)
  if (nameErrMsg !== '' || emailErrMsg !== '') {
    setPatnerError({
      name: nameErrMsg,
      email: emailErrMsg,
    })
    return false
  }
  return true
}
