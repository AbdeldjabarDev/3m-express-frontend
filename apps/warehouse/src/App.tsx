import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'
import {Nav} from "ui";
function App() {
  const [color, setColor] = useState<boolean>(false)
 
  return (
    <>
      <div>
<Nav className={color ? "text-red-600":"text-blue-600"}></Nav>
<Button onClick={()=>{
  setColor(!color)
}}>Click me</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
