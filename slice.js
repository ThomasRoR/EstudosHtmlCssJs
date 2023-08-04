//significa fatiar ou dividir
//extrai uma parte da array sem alterar a array original
//sintaxe: array.slice([begin[,end]])

let carroNome = ['mercedes','ferrari','redbull','mclaren']

let carrosDesqualificados = carroNome.slice(1,3)
alert(carrosDesqualificados)
alert(carroNome)