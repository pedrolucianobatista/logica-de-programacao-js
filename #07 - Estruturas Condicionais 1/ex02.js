// Prática 02: 
// Par ou Ímpar? 

const prompt = require('prompt-sync')();

let valor = Number(prompt('Digite um número, e veja se ele é ímpar ou par: '));

if (valor % 2 == 0) {
    console.log(`O valor ${valor} é PAR!`);
} else {
    console.log(`O valor ${valor} é ÍMPAR!`);
}
