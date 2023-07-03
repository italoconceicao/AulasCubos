const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maisDeOitoCaracteres = cidades.filter((cidade) => {
    return cidade.length <= 8;
})

console.log(maisDeOitoCaracteres);

console.log(maisDeOitoCaracteres.join(", "))