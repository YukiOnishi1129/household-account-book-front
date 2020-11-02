import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/types/events'

export type Props = {
  value: string | number
  option: JSX.Element[]
  errMsg: string
  changeValue: EventType['onChangeSelect']
}

const SelectForm: FC<Props> = ({ value, option, errMsg, changeValue }) => {
  return (
    <>
      <_SELECT
        value={value}
        error={errMsg !== ''}
        onChange={(event) => {
          changeValue(event)
        }}
      >
        {option}
      </_SELECT>
      {errMsg !== '' && <_ValidErrorMsg>{errMsg}</_ValidErrorMsg>}
    </>
  )
}

export default SelectForm

export type TProps = {
  error: boolean
}

const _SELECT = styled.select`
  cursor: pointer;
  padding: 15px 15px;
  width: 100%;
  font-size: 1rem;
  font-family: '筑紫A丸ゴシック', sans-serif;
  border: ${({ error }: TProps) => (error ? '1px solid #ea352d;' : 'none;')};
  border-radius: 5px;
  box-sizing: border-box;
`

const _ValidErrorMsg = styled.p`
  padding-top: 5px;
  color: #ea352d;
`
