import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {IncrementCounter,InputFieldTracker,ToggleSwitch} from './Ex1/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IncrementCounter />
      <InputFieldTracker />
      <ToggleSwitch/>
    </>
  )
}

export default App
