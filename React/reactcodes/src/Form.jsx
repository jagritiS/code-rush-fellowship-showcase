import React, { useState } from 'react'
function Form() {
    //name, email
    //show and hide password
    //print both in console
    //controlled input
    //multiple state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* Is showPassword true? (?) If yes, be 'text'. Else (:) be 'password'.*/}
                <button type="button" onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"}</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;