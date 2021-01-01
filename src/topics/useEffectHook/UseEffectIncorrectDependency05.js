import React, { useState, useEffect } from 'react'

function UseEffectIncorrectDependency05() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h4>Counter: {count}</h4>
    </div>
  )
}

export default UseEffectIncorrectDependency05
