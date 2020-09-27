import React, { FC, ReactNode } from 'react'
import Modal from 'styled-react-modal'

export type Props = {
  children: ReactNode
  isOpen: boolean
  closeDialog: () => void
}

const BaseDialog: FC<Props> = ({ children, isOpen, closeDialog }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onBackgroundClick={closeDialog}
      onEscapeKeydown={closeDialog}
    >
      {children}
    </Dialog>
  )
}

export default BaseDialog

const Dialog = Modal.styled`
  padding: 60px;
  box-sizing: border-box;
  border-radius: 30px;
  width: 30rem;
  min-height: 20rem;
  background-color: #FAEAF8;
`
