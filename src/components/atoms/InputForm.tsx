import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'

export type Props = {
  type: string
  comment: string
  value: string
  validError: boolean
  changeValue: EventType['onChange']
}

const InputForm: FC<Props> = ({
  type,
  comment,
  value,
  validError,
  changeValue,
}) => {
  const passFlg = type === 'password'
  return (
    <>
      {passFlg ? (
        <Input
          type={type}
          placeholder={comment}
          value={value}
          error={validError}
          minLength={8}
          maxLength={20}
          autoComplete="off"
          onChange={(event) => {
            changeValue(event)
          }}
        />
      ) : (
        <Input
          type={type}
          placeholder={comment}
          value={value}
          error={validError}
          maxLength={255}
          onChange={(event) => {
            changeValue(event)
          }}
        />
      )}
    </>
  )
}

export default InputForm

export type TProps = {
  error: boolean
}

const Input = styled.input`
  /* display: block; */
  padding: 15px 15px;
  width: 100%;
  /* height: 40px; */
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border: ${({ error }: TProps) => (error ? '1px solid #ea352d;' : 'none;')};
  border-radius: 5px;
  box-sizing: border-box;
  /* border: 1px solid #ea352d; */
`
