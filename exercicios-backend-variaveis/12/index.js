//Taxa de Juros


let M = 90_000.00;//Montante
let C = 60_000.00;//Capital Inicial
let n = 24;//Número de meses

let i = (M / C) ** (1 / n) - 1; //Taxa de Juros
i *= 100;
i = i.toFixed(3);

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${M} reais.`);