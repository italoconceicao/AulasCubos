const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorNumero = 0;
let menorNumero = Number.MAX_SAFE_INTEGER;

for (numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}

for (numero of numeros) {
    if (numero < menorNumero) {
        menorNumero = numero;
    }
}

console.log(maiorNumero - menorNumero);