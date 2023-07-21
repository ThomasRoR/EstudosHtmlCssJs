let nome = "";
let novoNome = "";
let letra1 = "";
let letra2 = "";
nome = prompt("digite um nome");
letra1 = prompt("digite a letra que deseja remover");
letra2 = prompt("digite a letra para por no lugar");

for (let i = 0; i < nome.length; i++) {
  if (nome[i] == letra1) {
    novoNome += letra2;
  } else {
    novoNome += nome[i];
  }
  console.log(i);
}
alert(novoNome);
