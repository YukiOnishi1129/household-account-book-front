import React, { FC } from 'react'

interface Props {
  txt: string
  handleClick: () => void
}

export type MyButtonProps = Props

export const MyButton: FC<Props> = ({ txt, handleClick }) => (
  <>
    <button onClick={handleClick}>{txt}</button>
  </>
)
