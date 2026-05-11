import React, { useState, useEffect } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //Stop the interval if this component is removed
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <h2>Live Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
}

export default LiveClock;