const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let novoNomes = []
for (nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        novoNomes.push(nome);
    }
}

console.log(novoNomes);