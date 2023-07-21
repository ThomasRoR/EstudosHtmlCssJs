let password = "";
let passwordinverted = "";
let letter = "";
password = prompt("Digite a senha:");
letter = prompt("Qual letra gostaria de ocultar?");

// for (let i = 0; i < password.length; i++) {
//   if (password[i] == letter) {
//     break;
//   }
//   password[9];
// }

for (let i = password.length - 1; i >= 0; i--) {
  if (password[i] == letter) {
    break;
  }
  console.log(password[i]);
  passwordinverted += password[i];
}

alert(
  " Senha: " +
    password +
    "\nletra proibida: " +
    letter +
    " \n Nova senha invertida: " +
    passwordinverted
);
