const cpf = "12345678900";
const cnpj = "12345678900998";
let cpfFormatado;

const checarCpf = (cpf) => {
    if (cpf.length === 11) {
        let primeiraParte = cpf.slice(0, 3);
        let segundaParte = cpf.slice(3, 6);
        let terceiraParte = cpf.slice(6, 9);
        let ultimaParte = cpf.slice(-2);

        console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}-${ultimaParte}`);
    } else {
        console.log(`CPF Inválido.`)
    }
};

const checarCnpj = (cnpj) => {
    if (cnpj.length === 14) {
        let primeiraParte = cnpj.slice(0, 3);
        let segundaParte = cnpj.slice(3, 6);
        let terceiraParte = cnpj.slice(6, 9);
        let quartaParte = cnpj.slice(9, 12);
        let ultimaParte = cnpj.slice(-2);

        console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}/${quartaParte}-${ultimaParte}`);
    } else {
        console.log(`CNPJ Inválido.`)
    }
};





checarCpf(cpf);
checarCnpj(cnpj);