const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens() {
        let totalDeItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            totalDeItens += this.produtos[i].qtd;
        }
        return totalDeItens;
    },

    calcularTotalAPagar() {
        let totalAPagar = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            totalAPagar += (this.produtos[i].precoUnit * this.produtos[i].qtd) / 100;
        }
        return totalAPagar;
    },
    imprimirResumo() {


        let totalDeItens = this.calcularTotalDeItens()
        let totalAPagar = this.calcularTotalAPagar()


        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de Itens: ${totalDeItens}`);
        console.log(`Total a Pagar: R$${totalAPagar.toFixed(2)}`);
    },
    addProduto(produto) {
        let i = 0;
        let contadorDeFalse = 0;
        for (produtoAtual of this.produtos) {
            i++;
            if (produtoAtual.id === produto.id) {
                produtoAtual.qtd += produto.qtd;
            } else {
                contadorDeFalse++;
            };
        };
        if (i === contadorDeFalse) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes() {
        let i = 0
        let totalDeItens = this.calcularTotalDeItens()
        let totalAPagar = this.calcularTotalAPagar()
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(``);
        for (produtoAtual of this.produtos) {
            i++
            console.log(`Item ${i} - ${produtoAtual.nome} - ${produtoAtual.qtd} und - R$${produtoAtual.precoUnit / 100} `);
        };
        console.log(``);
        console.log(`Total de Itens: ${totalDeItens}`);
        console.log(`Total a Pagar: R$${totalAPagar.toFixed(2)}`);
    }
};

carrinho.imprimirResumo(carrinho);

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();
console.log(``);
carrinho.imprimirDetalhes();

//                                                              PRONTO ATÉ A LETRA H