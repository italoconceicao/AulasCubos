const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const existePalavraComMaisDeCincoCaracteres = palavras.some((palavra) => {
    return palavra.length > 5;
})

if (existePalavraComMaisDeCincoCaracteres) {
    console.log(`Existe palavra inválida`)
} else {
    console.log(`Array validado`);
}