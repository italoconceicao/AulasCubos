const original = [1, 4, 12, 21, 53, 88, 112];
let arrayDePares = [];

for (numero of original) {
    if (numero % 2 === 0) {
        arrayDePares.push(numero);
    }
};

console.log(arrayDePares);