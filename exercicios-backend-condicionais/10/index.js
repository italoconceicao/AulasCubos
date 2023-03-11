// Vogal	A E I O U a e i o u
// Consoante	Qualquer letra que não seja uma vogal
// Número	1 2 3 4 5 6 7 9 0
// Seu programa deverá dizer qual a categoria do caractere. Caso a categoria seja Vogal, seu programa deverá ainda informar se a vogal é maiúscula ou minúscula.

const caractere = "I";

if ((caractere === "1") || (caractere === "2") || (caractere === "3") || (caractere === "4") || (caractere === "5") ||
    (caractere === "6") || (caractere === "7") || (caractere === "8") || (caractere === "9") || (caractere === "0")) {
    console.log(`Número`)
} else if ((caractere === "A") || (caractere === "E") || (caractere === "I") || (caractere === "O") || (caractere === "U")) {
    console.log(`Vogal Maiúscula`)
} else if ((caractere === "a") || (caractere === "e") || (caractere === "i") || (caractere === "o") || (caractere === "u")) {
    console.log(`Vogal Minúscula`)
} else {
    console.log(`Consoante`)
};