import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CURD from './components/afternoon/index'
import WeatherScreen from './components/homework/index'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CURD/> */}
      <WeatherScreen/>
    </>
  )
}

export default App
