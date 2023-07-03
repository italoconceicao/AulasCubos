const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesComALetraA = nomes.filter((nome) => {
    return (nome[0] === "a" || nome[0] === "A")
})

console.log(nomesComALetraA);