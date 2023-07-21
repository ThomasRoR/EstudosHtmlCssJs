function speedUp(velocidade, aceleracao, unit = "KM/H"){
    let novaVelocidade= velocidade + aceleracao
    console.log("Nova aceleração: " + novaVelocidade + unit)
}
speedUp(50, 20)