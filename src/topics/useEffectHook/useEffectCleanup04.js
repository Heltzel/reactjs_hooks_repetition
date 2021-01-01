import React, { useState } from 'react'
import UseEffectOnlyOnce03 from './useEffectOnlyOnce03'

function UseEffectCleanup04() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display)
        }}
      >
        Toggle Display
      </button>
      {/* clean up exec in UseEffectOnlyOnce03 */}
      {display && <UseEffectOnlyOnce03 />}
    </div>
  )
}

export default UseEffectCleanup04
