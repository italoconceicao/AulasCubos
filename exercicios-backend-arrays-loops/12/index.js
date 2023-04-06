const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let cliente;

if (filaDeFora.length >= 0) {
    while (filaDeDentro.length < 5) {
        cliente = filaDeFora.shift();
        filaDeDentro.push(cliente);
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);