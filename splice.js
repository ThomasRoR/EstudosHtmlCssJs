//splice = emenndar ou costurar
//substitui o array original
// sintaxe = array.splice(index[, deleteCount][, elemento 1[,...[, elementoN]]])

let carroNome = ['mercedes','ferrari','redbull','mclaren']

alert(carroNome)

let carrosDesqualificados = carroNome.splice(1,2, 'aston martin','haas', 'alpine')
alert(carrosDesqualificados)
alert(carroNome)