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
