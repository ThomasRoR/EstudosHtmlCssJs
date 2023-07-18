let num = 3;
console.log(num == "3");

console.log(num === "3");

console.log(num != 3);

//  && = e || = ou ! = não

let velocity = 20;
let spaceship = "elemental";

console.log(spaceship.length == 9 || velocity > 15);
// v ou v = v
console.log(velocity > 10 || velocity < 19);
// v ou f = v
console.log(velocity < 17 || spaceship == "elemental");
// f ou v = v
console.log(spaceship == "golias" || velocity > 21);
// f ou f = f

//--------------------

console.log(spaceship.length == 9 && velocity > 15);
// v e v = v
console.log(velocity > 10 && velocity < 19);
// v e f = f
console.log(velocity < 17 && spaceship == "elemental");
// f e v = f
console.log(spaceship == "golias" && velocity > 21);
// f e f = f

console.log(
  !(velocity > 25 && spaceship == "elemental") ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15)
);
//(!(velocity > 25 && spaceship == "elemental") ||( 17 == 17 && 10 > 15));
//(!(F ) ||( F ));
// !F || F ;
// V || F;
// V;
