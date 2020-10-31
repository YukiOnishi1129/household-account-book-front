import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'

export type Props = {
  type: string
  comment: string
  value: string | number
  length?: number
  errMsg: string
  changeValue: EventType['onChange']
}

const InputForm: FC<Props> = ({
  type,
  comment,
  value,
  length,
  errMsg,
  changeValue,
}) => {
  const autoComp = type === 'password' ? 'off' : 'on'
  const maxLen = length ? length : 255
  return (
    <>
      <Input
        type={type}
        placeholder={comment}
        value={value}
        error={errMsg !== ''}
        maxLength={maxLen}
        autoComplete={autoComp}
        onChange={(event) => {
          changeValue(event)
        }}
      />
      {errMsg !== '' && <ValidErrorMsg>{errMsg}</ValidErrorMsg>}
    </>
  )
}

export default InputForm

export type TProps = {
  error: boolean
}

const Input = styled.input`
  padding: 15px 15px;
  width: 100%;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border: ${({ error }: TProps) => (error ? '1px solid #ea352d;' : 'none;')};
  border-radius: 5px;
  box-sizing: border-box;
`

const ValidErrorMsg = styled.p`
  padding-top: 5px;
  color: #ea352d;
`
