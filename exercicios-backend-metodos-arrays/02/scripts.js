const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Guido', 'Dani', 'Ruli', 'Diego', 'Guido', 'Dani', 'Ruli', 'Diego', 'Ruli', 'Diego', 'Guido', 'Dani', 'Ruli', 'Diego', 'Guido', 'Dani', 'Ruli', 'Diego', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(nomes, tamanho) {
    let i = 0;
    while (nomes.length > 4) {
        let primeirosQuatroNomes = nomes.splice(0, tamanho);
        primeirosQuatroNomes = primeirosQuatroNomes.join(", ")
        console.log(`Grupo${++i}: ${primeirosQuatroNomes}`)
    }
    console.log(`Grupo${++i}: ${nomes}`)
}


dividirGrupos(nomes, tamanhoDoGrupo);