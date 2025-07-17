'use client'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <button onClick={()=>{
      signOut({
        callbackUrl: '/login',
      })
    }}>Đăng xuất</button>
  )
}

export default LogoutButton