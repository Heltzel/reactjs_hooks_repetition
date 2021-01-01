import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectFetchData06() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  const handleClick = () => {
    setIdFromBtnClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => console.log(err))
    return () => {}
  }, [idFromBtnClick])

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  )
}

export default UseEffectFetchData06
