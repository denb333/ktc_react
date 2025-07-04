import React from 'react'
import './Button.css'
type Props = {
    children?: String;
    name: string;
    width: number
}
export default function Button({children, name, width}: Props) {
  return (
    <>
    <button  style={{width: `${width}px`, height: '40px', backgroundColor: 'blue', color: 'white', borderRadius: '5px'}}>{children}
        {name}</button>
        </>
  )
}
