const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

let carrosSelecionados = nomes.splice(posicao, 3);
carrosSelecionados = carrosSelecionados.join(" - ");
console.log(carrosSelecionados);


// A função deverá encontrar o carro na posição informada no segundo parâmetro e capturar 3 carros subsequentes incluindo o que foi encontrado na posição informada. A função deve imprimir o resultado.