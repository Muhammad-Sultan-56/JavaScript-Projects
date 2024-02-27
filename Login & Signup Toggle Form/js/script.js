let sign = document.getElementById("sign");
let login = document.getElementById("login");
let move = document.getElementById("move");
let signupToggle = document.querySelector(".signupToggle");
let loginToggle = document.querySelector(".loginToggle");


login.addEventListener("click" , () => {
    move.classList.add("right");
    move.classList.add("login")
    move.classList.remove("signup");
    loginToggle.classList.add("loginForm")
    signupToggle.classList.remove("signupForm")

    move.innerHTML = "Login";
})

sign.addEventListener("click" , () => {
    move.classList.remove("right");
    loginToggle.classList.remove("loginForm")
    signupToggle.classList.add("signupForm")
    move.innerHTML = "Signup";

})