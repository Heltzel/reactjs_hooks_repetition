import React, { useContext } from 'react'
import { PostContext } from './contexts/PostContext'

function UseContextHook() {
  const { data, dispatch } = useContext(PostContext)

  const handleDispatch = () => {
    dispatch({
      type: 'ADD_POST',
      post: {
        title: 'new title',
        body: 'new text',
      },
    })
  }
  return (
    <div>
      <h2> context and reducer demo</h2>
      <button onClick={handleDispatch}>Dispatch</button>
      {data.lenght}
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.title}
              {item.id}
            </h4>
            <p>
              {item.body} {item.id}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default UseContextHook
