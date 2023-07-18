let nome = prompt("qual seu nome?");
let vel = 0;
let newVel = prompt("Qual velocidade gostaria de colocar?");
let confirmVel = confirm(
  nome + " voce gostaria de colocar a nave a " + newVel + " KM/S"
);
if (confirmVel) {
  vel = newVel;
}

if (vel <= 0) {
  alert("a nave esta parada");
} else if (vel <= 40) {
  alert("Você está devagar. Podemos aumentar mais.");
} else if (vel <= 80) {
  alert("Parece uma boa velocidade para manter.");
} else if (vel <= 100) {
  alert("Velocidade alta. Considere diminuir");
} else {
  alert("Velocidade perigosa. Controle automático forçado.");
  vel = 60;
}
alert(nome + ", a velocidade atual é " + vel + " KM/S");
