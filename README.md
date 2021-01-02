# ReactJs Hooks Repetiton

## Objective:

Learn React in an eccentric circle.

Same topics, but a bit deeper or, from a different perspective.

***
## Note:

The src folder contains subfolders about the topics.

The imports in  App.js need to be modified manualy.

powerpointSlides contains handy reminders.

***

## Topics:

<ol>
  <li>useState</li>
  <li>useEffect</li>
  <li>useContext</li>
  <li>useReducer</li>
  <li>useCallback</li>
  <li>useMemo</li>
  <li>useRef</li>
  <li>custom hooks</li>
</ol>

***
# Create a context and reducer workflow

<ol>
<li>
Basic imports

```javascript

import React, { createContext, useState } from 'react'

```
</li>

<li>
 Don't forget to place the parentecies

```javascript
export const PostContext = createContext()

```
</li>

<li>
Barebones contextProvider

```javascript
const PostContextProvider = (props) => {}

```
</li>
<li>
create data functionality

```javascript

const PostContextProvider = (props) => {
  const [data, setData] = useState([
    { id: 1, title: 'My title', body: 'My Text' },
  ])
  const addPost = (title, body) => {
    const tempId = data.length
    setData([
      ...data,
      {
        id: tempId,
        title: title,
        body: body,
      },
    ])
  }
}

```
</li>
<li>
Return JSX.  call:  Provider  on the created context and provide value as an object

```javascript

  return (
    <PostContext.Provider value={{ data, setData, addPost, removePost, }}>

    </PostContext.Provider>
  )

```
</li>
<li>
props.children represents the components that PostContextProvider is going to wrap

```javascript

  return (
    <PostContext.Provider value={{ data, setData, addPost, removePost, }}>
        {props.children}
    </PostContext.Provider>
  )

```
</li>
<li>
Export the provider

```javascript

  export default PostContextProvider

```
</li>

<li>
Goto App.js. Import the context. Wrap the components that need access to this context

```javascript

import './App.css'
import PostContextProvider from './topics/useContextHook/contexts/PostContext'
import Index from './topics/useContextHook/UseContextHook'

function App() {
  return (
    <div className="App container">
      <PostContextProvider>
        <Index />
      </PostContextProvider>
    </div>
  )
}

export default App


```
</li>
<li>
Import useContext in to the component you wan to use it in. And import the correct context.

```javascript

import React, { useContext } from 'react'
import { PostContext } from './contexts/PostContext'
```
</li>
<li>
Destructure the props 

```javascript

function UseContextHook() {
  const { data, addPost, removePost } = useContext(PostContext)
  return ( 
    <div>
      {data.map( item=> <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

```
</li>
</ol>

***

## Refactor to enable reducer

***

<ol>
<li>
Create reducer file. Don't import react

```javascript
export const postReducer = (state, action) => {}

```
</li>
<li>
Create a switch statement

```javascript
export const postReducer = (state, action) => {

  switch (action.type) {

    case 'ADD_POST':
      return [
        ...state,
        {
          id: state.length,
          title: action.post.title,
          body: action.post.body,
        },
      ]

    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.id)

    default:
      return state
  }
}

```
</li>
<li>
Goto the  (post) context. import useReducer.  delete useState and replace it in the code with useReducer

```javascript
import React, { createContext, useReducer } from 'react'

```
</li>
<li>
Replace useState with useReducer. Import the reducer of choice and pass it in as 1st param

```javascript

import { postReducer } from '../../useReducerHook/reducers/PostReducer'

  const [data, setData] = useReducer(postReducer, [
    { id: 1, title: 'My title', body: 'My Text' },
  ])

```
</li>
<li>
Replace setData with the reducer function dispatch

```javascript

  const [data, dispatch] = useReducer(postReducer, [
    { id: 1, title: 'My title', body: 'My Text' },
  ])

```
</li>
<li>
Remove the methods (They are in the reducer now), and replace the references in the value prop with dispatch

```javascript
  return (
    <PostContext.Provider value={{ data, dispatch }}>
      {props.children}
    </PostContext.Provider>
  )

```
</li>
<li>
Goto the component you want to use it in, and replace te destructureing with dispatch

```javascript
function UseContextHook() {
  const { dispatch } = useContext(PostContext)
  return <div></div>
}
```
</li>
</ol># reactjs_hooks_repetition
