const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos > 28_559_70) {
    console.log("PEGA LEÃO");
} else {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}