const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasInvertidas = frutas.reverse();
let frutasInvertidasString = frutasInvertidas.join(", ");
console.log(frutasInvertidasString);

let novoArrayFrutas = frutas.reverse();
novoArrayFrutas.pop();
novoArrayFrutas.shift();
novoArrayFrutas.push("Melão");
console.log(novoArrayFrutas);