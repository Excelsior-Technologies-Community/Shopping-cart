import { useState } from 'react';
import Shop from './Shopping';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shop/>
    </>
  )
}

export default App
