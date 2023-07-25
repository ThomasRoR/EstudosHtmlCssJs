function vel2(vel, printer) {
    console.log("entrei em vel2");
    let newVel = vel * 2
    printer(newVel)
    return newVel
}

// let printVel = vel => {
//     console.log("nova velocidade: " + vel + "km/h");
// }

// let newVel = vel2(60, printVel)
// console.log(newVel );

let otherVel = vel2(50, vel=> {
    console.log("nova velocidade: " + vel + "km/h");
})