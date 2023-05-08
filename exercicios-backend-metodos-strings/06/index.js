const celular = 7199918888;
let celularFormatado = celular.toString();
let ddd = celularFormatado.slice(0, 2);
let primeiraParte = celularFormatado.slice(-4);
let segundaParte = celularFormatado.slice(-8, -4);
if (celularFormatado.length === 8) {
    console.log(`9 ${primeiraParte}-${segundaParte}`)
} else {
    console.log(`(${ddd}) 9 ${primeiraParte}-${segundaParte}`)
}

// console.log(segundaParte)