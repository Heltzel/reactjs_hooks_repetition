import React, { useState } from 'react'

function ObjectUserState() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>first name: {name.firstName}</h2>
      <h2>last name: {name.lastName}</h2>
      {JSON.stringify(name)}
    </form>
  )
}

export default ObjectUserState
