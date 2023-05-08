const texto = "Aprenda programar do zero na Cubos Academy";

let textoAmigavel = texto.toLowerCase();

while (textoAmigavel !== textoAmigavel.replace(" ", "-")) {
    textoAmigavel = textoAmigavel.replace(" ", "-");
}
console.log(textoAmigavel);