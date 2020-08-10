import React, { FC, useState } from 'react'

// Cypressテスト用のpages
const Counter: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <span className="counter">{count}</span>
      <button className="increment" onClick={increment}>
        +
      </button>
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={handleReset}>
        リセット
      </button>
    </div>
  )
}

export default Counter
