let temIngresso = true;
const censura = 16;
let idade = 18;

if (temIngresso == true && idade >= censura) {
    console.log(`Pode assistir ao filme.`);
} else {
    console.log(`Se tiver mais de ${censura} anos, compre ingresso primeiro.`);
};