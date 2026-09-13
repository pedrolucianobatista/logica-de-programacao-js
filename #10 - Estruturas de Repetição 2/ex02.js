// Prática 02: Quantos números são negativos? 

const prompt = require('prompt-sync')(); 

let cont_neg = 0;
let resp = ''; 

do {
    let valor = Number(prompt('Digite um valor: ')); 
    if (valor < 0) {
        cont_neg++
    }
    resp = prompt('Quer digitar mais um número? [sim/não] '); 
} while (resp == "sim") 

console.log(`Foram digitados ${cont_neg} números negativos`);
