import { useState } from 'react'
import './App.css'
import Wasm from "./wasm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Wasm/>
    </>
  )
}

export default App
