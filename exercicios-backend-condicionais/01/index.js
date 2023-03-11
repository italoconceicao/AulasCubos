const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 === jogada2) {
    console.log(`Empate.`)
} else if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "pedra")) {
    console.log(`Pedra.`)
} else if ((jogada1 === "pedra" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log(`Papel.`)
} else if ((jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "tesoura")) {
    console.log(`Tesoura.`)
} else {
    console.log(`Algo deu errado com a sua jogada.`)
}