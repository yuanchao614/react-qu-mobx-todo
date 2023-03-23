import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoPage from './pages/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TodoPage testMsg={'Todo App'} />
    </div>
  )
}

export default App
