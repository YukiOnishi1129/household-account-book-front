import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'

export type Props = {
  type: string
  comment: string
  value: string
  changeValue: EventType['onChange']
}

const InputForm: FC<Props> = ({ type, comment, value, changeValue }) => {
  const passFlg = type === 'password'
  return (
    <>
      {passFlg ? (
        <Input
          type={type}
          placeholder={comment}
          value={value}
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
          onChange={(event) => {
            changeValue(event)
          }}
        />
      )}
    </>
  )
}

export default InputForm

const Input = styled.input`
  /* display: block; */
  padding: 15px 15px;
  width: 100%;
  /* height: 40px; */
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
`
