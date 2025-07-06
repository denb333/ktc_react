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
export const Hoverhighlight: React.FC = () => {
    const [isHovered, setHoverd] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setHoverd(true);
    }
    const handleMouseLeave = () => {
        setHoverd(false);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Exercise 4: Hover Highlight</h2>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
                width: "200px",
                height: "100px",
                backgroundColor: isHovered ? 'yellow' : 'lightgray',
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                transition: "background-color 0.3s ease"
            }}>
                <p>{isHovered ? 'Hovered!' : 'Hover over me!'}</p>
            </div>
        </div>
    )
}
export const FormAlert: React.FC = () => {
    const [Inputvalue, setInputValue] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Inputvalue.trim() !== '') {
            alert(`You submitted: ${Inputvalue}`);
            setInputValue('');
        } else {
            alert("Please enter a value before submitting.");
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "center", padding: "40px" }}>
            <h2>Exercise 5: Form Submission Alert</h2>
            <input type='text'
                placeholder="Enter something..."
                value={Inputvalue}
                onChange={handleChange}
                style={{ padding: "8px", width: "250px", marginRight: "10px" }}
            />
            <button type='submit'>Submit</button>
        </form>
    );

}
export const Keytracker: React.FC = () => {
    const [latekey, setLateKey] = useState<string>('');
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setLateKey(e.key);
    };

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Exercise: Last Key Pressed</h2>
            <input
                type="text"
                placeholder="Type here..."
                onKeyDown={handleKeyDown}
                style={{ padding: "8px", width: "250px" }}
            />
            <p>Last key: {latekey || "None"}</p>
        </div>
    );
}
export const DoubleCkick: React.FC = () => {
    const [doubleClick, setDoubleClick] = useState<boolean>(false);
    const handleDoubleclick = () => {
        setDoubleClick(true);
        setTimeout(() => {
            setDoubleClick(false);
        }, 2000);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }} className="div" >
            <h2>Exercise7: Double Click Message</h2>
            <button onDoubleClick={handleDoubleclick}>
                Click me1
            </button>
            {doubleClick && <p>Double-clicked!</p>}
        </div>
    )
}
export const DropdowSelection: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Apple');
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    }
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Exercise8: Dropdow Selected</h2>
            <select value={selectedOption} onChange={handleChange}>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Orange">Orange</option>
            </select>
            <p>Selected: {selectedOption}</p>
        </div>
    );
}

export const CheckBox: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Exercise8: Dropdow Selected</h2>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(prev => !prev)}
                    style={{ marginRight: 6 }}
                />
                Toggle me
            </label>
            <p>Checkbox is: {checked ? "checked" : "unchecked"}</p>
        </div>
    );
}

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

export const SearchItem: React.FC = () => {
    const [searchItem, setSearchItem] = useState<string>('');
    const fillerItems = items.filter(item => item.toLowerCase().includes(searchItem.toLowerCase()));
    return (
        <div style={{  textAlign: "center", padding: "40px"  }} className="div">
            <h2>Exercise 10: Search Filter</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
                style={{ padding: "8px", width: "250px" }}
            />
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                   {fillerItems.length > 0 ? 
                   (fillerItems.map((item, index) => <li key={index}>{item}</li>))
                   :(<li>No matching items</li>)}
            </ul>
        </div>
    )
}