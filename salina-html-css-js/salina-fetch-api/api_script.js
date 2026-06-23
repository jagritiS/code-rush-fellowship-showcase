async function loadUsers(){
 const res=await fetch("https://jsonplaceholder.typicode.com/users");
 const data=await res.json();
 users.innerHTML=data.map(u=>`<li>${u.name}</li>`).join("");
}
