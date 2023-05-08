const numeroCartao = '1111222233334444';

let primeiros4dig = numeroCartao.slice(0, 4);
let ultimos4dig = numeroCartao.slice(-4);

console.log(`${primeiros4dig}********${ultimos4dig}`);