const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const elementoMaisLongo = cidades.reduce((acumulador, valorAtual) => {
    if (valorAtual.length > acumulador.length) {
        acumulador = valorAtual;
    }
    return acumulador;
})

console.log(elementoMaisLongo);