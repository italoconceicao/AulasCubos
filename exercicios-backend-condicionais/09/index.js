// 9 a 10	A
// 8 a 8,9	B
// 6 a 7,9	C
// 4 a 5,9	D
// menos que 4	E

let nota = 8.5;

if (nota >= 9) {
    nota = "A";
} else if (nota >= 8 && nota <= 8.9) {
    nota = "B";
} else if (nota >= 6 && nota <= 7.9) {
    nota = "C";
} else if (nota >= 4 && nota <= 5.9) {
    nota = "D";
} else {
    nota = "E";
};

console.log(`O estudando obteve conceito ${nota}`);