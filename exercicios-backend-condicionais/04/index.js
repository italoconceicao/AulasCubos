const ladoA = 4;
const ladoB = 4;

if (ladoA === ladoB) {
    if (ladoA === 0) { console.log(`Bucha de Branco`); }
    if (ladoA === 1) { console.log(`Bucha de Ás`); }
    if (ladoA === 2) { console.log(`Bucha de Duque`); }
    if (ladoA === 3) { console.log(`Bucha de Terno`); }
    if (ladoA === 4) { console.log(`Bucha de Quadra`); }
    if (ladoA === 5) { console.log(`Bucha de Quina`); }
    if (ladoA === 6) { console.log(`Bucha de Sena`); }
} else {
    console.log(`Não é Bucha.`);
}