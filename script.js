const containter = document.getElementById('constainer');
const register = document.getElementById('register');
const loginbtn =document.getElementById(Login);

registerBtn.addEventlistener('click', () =>{
    container.classList.add("active");
});

loginbtn.addEventlistener('click', () 
=>{
    container.classList.remove("active");
});