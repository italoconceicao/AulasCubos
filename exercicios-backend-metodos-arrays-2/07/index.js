const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function descobrirNomeDaRua(enderecos, cep) {
    const nomeDaRua = enderecos.find((endereco) => {
        if (endereco.cep === cep) {
            console.log(endereco.rua);
        };
    });
};

descobrirNomeDaRua(endereços, 00222444);