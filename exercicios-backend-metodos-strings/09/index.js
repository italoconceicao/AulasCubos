// O nickname deve conter, no máximo, 13 caracteres;
// Deve começar sempre com "@";

const nome = 'Guido Cerqueira';
let nomeFormatado;

function transformaNomeEmNickname(texto) {
    nomeFormatado = texto.replace(" ", "");
    nomeFormatado = nomeFormatado.toLowerCase();
    nomeFormatado = "@" + nomeFormatado;
    nomeFormatado = nomeFormatado.slice(0, 13);
    console.log(nomeFormatado);
};

transformaNomeEmNickname(nome);