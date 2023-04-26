// Olá... Eu sou João e tenho 25 anos de idade. Sou programador e minha cor preferida é verde!

const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
};

const { nome, idade, profissao, cor_preferida } = usuario;

console.log(`Olá... Eu sou ${nome} e tenho ${idade}. Sou ${profissao} e minha cor preferida é ${cor_preferida}`);