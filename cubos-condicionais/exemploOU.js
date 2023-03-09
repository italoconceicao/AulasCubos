let temIngresso = true;
const censura = 16;
let idade = 8;
let estaComOsPais = true;

if (temIngresso) {
    if (idade >= censura || estaComOsPais === true) {
        console.log(`Pode assistir ao filme.`);
    } else {
        console.log(`Volte quando tiver mais de ${censura} anos!`);
    }
} else {
    console.log(`Se tiver mais de ${censura} anos, compre ingresso primeiro.`);
}; 