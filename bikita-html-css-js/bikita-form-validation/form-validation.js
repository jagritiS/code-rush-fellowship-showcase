document.getElementById("form").onsubmit=(e)=>{
 e.preventDefault();
 const email=email.value;
 const pass=password.value;
 if(!email.includes("@")) error.textContent="Invalid email";
 else if(pass.length<6) error.textContent="Password too short";
 else error.textContent="Success";
};
