//start from 10 goto 0
//setInterval
//useEffect
//cleanup
//state updates
import { useState, useEffect } from "react";

function CountTimer() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {

                if (prevCount <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <h2>Count Timer</h2>
            <p>{count}</p>
        </>
    )
}
export default CountTimer;