

const tabuada = (arraydeNumeros, callback) => {

    callback(arraydeNumeros);
}

const callback = (arraydeNumeros) => {
    for (let j = 0; j < arraydeNumeros.length; j++) {
        for (let i = 0; i <= 10; i++) {
            console.log(`${arraydeNumeros[j]} x ${i} = ${arraydeNumeros[j] * i}`);
        }
        console.log(`---------------`)
    }
}

tabuada([1, 5, 2], callback);