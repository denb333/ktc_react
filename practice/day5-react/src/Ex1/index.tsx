import React, { useState } from 'react'

// type Props = {}

export const IncrementCounter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2> Exercise 1: Button Click Counter</h2>
            <button onClick={handleClick}>click me!</button>
            <p>Clicked: {count} times</p>
        </div>
    )
}

export const InputFieldTracker: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2> Exercise 2: Input Field Tracker</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Current input: {inputValue}</p>
        </div>
    )
}

//togle witch
export const ToggleSwitch: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2> Exercise 3: Toggle Switch</h2>
            <button onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</button>
            <p>Switch is {isOn ? 'ON' : 'OFF'}</p>
        </div>
    )
}
export const Hoverhighlight: React.FC = ()=>{
    const [isHovered, setHoverd] = useState
}
