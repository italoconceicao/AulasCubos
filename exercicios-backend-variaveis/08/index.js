//Perímetro e área de um círculo

let R = 1;
const pi = Math.PI;

let C = 2 * pi * R; //Comprimento
let A = pi * R ** 2; //Área
C = C.toFixed(2);
A = A.toFixed(2);

console.log(`O Comprimento do círculo é de ${C} e a área é de ${A}.`)