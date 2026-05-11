// fetch data from api https://jsonplaceholder.typicode.com/users
//print in console
//useEffect
//async fetch
import React, { useState, useEffect } from "react";

function API_Fetch() {
    const [data, setData] = useState([]); //like empty table

    useEffect(() => {  //like a delivery driver
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setData(data); //serve in empty table
        }
        fetchData();
    }, []);

    /*"Fetching" from the internet is slow. It takes time.
    The await keyword ,tells the code: 
    "Hey, freeze right here. Do not go to the next line until the fetch comes back with the delivery payload."
    */
    return (
        <>
            <h2>API Fetch</h2>
            <ul>
                {data.map((item) => (  //data array one by one like waiter take note on order
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}
export default API_Fetch;