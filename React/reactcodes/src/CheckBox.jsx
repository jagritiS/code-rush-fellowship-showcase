//list items with checkbox
//track selected items
//array state
//events
//list updates
import React, { useState } from "react";

function CheckBox() {
    const [items, setItems] = useState([
        { id: 1, text: "React", checked: false },
        { id: 2, text: "Python", checked: false },
        { id: 3, text: "Django", checked: false },
        { id: 4, text: "Nodejs", checked: false },
    ]);
    const handleCheck = (id) => {
        setItems(items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
    }
    return (
        <>
            <h2>Checkbox</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default CheckBox;