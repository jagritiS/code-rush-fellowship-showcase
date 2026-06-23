const { useSyncExternalStore } = require("react");

async function loadUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    useSyncExternalStore.innerHTML =data.map(u=> <li>${u.name}</li>).join("");

}