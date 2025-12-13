// Get user inputs using window prompt
let fullName = prompt("Enter your full name:");
let email = prompt("Enter your email address:");
let password = prompt("Enter your password:");
let confirmPassword = prompt("Confirm your password:");
let age = prompt("Enter your age:");

if (fullName.length >= 2) {
    alert("Success!");
} 
else {
    alert("Full Name must contain at least two words");
}

if (!email ||indexOf("@")) {
    alert("email is valid!");
}
else {
    alert("Must follow a valid email format (e.g. example@domain.com).");
}

if (password.length >= 8) {
    alert("Password is valid!");
}
else {
    alert("Password must be at least 8 characters long.");
}

if (password === confirmPassword) {
    alert("Passwords match!");
}       
else {
    alert("Passwords do not match.");
}   

if (Number(age) >= 18) {
    alert("Age is valid!");
}                                   
else {
    alert("You must be 18 years or older.");
}   

