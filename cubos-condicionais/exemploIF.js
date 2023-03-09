let temIngresso = true;
const censura = 16;
let idade = 6;

if (temIngresso == true) {
    if (idade >= censura) {
        console.log(`Pode assistir ao filme.`);
    } else {
        console.log(`Volte quando tiver mais de ${censura} anos!`);
    }
} else {
    console.log(`Se tiver mais de ${censura} anos, compre ingresso primeiro.`);
};