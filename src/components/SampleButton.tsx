import React, { FC, ReactElement } from 'react'

export interface SampleButtonProps {
  label: string
}

const SampleButton = (props: SampleButtonProps): ReactElement => {
  const { label } = props
  return <button>{label}</button>
}

export default SampleButton
