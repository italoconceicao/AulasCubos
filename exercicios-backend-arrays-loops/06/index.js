const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaPar = 0;

for (numero of numeros) {
    if (numero % 2 === 0) {
        somaPar += numero;
    }
}

console.log(somaPar);