import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Radar from './Components/Radar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>

      <Radar/>

      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
