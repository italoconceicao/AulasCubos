const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let i = 0;
function rodada() {
    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log(`A rodada terminou!`)
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(rodada, (10 / jogadores.length) * 1000)





// const temporizador = (arrayDeJogadores) => {
//     let contador = 1;


//     function listarJogadores() {
//         for (jogador of arrayDeJogadores) {
//             console.log(jogador)
//             contador++
//         }

//         if (contador > arrayDeJogadores.length) {
//             console.log(`A rodada terminou!`)
//             clearInterval(apresentacao);
//         }
//     }

//     const apresentacao = setInterval(listarJogadores, 2000);
// }

// temporizador(jogadores)




