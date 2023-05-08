const cpf = "011.022.033-44";
let cpfFormatado;
cpfFormatado = cpf.replace("-", "");
while (cpfFormatado !== cpfFormatado.replace(".", "")) {
    cpfFormatado = cpfFormatado.replace(".", "");
};
console.log(cpfFormatado);