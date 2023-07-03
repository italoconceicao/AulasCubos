const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
let i = 0;

const frutasFormatado = frutas.map((fruta) => {
    let frutaCaps = fruta[0].toUpperCase();
    let frutasResto = fruta.slice(1);
    let frutasRestoLowerCase = frutasResto.toLowerCase();
    return `${i++} - ${frutaCaps + frutasRestoLowerCase}`;
})

console.log(frutasFormatado);