
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let conteinerPassword = document.querySelector ("conteinerPassword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass= "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
    }
    
    document.getElementById("conteinerPassword").removeAttribute("class","hide");
    password.innerHTML = pass;
    novaSenha = pass;

}
 
function copyPassword(){
    debugger; 
    //alert("senha copiada com sucesso!")
    var senha = document.getElementById("password").innerHTML;
    navigator.clipboard.writeText(senha);
}



