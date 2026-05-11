import { useState } from "react"

function ButtonTracker() {
    let [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <h2>Button Tracker</h2>
            <button onClick={handleClick}>Click</button>
            <p>button clicked {count} times</p>
        </>
    )
}
export default ButtonTracker