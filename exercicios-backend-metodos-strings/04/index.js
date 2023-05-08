let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificarFormatado = identificador.padStart(6, "0");
nome = nome.split(" ")
let nomeFormatado = ""
for (cada of nome) {
    let primeiraLetra = cada.slice(0, 1)
    let restanteNome = cada.slice(1);
    primeiraLetra = primeiraLetra.toUpperCase();
    nomeFormatado += primeiraLetra + restanteNome + " ";
}
emailFormatado = email.trim();

console.log(identificarFormatado);
console.log(nomeFormatado)
console.log(emailFormatado)
