// são permitidos arquivos: jpg, jpeg, gif e png;
const nomeArquivo = 'Foto da Familia.pdf';
let indexDoFormato;
let formatoDoArquivo;


function arquivoValido(nome) {
    indexDoFormato = nome.indexOf(".");
    formatoDoArquivo = nome.slice(indexDoFormato + 1);
    if ((formatoDoArquivo === "jpg" || formatoDoArquivo === "jpeg" || formatoDoArquivo === "gif" || formatoDoArquivo === "png")) {
        console.log("Arquivo válido.")
    } else {
        console.log("Arquivo inválido.")
    };
};

arquivoValido(nomeArquivo);