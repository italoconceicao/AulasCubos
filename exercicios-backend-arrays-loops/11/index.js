const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novaLista = [];
for (numero of original) {
    if ((numero >= 10 && numero <= 20) || numero > 100) {
        novaLista.push(numero);
    };
};

console.log(novaLista);