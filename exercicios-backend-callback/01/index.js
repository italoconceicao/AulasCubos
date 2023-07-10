const tabuada = (numero, callback) => {

    callback(numero);
}

const callback = (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabuada(5, callback)