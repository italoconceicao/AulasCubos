const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

//a)
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1;
    }
})

console.log(numeros);

//b)
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento > segundoElemento) {
        return -1;
    }
})

console.log(numeros);

//c)
numeros.sort()
console.log(numeros);

//d)
frutas.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento.localeCompare(segundoElemento);
})

console.log(frutas);

//d)
frutas.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento.localeCompare(primeiroElemento);
})

console.log(frutas);

//e)
frutas.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento.length < segundoElemento.length) {
        return -1;
    }
})

console.log(frutas);