let dataPartidaInput = prompt(
  "Digite a data da partida (FORMATO = DD/MM/YYYY)"
);

let dataPartida = moment(dataPartidaInput, "DD/MM/YYYY");

let today = moment();

let dataDiff = today - dataPartida;

let escolhaUser = prompt(
  "Escolha como gostaria de exibir o tempo de partida\n1- Segundos \n2- Minutos\n 3- Horas\n 4- Dias"
);

if (escolhaUser == "1") {
  let segundosPartida = Math.round(dataDiff / 1000);
  alert("Tempo de Voo " + segundosPartida + " Segundos");
} else if (escolhaUser == "2") {
  let minutosPartida = Math.round(dataDiff / 1000 / 60);
  alert("Tempo de Voo " + minutosPartida + " Minutos");
} else if (escolhaUser == "3") {
  let horasPartida = Math.round(dataDiff / 1000 / 60 / 60);
  alert("Tempo de Voo " + horasPartida + " Horas");
} else if (escolhaUser == "4") {
  let diaPartida = Math.round(dataDiff / 1000 / 60 / 60 / 24);
  alert("Tempo de Voo " + diaPartida + " Dias");
} else {
  alert("Opção inválida");
}
