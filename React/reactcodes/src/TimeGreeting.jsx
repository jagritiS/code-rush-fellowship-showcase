import React, { useState, useEffect } from "react";

function TimeGreeting() {
    //time setup
    //if-else condition
    //good morning, good afternoon, good evening according to current time
    //use useeffect to update time every second
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hour = time.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <>
            <h2>Time Greeting</h2>
            <p>{greeting}</p>
        </>
    );
}

export default TimeGreeting;
