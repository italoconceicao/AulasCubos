const jovens = [];
const adultos = [];
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

//definir quais usuarios são jovens ou adultos
//separa-los em diferentes const

for (usuario of usuarios) {
    if (usuario.idade >= 18) {
        adultos.push(usuario);
    } else {
        jovens.push(usuario);
    };
};


console.log(jovens);
console.log(adultos);