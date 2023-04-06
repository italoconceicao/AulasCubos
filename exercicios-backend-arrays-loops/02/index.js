const letras = ["A", "a", "B", "C", "E", "e"];
let letrasE = 0;
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        letrasE++;
    }
}
if (letrasE > 0) {
    console.log(`Foram encontradas ${letrasE} letras "E" ou "e".`)
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}


