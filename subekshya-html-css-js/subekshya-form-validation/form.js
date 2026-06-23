const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

form.onsubmit = (e) => {
 e.preventDefault();

 const email = emailInput.value;
 const pass = passwordInput.value;

 if (!email.includes("@")) 
     error.textContent = "Invalid email";
 else if (pass.length < 6) 
     error.textContent = "Password too short";
 else 
     error.textContent = "Success";
};