import React, { useState, useEffect } from 'react'

function DisableButton() {
    // button.disable concept
    // use state to control the button

    const [disabled, setDisabled] = useState(false)
    const handleClick = () => {
        setDisabled(true)
    }
    return (
        <>
            <h2>Disable Button</h2>
            <button onClick={handleClick} disabled={disabled}>Click</button>
        </>
    )
}

export default DisableButton