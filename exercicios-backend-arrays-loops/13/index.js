// const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [false, true, true, false, false, true, false, false, true, true];
let numeroDoDisjuntor = 0;

for (disjuntor of disjuntores) {
    if (disjuntor) {
        console.log(numeroDoDisjuntor);
    };
    numeroDoDisjuntor++
};