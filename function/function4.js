function speedUp(velocidade, aceleracao){
    let novaVelocidade = velocidade+aceleracao
    console.log("nova velocidade " + novaVelocidade)
    return novaVelocidade
}

console.log(speedUp(20, 5))