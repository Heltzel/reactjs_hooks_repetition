import React, { useState, useEffect } from 'react'

function UseEffectOnlyOnce03() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mousePos = (e) => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('mousemove', mousePos)
    return () => {
      console.log('exec cleanup code')
      window.removeEventListener('mousemove', mousePos)
    }
  }, [])

  return (
    <div>
      <span>
        {' '}
        x: {x} , y: {y}
      </span>
    </div>
  )
}

export default UseEffectOnlyOnce03
