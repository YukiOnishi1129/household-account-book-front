import React, { FC, ReactElement, useState, useCallback } from 'react'

export interface ExampleProps {
  text: string
  flag?: boolean
  action(): void
}

const Example = (props: ExampleProps): ReactElement => {
  const { text, flag, action } = props
  const [count, countChg] = useState(0)
  const countUp = useCallback(() => countChg((prev) => prev + 1), [])
  const countDown = useCallback(() => countChg((prev) => prev - 1), [])
  return (
    <div>
      {flag && <p>{text}</p>}
      <button onClick={action}>ボタン</button>
      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  )
}

export default Example
