//valor do produto comprado em centavos.
const valorDoProduto = 1000_00 / 100;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago em reais
const valorPago = 300;

let valorRestante = (valorDoProduto - valorPago);
let valorParcelas = valorDoProduto / quantidadeDoParcelamento;
let parcelasRestantes = valorRestante / valorParcelas;

if (valorPago <= 1000_00) {
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcelas}`);
};
