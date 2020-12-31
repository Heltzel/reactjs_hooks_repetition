import React, { useState } from 'react'

function ArrayUseState05() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: `item  ${items.length + 1}` },
    ])
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <br />
      Items:
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayUseState05
