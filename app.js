
let password = document.getElementById("password");

document.getElementById("eyeIcon").addEventListener('click', showIcon);

function showIcon(){
    if(password.type == "password"){
        password.type = "text";
    } else{
        password.type = "password";

    }
}