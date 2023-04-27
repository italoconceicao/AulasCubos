const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let respostasCertas = 0;
let quantidadeDeQuestões = 0;

function corrigirProva(prova) {
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            respostasCertas++
            // console.log(respostasCertas);
        };
        quantidadeDeQuestões++
    };


    let nota = (prova.valor / quantidadeDeQuestões) * respostasCertas;
    console.log(`O aluno(a) ${prova.aluno} acertou ${respostasCertas} questões e obteve nota ${nota}.`);
};

corrigirProva(prova);