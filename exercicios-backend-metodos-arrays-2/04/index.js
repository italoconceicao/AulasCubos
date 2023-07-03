// Se todos os itens do array forem par, o programa deverá imprimir array válido, senão array inválido.
const numeros = [0, 122, 4, 6, 7, 8, 44]

const todosPares = numeros.every((numero) => {
    return numero % 2 === 0;
})

if (todosPares) {
    console.log(`Array válido`);
} else {
    console.log(`Array Inválido`);
}