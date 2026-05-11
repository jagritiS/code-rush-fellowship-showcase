//home, about, contact
//consitional rendering
//component switching
import React, { useState, useEffect } from 'react'

function TabSystem() {
    const [Tab, setTab] = useState("home")
    const handleTabClick = (tab) => {
        setTab(tab)
    }
    return (
        <>
            <div className="buttons">
                <button onClick={() => handleTabClick("home")}>Home</button>
                <button onClick={() => handleTabClick("about")}>About</button>
                <button onClick={() => handleTabClick("contact")}>Contact</button>
            </div>
            <div className="content">
                {Tab === "home" && <div>home page</div>}
                {Tab === "about" && <div>about page</div>}
                {Tab === "contact" && <div>contact page</div>}
            </div>
        </>
    )
}
export default TabSystem;