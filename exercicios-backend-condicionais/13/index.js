//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinal;

if (tipoDePagamento === "credito") {
    valorFinal = valorDoProduto - (valorDoProduto * 0.05);
    console.log(`Valor a ser pago: R$${valorFinal}`);
} else if (tipoDePagamento === "cheque") {
    valorFinal = valorDoProduto - (valorDoProduto * 0.03);
    console.log(`Valor a ser pago: R$${valorFinal}`);
} else {
    valorFinal = valorDoProduto - (valorDoProduto * 0.10);
    console.log(`Valor a ser pago: R$${valorFinal}`);
};