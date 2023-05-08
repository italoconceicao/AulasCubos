const email = "aluno@cubos.academy";

let primeiroDigito = email.slice(0, 1);
let ultimoDigito = email.slice(-1);
let contemArroba = email.includes("@");
let contemPonto = email.includes(".")
if ((primeiroDigito !== "." && ultimoDigito !== "." && contemArroba === true && contemPonto === true)) {
    console.log(`E-mail válido`)
} else {
    console.log(`E-mail inválido`)
};