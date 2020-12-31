import React, { useState } from 'react'

function PreviousCounter03() {
  const [count, setCount] = useState(0)

  const wrongIncFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount(count + 1)
    }
  }

  const prevIncFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={wrongIncFive}>Wrong Inc 5</button>
      <button onClick={prevIncFive}>Prev Inc 5</button>
    </div>
  )
}

export default PreviousCounter03
