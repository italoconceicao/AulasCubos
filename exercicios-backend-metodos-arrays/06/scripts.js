const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

//  Supondo que estamos buscando o pet `Max`, ao encontrar, o sistema deverá imprimir a mensagem `O dono(a) do(a) Max é o(a) João`, caso contrário, irá imprimrir `Que pena Max, não encontramos seu dono(a)`.

function encontrarODono(usuarios, animal) {
    for (usuario of usuarios) {
        let indiceDoAnimal = usuario.pets.indexOf(animal);
        if (indiceDoAnimal > -1) {
            console.log(`O dono(a) do(a) ${animal} é o(a) ${usuario.nome}`)
        };
    };
};

encontrarODono(usuarios, "Lessie");