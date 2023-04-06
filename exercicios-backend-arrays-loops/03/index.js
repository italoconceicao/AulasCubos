const numeros = [54, 22, 14, 87, 284];
let menosUm = 0;

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(numeros[i]);
    } else {
        menosUm++;
    };
}
if (menosUm > 0) {
    console.log(-1);
}

//exibir -1 se não tiver o número 10