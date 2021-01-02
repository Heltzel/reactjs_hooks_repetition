import React, { createContext, useReducer } from 'react'
import { postReducer } from '../../useReducerHook/reducers/PostReducer'

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const [data, dispatch] = useReducer(postReducer, [])

  return (
    <PostContext.Provider value={{ data, dispatch }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
