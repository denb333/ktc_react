import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './pages/UserForm'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/navbar'
import { UserContext, UserProvider } from './Context/context'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <UserProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/form" element={<UserForm />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </BrowserRouter>
       {/* tsst */}
      </UserProvider>
    </>
  )
}

export default App
