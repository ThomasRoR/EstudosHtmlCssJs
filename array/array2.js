let carros = ['mercedes', 'ferrari','redBull']

console.log(carros);

carros.push('McLaren')

console.log(carros);

let carroRemovido = carros.pop()

console.log(carros);

console.log(carroRemovido);

let carroRemovido2 = carros.shift()

console.log(carros);

carros.unshift('AlphaTauri')

console.log(carros);

console.log(carros.length);

let posicaoCarro = carros.indexOf('ferrari')

console.log(posicaoCarro);

console.log(carros.indexOf('willians'));


//push = adiciona
//pop = remove o ultimo  
//shift = remove o primeiro
//unshift = adiciona no inicio
//length = quantidade de itens no array
//indexOf = buscar posicao no array (se n tiver o elemento no array sera = -1)
