let velocidade = 50;
let aceleracao = 5;

do {
  console.log("acelerando, estamos a: " + velocidade + " KM/H");
  velocidade += aceleracao;
} while (velocidade <= 100);

//  do/faça {
//     bloco de codigo
// } white/ate(parametro)
// quando tenho certeza que vou executar pelo menos 1 vez
//pois ele só avalia o paramentro no final,
//diferente do "wihle" que verifica primeiro
