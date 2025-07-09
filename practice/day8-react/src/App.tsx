import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartScreen from './Ex1/pages/StartLogin/Start'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignUpScreen from './Ex1/pages/SignUp/SignUp'
import LoginScreen from './Ex1/pages/Login/Login'
import HomeScreen from './Ex1/components/index'
import Register from './Ex2/pages/Registerform'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<StartScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
